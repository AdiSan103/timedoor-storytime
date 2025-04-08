<template>
  <div
    :class="['contain d-flex justify-content-between align-items-center ', classCustom]"
  >
    <input :type="type" :placeholder="placeholder" />
    <Icon name="iconoir:search" style="color: black" size="25" />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

// Define props with TypeScript
interface Props {
  href?: string;
  type?: string;
  placeholder?: string;
  classCustom?: string;
}

defineProps<Props>();
</script>

<style lang="scss">
.contain {
  gap: 8px;
  border-width: 2px;
  border-radius: 8px;
  padding-top: 15px;
  padding-right: 30px;
  padding-bottom: 15px;
  padding-left: 30px;

  border: 2px solid #cccccc;
}

input {
  width: 100%;
  border: none;
  &:focus {
    border: none;
    outline: none;
  }
}
</style>
