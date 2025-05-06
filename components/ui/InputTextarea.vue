<script setup lang="ts">
import { defineProps } from "vue";
import { ref, computed } from "vue";
import { ClassicEditor, Essentials, Paragraph, Bold, Italic } from "ckeditor5";
import { Ckeditor } from "@ckeditor/ckeditor5-vue";

import "ckeditor5/ckeditor5.css";

// Define props with TypeScript
interface Props {
  placeholder?: string;
  classCustom?: string;
  label?: string;
  type: "basic" | "ckeditor";
  error: string;
}

defineProps<Props>();

const model = defineModel()

const config = computed(() => {
  return {
    licenseKey: "GPL", // Or 'GPL'.
    plugins: [Essentials, Paragraph, Bold, Italic],
    toolbar: ["undo", "redo", "|", "bold", "italic", "|"],
  };
});
</script>

<template>
  <div>
    <label for="" class="component__label">{{ label }}</label>
    <!-- condition type -->
    <ckeditor v-if="type == 'ckeditor'" v-model="model" :editor="ClassicEditor" :config="config"
      :class="['component ', classCustom]" />
    <!--  -->
    <textarea v-if="type == 'basic'" :class="['component ', classCustom]" v-model="model">
    {{ model }}
    </textarea>
    <p class="text-danger fst-italic">{{ error }}</p>
  </div>
</template>

<style lang="scss" scoped>
.component {
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border: 2px solid #cccccc;
  border-radius: 10px;
  padding: 10px;

  &__input {
    width: 100%;
    border: none;

    &:focus {
      border: none;
      outline: none;
    }
  }

  &__label {
    font-family: DM Sans;
    font-weight: 400;
    font-size: clamp(16px, 1vw + 0.5rem, 18px);
    letter-spacing: 0%;
    vertical-align: middle;
    margin-bottom: 10px;
  }

  &__password {
    cursor: pointer;
  }
}
</style>
