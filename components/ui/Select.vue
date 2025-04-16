<script lang="ts" setup>
import { defineProps } from "vue";

// Define props with TypeScript
interface Props {
  label?: string;
  options?: any[];
  classCustom?: string;
  optionValue: string;
  optionLabel: string;
  modelValue: string;
  error?: string
}
// defineProps<Props>();
const props = defineProps<Props>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();
</script>

<template>
  <div class="select">
    <label class="select__label">{{ label }}</label>
    <div :class="['select__wrapper ', classCustom]">
      <select class="select__input" :value="modelValue" @change="emit('update:modelValue', $event.target.value)">
        <option :value="item[`${optionValue}`]" v-for="(item, index) in options" :key="index">
          {{ item[`${optionLabel}`] }}
        </option>
      </select>
    </div>
    <p class="select__error">{{ error }}</p>
  </div>
</template>

<style lang="scss" scoped>
.select {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  &__label {
    font-family: "DM Sans";
    font-weight: 400;
    font-size: clamp(1rem, calc(1vw + 0.5rem), 2rem);

    display: block;
    width: 180px;
  }

  &__wrapper {
    position: relative;
    width: 100%;
    max-width: 300px;
  }

  &__input {
    max-width: 200px;
    font-family: "DM Sans";
    font-weight: 500;
    font-size: clamp(1rem, calc(1vw + 0.5rem), 2rem);

    border: none;
    outline: none;
  }

  &__error {
    color: red;
    font-style: italic;
    margin-top: 5px;
  }
}
</style>
