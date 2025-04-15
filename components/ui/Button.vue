<script setup lang="ts">
import { NuxtLink } from "#components";
import { defineProps } from "vue";

// Define props with TypeScript
interface Props {
  label: string;
  link?: string;
  variant?: "primary" | "secondary" | "success" | "light";
  type?: "button" | "submit" | "reset" | "disabled";
  classCustom?: string;
}

defineProps<Props>();
</script>

<template>
  <button
    :class="[
      'base',
      classCustom,
      variant == 'primary' ? ' base--primary ' : '',
      variant == 'secondary' ? ' base--secondary ' : '',
      variant == 'success' ? ' base--success ' : '',
      variant == 'light' ? ' base--light ' : '',
      type == 'disabled' ? ' base--disabled ' : '',
    ]"
    :disabled="type === 'disabled'"
  >
    <NuxtLink :to="link" v-if="link">
      {{ label }}
    </NuxtLink>
    <span v-else> {{ label }}</span>
  </button>
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
  font-size: clamp(1rem,calc(1vw + 0.5rem),2rem);
  
  letter-spacing: 0%;
  vertical-align: middle;

  &--primary {
    background-color: $color3;
    color: $color8;
    color: $color1;

    a {
      color: $color1!important;
      text-decoration: none;
    }

    &:hover {
      background-color: $color8;
    }
  }

  &--disabled {
    background-color: $color11;
  }

  &--secondary {
    background-color: $color1;

    a {
      color: $color8!important;
      text-decoration: none;
    }
  }

  &--success {
    background-color: $color2;
    border: none;
    font-weight: bold;

    a {
      color:$color3!important;
      text-decoration: none;
    }
  }

  &--light {
    background-color: white;
    border: none;
    font-weight: bold;

    
    a {
      color:$color3!important;
      text-decoration: none;
    }
  }
}
</style>
