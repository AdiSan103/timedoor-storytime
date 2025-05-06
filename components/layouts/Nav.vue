<script setup lang="ts">
import Breadcumb from '../ui/Breadcumb.vue';
import { defineProps } from "vue";

// Define props with TypeScript
interface Props {
  query: any;
}

defineProps<Props>();
</script>

<template>
  <h3 class="container title">{{ query ?? 'All Story' }}</h3>
  <UiBreadcumb />
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";

.title {
  font-family: Playfair Display;
  font-weight: 600;
  font-size: 44px;
  line-height: 58px;
  letter-spacing: 0%;
  margin-top: 30px;
  margin-bottom: 40px;
}
</style>
