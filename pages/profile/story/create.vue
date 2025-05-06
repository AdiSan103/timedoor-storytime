<script lang="ts" setup>
import { ref } from 'vue';
import { useForm } from "vee-validate";
import * as yup from "yup";
import { Cropper } from 'vue-advanced-cropper';
import 'vue-advanced-cropper/dist/style.css';

// meta
definePageMeta({
  layout: "home",
  middleware: ["auth-user"],
});

// initialize variable state
const { $api, $bModal } = useNuxtApp();
const loading = ref(false);
const selectOptions: any = ref([]);

// Schema for form validation  
const schema = yup.object({
  title: yup.string().required("is required"),
  category_id: yup.string().required("is required"),
  content: yup.string().required("is required"),
  content_images: yup.mixed().required("is required"),
});

// Use vee-validate for form management and validation
const { defineField, handleSubmit, errors, resetForm } = useForm({
  validationSchema: schema,
});

// Define fields
const [title] = defineField("title");
const [category_id] = defineField("category_id");
const [content] = defineField("content");
const [content_images] = defineField("content_images");

// Fetch categories
const fetchCategories = () => {
  loading.value = true;
  $api.categories
    .getCategories()
    .then((res) => {
      selectOptions.value = res.data;
    })
    .catch((err) => console.error(err))
    .finally(() => (loading.value = false));
};

// Handle form submit
const onSubmit = handleSubmit(() => {
  loading.value = true;

  const formData: any = new FormData();
  formData.append("title", title.value);
  formData.append("content", content.value);
  formData.append("category_id", category_id.value);

  const imageArray = Array.isArray(content_images.value)
    ? content_images.value
    : [content_images.value];

  imageArray.forEach((file: File) => {
    formData.append("content_images[]", file);
  });

  // 🔥 ADD THIS: Log user input before sending to API
  console.log("User Input:");
  console.log({
    title: title.value,
    category_id: category_id.value,
    content: content.value,
    images: imageArray, // list of selected/cropped images
  });

  $api.stories
    .addStory(formData)
    .then((res) => {
      console.log('✅ success', res);
      resetForm();
      resetCrop();
    })
    .catch((err) => console.error('❌ error', err))
    .finally(() => (loading.value = false));
});

fetchCategories();

// ---- IMAGE CROPPER HANDLING ----
const cropper = ref<InstanceType<typeof Cropper> | null>(null);
const croppedImage = ref<string[] | null>([]);
const uploadedImage = ref<string[] | null>([]);

// Handle upload file
const onFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input.files) {
    const files = Array.from(input.files);
    uploadedImage.value = [];

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = (e.target as FileReader).result as string;
        uploadedImage.value?.push(result);
        $bModal.show('CropperImageModal'); // Open after each file
      };
      reader.readAsDataURL(file);
    });
  }
};

// Crop image
const handleCrop = async () => {
  if (cropper.value) {
    const result = cropper.value.getResult();
    const { canvas } = result;
    if (canvas) {
      const dataUrl = canvas.toDataURL();
      croppedImage.value.push(dataUrl);

      const file = await dataUrlToFile(dataUrl, `cropped-${Date.now()}.png`);

      // Push each cropped file into content_images
      const existing = content_images.value || [];
      content_images.value = [...existing, file];
    }
  }

  $bModal.toggle('CropperImageModal');
};


// Helper: convert base64 to File
const dataUrlToFile = (dataUrl: string, filename: string): Promise<File> => {
  return fetch(dataUrl)
    .then((res) => res.arrayBuffer())
    .then((buf) => new File([buf], filename, { type: "image/png" }));
};

// lifecycle
watch(uploadedImage, (newValue) => {
  if (newValue) {
    $bModal.show('CropperImageModal')
  }
})
</script>


<template>
  <UiLoadingScreen v-if="loading" />
  <section class="form container">
    <div class="form__nav">
      <NuxtLink to="/profile">
        <Icon name="formkit:arrowleft" style="color: black" size="25" />
      </NuxtLink>
      <h3 class="form__heading1">Write Story</h3>
    </div>

    <form @submit.prevent="onSubmit" class="form__contain" enctype="multipart/form-data">
      <UiInput placeholder="Enter a story title" label="Title" v-model="title" :error="errors.title" />
      <UiInputSelect label="Category" :options="selectOptions" v-model="category_id" :error="errors.category_id"
        optionValue="id" optionLabel="name" />

      <ClientOnly>
        <UiInputTextarea type="ckeditor" label="Content" v-model="content" :error="errors.content" />
      </ClientOnly>

      <!-- Image upload -->
      <div class="my-4">
        <label class="block mb-2 text-sm font-medium text-gray-700">Upload Image</label>

        <div>
          <UiInput type="file" @change="onFileChange" accept="image/png, image/jpeg"
            style="width: 100%; margin-bottom: 16px;" />

          <!-- Modal -->
          <div class="modal fade" id="CropperImageModal" tabindex="-1" aria-labelledby="CropperImageModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="CropperImageModalLabel">Cropper Image</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <Cropper ref="cropper" class="cropper" :src="uploadedImage" />
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
                  <button class="btn btn-outline-primary" @click="handleCrop">Crop</button>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div v-if="croppedImage.length">
          <div class="row row-cols-lg-4 row-cols-2">
            <div v-for="(img, index) in croppedImage" :key="index" class="col">
              <img :src="img" class="image-preview" />
            </div>
          </div>
        </div>

        <p class="text-danger fst-italic">{{ errors.content_images }}</p>
      </div>

      <!-- Actions -->
      <div class="form__actions">
        <UiButton variant="secondary" label="Cancel" type="button" @click="resetForm" />
        <UiButton label="Post Story" variant="primary" type="submit" />
      </div>
    </form>
  </section>
</template>


<style lang="scss" scoped>
.form {
  padding: 50px 0;

  &__nav {
    display: flex;
    gap: 30px;
    align-items: center;
  }

  &__heading1 {
    font-family: Playfair Display;
    font-weight: 600;
    font-size: 44px;
    line-height: 58px;
    letter-spacing: 0%;
  }

  &__contain {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  &__actions {
    display: flex;
    gap: 20px;
    margin: 40px 0 10px;
  }
}

.cropper {
  height: 600px;
  width: 600px;
  background: #DDD;
  margin-bottom: 16px;
}

.image-preview {
  display: inline-block;
  border-radius: 20px;
  width: 300px;
  height: 300px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

button {
  display: block;
}
</style>
