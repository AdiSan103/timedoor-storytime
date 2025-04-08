<template>
  <div :class="['items', classCustom]">
    <!-- prev -->
    <div class="item">Prev</div>
    <!-- active -->
    <div class="item active">1</div>
    <!-- list -->
    <div class="item">2</div>
    <div class="item">3</div>
    <!-- .... -->
    <div class="item">...</div>
    <!-- last page -->
    <div class="item">10</div>
    <!-- next -->
    <div class="item">Next</div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

// Define props with TypeScript
interface Props {
  classCustom?: string;
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
@import "@/assets/main.scss";

.items {
  display: flex;
  gap: 10px;

  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    min-width: 60px;
    background-color: $color2;
    font-family: DM Sans;
    font-weight: 700;
    font-size: 20px;
    letter-spacing: 0%;
    border-radius: 5px;

    &.active {
      background-color: $color3;
      color: $color1;
    }
  }
}
</style>
