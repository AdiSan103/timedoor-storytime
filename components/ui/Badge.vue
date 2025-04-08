<template>
  <div :class="classCustom">Comedy</div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

// Define props with TypeScript
interface Props {
  classCustom?: string;
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
@import "@/assets/main.scss";

div {
  display: flex;
  background-color: $color2;
  padding: 3px 6px;
  border-radius: 6px;

  font-family: DM Sans;
  font-weight: 400;
  font-size: 10px;
  letter-spacing: 0%;

  color:  $color3;
}
</style>
