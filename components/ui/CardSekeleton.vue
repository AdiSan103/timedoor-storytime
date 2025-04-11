<script setup lang="ts">
// Define props with TypeScript
interface Props {
  height?: string;
}

defineProps<Props>();
</script>

<template>
  <!-- card -->
  <div
    :style="{
      minHeight: (height ?? 300) + 'px',
    }"
    class="placeholder-glow sekeleton"
  >
    <div class="placeholder sekeleton__image"></div>
    <div class="placeholder sekeleton__title"></div>
    <div class="placeholder sekeleton__desc"></div>
    <div class="sekeleton__user">
      <div class="placeholder sekeleton__left"></div>
      <div class="placeholder sekeleton__right"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sekeleton {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 300px;
  gap: 10px;

  &__image {
    height: 300px;
    width: 100%;
    border-radius: 10px;
  }
  &__title {
    height: 80px;
    width: 100%;
    border-radius: 7px;
  }
  &__desc {
    height: 80px;
    border-radius: 7px;
  }
  &__user {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__left {
    height: 20px;
    width: 50px;
    border-radius: 4px;
  }
  &__right {
    height: 20px;
    width: 50px;
    border-radius: 4px;
  }
}
</style>
