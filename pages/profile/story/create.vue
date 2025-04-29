<script lang="ts" setup>
import { ref } from 'vue';
import { useForm } from "vee-validate";
import * as yup from "yup";
import { Cropper } from 'vue-advanced-cropper';
import 'vue-advanced-cropper/dist/style.css';

import Input from "@/components/ui/Input.vue";
import InputSelect from "@/components/ui/InputSelect.vue";
import InputTextarea from "@/components/ui/InputTextarea.vue";
import Button from "~/components/ui/Button.vue";
import LoadingScreen from "@/components/ui/LoadingScreen.vue";

// meta
definePageMeta({
  layout: "home",
  middleware: ["auth-user"],
});

// initialize variable state
const { $api } = useNuxtApp();
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
const croppedImage = ref<string | null>(null);
const uploadedImage = ref<string | null>(null);

// Handle upload file
const onFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = (e) => {
      uploadedImage.value = (e.target as FileReader).result as string;
    };
    reader.readAsDataURL(input.files[0]);
  }
};

// Crop image
const crop = async () => {
  if (cropper.value) {
    const result = cropper.value.getResult();
    const { canvas } = result;
    if (canvas) {
      croppedImage.value = canvas.toDataURL();

      const file = await dataUrlToFile(canvas.toDataURL(), "cropped-image.png");
      content_images.value = file;
    }
  }
};

// Reset crop
const resetCrop = () => {
  croppedImage.value = null;
  uploadedImage.value = null;
};

// Helper: convert base64 to File
const dataUrlToFile = (dataUrl: string, filename: string): Promise<File> => {
  return fetch(dataUrl)
    .then((res) => res.arrayBuffer())
    .then((buf) => new File([buf], filename, { type: "image/png" }));
};
</script>


<template>
  <LoadingScreen v-if="loading" />
  <section class="form container">
    <div class="form__nav">
      <Icon name="formkit:arrowleft" style="color: black" size="25" />
      <h3 class="form__heading1">Write Story</h3>
    </div>

    <form @submit.prevent="onSubmit" class="form__contain" enctype="multipart/form-data">
      <Input placeholder="Enter a story title" label="Title" v-model="title" :error="errors.title" />
      <InputSelect label="Category" :options="selectOptions" v-model="category_id" :error="errors.category_id"
        optionValue="id" optionLabel="name" />

      <ClientOnly>
        <InputTextarea type="ckeditor" label="Content" v-model="content" />
      </ClientOnly>
      <p class="text-danger fst-italic">{{ errors.content }}</p>

      <!-- Image upload -->
      <div class="my-4">
        <label class="block mb-2 text-sm font-medium text-gray-700">Upload Image</label>

        <div v-if="!croppedImage">
          <input type="file" @change="onFileChange" accept="image/png, image/jpeg"
            style="width: 100%; margin-bottom: 16px;" />
          <Cropper ref="cropper" class="cropper" :src="uploadedImage" />
          <button type="button" @click="crop" style="margin-bottom: 16px;">Crop</button>
        </div>

        <div v-else>
          <img :src="croppedImage" class="image-preview" />
          <button type="button" @click="resetCrop" style="margin-top: 16px;">Change Image</button>
        </div>

        <p class="text-danger fst-italic">{{ errors.content_images }}</p>
      </div>

      <!-- Actions -->
      <div class="form__actions">
        <Button variant="secondary" label="Cancel" type="button" @click="resetForm" />
        <Button label="Post Story" variant="primary" type="submit" />
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
  border-radius: 50%;
  width: 300px;
  height: 300px;
}

button {
  display: block;
}
</style>
