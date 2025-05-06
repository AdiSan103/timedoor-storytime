<script setup lang="ts">
import { defineProps } from "vue";

const model = defineModel()

// Define props with TypeScript
interface Props {
  type?: string;
  placeholder?: string;
  classCustom?: string;
  icon?: string;
  label?: string;
  error?: string;
  disabled?: boolean;
}

defineProps<Props>();

// type == 'password'
const togglePassword = ref(true);
const handlePassword = () => {
  togglePassword.value = !togglePassword.value;
};
</script>

<template>
  <div>
    <label for="" class="component__label">{{ label }}</label>
    <div :class="['component ', classCustom, error ? 'component--error' : '']">
      <!-- condition type password -->
      <input autocomplete="" :type="togglePassword === false ? 'text' : type" :placeholder="placeholder"
        class="component__input" :disabled="disabled" v-model="model" />
      <Icon :name="icon" style="color: black" size="25" v-if="icon" />
      <!-- type password -->
      <Icon class="component__password" :name="togglePassword ? 'ph:eye-light' : 'mdi-light:eye-off'"
        style="color: black" size="25" v-if="type == 'password'" @click="handlePassword" />
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
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border: 2px solid #cccccc;
  padding-right: 15px;
  cursor: pointer;

  &__input {
    width: 100%;
    border: none;
    padding-top: 15px;
    padding-right: 30px;
    padding-bottom: 15px;
    padding-left: 30px;

    &:focus {
      border: none;
      outline: none;
    }

    &:disabled {
      background-color: rgb(245, 243, 243);
      cursor: not-allowed;
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
