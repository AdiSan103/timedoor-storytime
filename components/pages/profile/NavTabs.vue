<script setup lang="ts">
import Button from "@/components/ui/Button.vue";

const activePosition = ref("LEFT") // value : "LEFT" | "RIGHT"
const model = defineModel()

const handleActive = () => {
 if (activePosition.value == "LEFT") {
  activePosition.value = "RIGHT"
  model.value = "RIGHT"
 } else {
  activePosition.value = "LEFT"
  model.value = "LEFT"
 }
}
</script>

<template>
 <div class="component">
  <div :class="[
   'component__active',
   {
    'component--btnleft': activePosition == 'LEFT',
    'component--btnright': activePosition == 'RIGHT'
   }
  ]">
  </div>
  <UiButton label="My Story" variant="light" classCustom="component__button component--btn1" @click="handleActive()" />
  <UiButton label="Bookmark" variant="light" classCustom="component__button component--btn2" @click="handleActive()" />
 </div>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";

.component {
 position: relative;
 display: flex;
 justify-content: space-between;
 align-items: center;
 width: 100%;
 max-width: 500px;
 min-height: 130px;
 margin-bottom: 20px;
 margin-top: 20px;

 &__active {
  height: 130px;
  width: 50%;
  background-color: $color2;
  position: absolute;
  border-radius: 10px;
  transition: 0.5s ease-in-out;
 }

 &--btnleft {
  transform: translateX(0%);
 }

 &--btnright {
  transform: translateX(100%);
 }

 &__button {
  padding: 40px;
  position: absolute;
  background: none !important;
  height: 130px;
  width: 50% !important;
 }

 &--btn1 {
  left: 0;
 }

 &--btn2 {
  right: 0;
 }

}
</style>