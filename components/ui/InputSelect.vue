<script setup lang="ts">
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
  <div>
    <label for="" class="component__label">{{ label }}</label>
    <div :class="['component ', classCustom, error ? 'component--error' : '']">
      <!-- condition type password -->
      <select class="component__input" :value="modelValue" @change="emit('update:modelValue', $event.target.value)">
        <option :value="item[`${optionValue}`]" v-for="(item, index) in options" :key="index">
          {{ item[`${optionLabel}`] }}
        </option>
      </select>
    </div>
    <p class="component__error">{{ error }}</p>
  </div>
</template>

<style lang="scss" scoped>
.component {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  border-width: 2px;
  border-radius: 8px;
  padding-top: 15px;
  padding-right: 30px;
  padding-bottom: 15px;
  padding-left: 30px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border: 2px solid #cccccc;

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

  &__error {
    color: red;
    font-style: italic;
    margin-top: 5px;
  }

  &--error {
    border: red solid 2px;
  }
}
</style>
