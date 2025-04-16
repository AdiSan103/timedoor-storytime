<script lang="ts" setup>
import { useForm } from "vee-validate";
import * as yup from "yup";

import Input from "@/components/ui/Input.vue";
import InputSelect from "@/components/ui/InputSelect.vue";
import InputTextarea from "@/components/ui/InputTextarea.vue";
import InputImage from "@/components/ui/InputImage.vue";

import imageDefault from "@/assets/images/notfound_story.png";
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
// const content_images = ref<File[]>([]);
const previewUrls = ref<string[]>([]);
const allowMultiple = true; // set to false if you want single image upload

//
const selectOptions = ref([]);

// Schema for form validation
const schema = yup.object({
  title: yup.string().required("is required"),
  category_id: yup.string().required("is required"),
  content: yup.string().required("is required"),
  // content_images: yup.string().required("is required"),
});

// Use vee-validate for form management and validation
const { defineField, handleSubmit, errors, resetForm } = useForm({
  validationSchema: schema,
});

// Define fields using defineField for individual input management
const [title] = defineField("title");
const [category_id] = defineField("category_id");
const [content] = defineField("content");
const [content_images] = defineField("content_images");

const fetchCategories = () => {
  loading.value = true;

  $api.categories
    .getCategories()
    .then((res) => {
      selectOptions.value = res.data; // ✅ karena res.data.value = PropsStory
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      loading.value = false;
    });
};

function handleFileChange(event: Event) {
  const target = event.target as HTMLInputElement;
  const files = target.files;

  if (!files || files.length === 0) return;

  // Reset before updating
  content_images.value = [];
  previewUrls.value = [];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    content_images.value.push(file);

    // Generate preview URL
    const url = URL.createObjectURL(file);
    previewUrls.value.push(url);
  }
}

// function
const onSubmit = handleSubmit(() => {
  // loading.value = true;

  const formData = new FormData();

  formData.append("title", title.value);
  formData.append("content", content.value);
  formData.append("category_id", category_id.value);

  // Ensure content_images.value is treated as an array
  const imageArray = Array.isArray(content_images.value)
    ? content_images.value
    : [content_images.value]; // wrap in array if it's a single file

  imageArray.forEach((file: File) => {
    formData.append("content_images[]", file); // correctly append as array
  });

  // const formData = new FormData();

  // formData.append("title", title.value);
  // formData.append("content", content.value);
  // formData.append("category_id", category_id.value);
  // formData.append("content_images[]", content_images.value);

  console.log("data form", formData);

  // console.log("type images");
  // console.log(typeof content_images.value); // Should be "object"
  // console.log(content_images.value); // Should show File or File[]

  $api.stories
    .addStory(formData)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      loading.value = false;
    });
});

fetchCategories();
</script>

<template>
  <LoadingScreen v-if="loading" />
  <section class="form container">
    <div class="form__nav">
      <Icon name="formkit:arrowleft" style="color: black" size="25" />
      <h3 class="form__heading1">Write Story</h3>
    </div>
    <form action="" class="form__contain" @submit.prevent="onSubmit">
      <Input
        placeholder="Enter a story title"
        label="Title"
        v-model="title"
        :error="errors.title"
      />
      <InputSelect
        label="Category"
        :options="selectOptions"
        v-model="category_id"
        :error="errors.category_id"
        optionValue="id"
        optionLabel="name"
      />
      <ClientOnly>
        <InputTextarea type="ckeditor" label="Content" v-model="content" />
      </ClientOnly>
      <p class="component__error">{{ errors.content }}</p>
      <div class="my-4">
        <label for="fileUpload" class="block mb-2 text-sm font-medium text-gray-700"
          >Upload Image</label
        >
        <input
          type="file"
          id="fileUpload"
          accept="image/*"
          :multiple="allowMultiple"
          @change="handleFileChange"
          class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
        />

        <div v-if="previewUrls.length > 0" class="mt-4">
          <p class="text-sm font-semibold mb-2">Preview:</p>
          <div class="flex gap-4 flex-wrap">
            <img
              v-for="(url, index) in previewUrls"
              :key="index"
              :src="url"
              class="w-32 h-32 object-cover rounded border"
              alt="Preview"
            />
          </div>
        </div>
      </div>
      <div class="form__actions">
        <Button variant="secondary" label="Cancel" />
        <Button label="Post Story" variant="primary" />
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
</style>
