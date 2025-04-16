<script lang="ts" setup>
import { defineProps } from "vue";

// current page
const model = defineModel()

// Define props with TypeScript
interface Props {
  classCustom?: string;
  total: number;
  // current_page: number,
  per_page: number;
  last_page: number;
}

const props = defineProps<Props>();

const handlePrev = () => {
  if(model.value != 1) {
    model.value--;
  }
}

const handleNext = () => {
  if(model.value != props.last_page) {
    model.value++;
  }
}
</script>

<template>
  <div :class="['items', classCustom]">
    <!-- prev -->
    <div class="items__item" @click="handlePrev">Prev</div>
    <!-- active -->
    <div class="items__item items__active">{{ model }}</div>
    <!-- list -->
    <!-- <div class="items__item">2</div> -->
    <!-- <div class="items__item">3</div> -->
    <!-- .... -->
    <div class="items__item">...</div>
    <!-- last page -->
    <div class="items__item">{{ last_page }}</div>
    <!-- next -->
    <div class="items__item" @click="handleNext">Next</div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";

.items {
  display: flex;
  gap: 10px;

  &__item {
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
  }
  
  &__active {
      background-color: $color3;
      color: $color1;
    }
}
</style>
