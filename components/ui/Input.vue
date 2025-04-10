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
    <div :class="['component ', classCustom]">
      <!-- condition type password -->
      <input
        :type="togglePassword === false ? 'text' : type"
        :placeholder="placeholder"
        class="component__input"
        v-model="model"
      />
      <Icon :name="icon" style="color: black" size="25" v-if="icon" />
      <!-- type password -->
      <Icon
        class="component__password"
        :name="togglePassword ? 'ph:eye-light' : 'mdi-light:eye-off'"
        style="color: black"
        size="25"
        v-if="type == 'password'"
        @click="handlePassword"
      />
    </div>
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
    font-size: 18px;
    letter-spacing: 0%;
    vertical-align: middle;
    margin-bottom: 10px;
  }

  &__password {
    cursor: pointer;
  }
}
</style>
