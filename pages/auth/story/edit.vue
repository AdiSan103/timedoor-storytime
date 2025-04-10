<script lang="ts" setup>
import Input from "@/components/ui/Input.vue";
import InputSelect from "@/components/ui/InputSelect.vue";
import InputTextarea from "@/components/ui/InputTextarea.vue";
import InputImage from "@/components/ui/InputImage.vue";

import imageDefault from "@/assets/images/notfound_story.png";

// meta
definePageMeta({
  layout: "home",
});

//
const selectOptions = [
  {
    id: 1,
    name: "Food",
  },
  {
    id: 2,
    name: "Drinks",
  },
];
</script>

<template>
  <section class="form container">
    <div class="form__nav">
      <Icon name="formkit:arrowleft" style="color: black" size="25" />
      <h3 class="form__heading1">Edit Story</h3>
    </div>
    <form action="" class="form__contain">
      <Input placeholder="Enter a story title" label="Title" />
      <InputSelect
        label="Category"
        :options="selectOptions"
        optionValue="id"
        optionLabel="name"
      />
      <ClientOnly>
        <InputTextarea type="ckeditor" label="Content" />
      </ClientOnly>
      <InputImage :image_name="imageDefault" />
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
