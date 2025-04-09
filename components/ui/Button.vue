<script setup lang="ts">
import { defineProps } from "vue";

// Define props with TypeScript
interface Props {
  label: string;
  href?: string;
  variant?: "primary" | "secondary" | "success" | "light";
  type?: "button" | "submit" | "reset" | "disabled";
  classCustom?: string
}

defineProps<Props>();
</script>

<template>
  <template v-if="href">
    <a :href="href" class="base__link">{{ label }}</a>
  </template>
  <template v-else>
    <button
      :class="[
        'base ',
        classCustom,
        variant == 'primary' ? ' base--primary ' : '',
        variant == 'secondary' ? ' base--secondary ' : '',
        variant == 'success' ? ' base--success ' : '',
        variant == 'light' ? ' base--light ' : '',
        type == 'disabled' ? ' base--disabled ' : '',
      ]"
      :disabled="type === 'disabled'"
    >
      {{ label }}
    </button>
  </template>
</template>

<style scoped lang="scss">
@import "@/assets/main.scss";

.base {
  transition: 0.5s;
  padding-top: 8px;
  padding-right: 18px;
  padding-bottom: 8px;
  padding-left: 18px;
  border-radius: 8px;
  font-family: DM Sans;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0%;
  vertical-align: middle;

  &--primary {
    background-color: $color3;
    color: $color1;

    &:hover {
      background-color: $color8;
    }
  }

  &--disabled {
    background-color: $color11;
  }

  &--secondary {
    background-color: $color1;
  }

  &--success {
    background-color: $color2;
    border: none;
    font-weight: bold;
  }

  &--light {
    background-color: white;
    border: none;
    font-weight: bold;
  }
}
</style>
