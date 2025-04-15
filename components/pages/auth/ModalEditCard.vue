<script lang="ts" setup>
import Button from "~/components/ui/Button.vue";

const model = defineModel()

const handleClose = () => {
  model.value = !model.value
}
</script>

<template>
  <div class="component"  v-if="model">
    <div class="component__contain">
      <h2 class="component__title">Delete Story</h2>
      <p class="component__desc">Are you sure want to delete this story?</p>
      <div class="component__buttons">
        <Button label="Cancel" variant="secondary" @click="handleClose" />
        <Button label="Delete" variant="primary" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.component {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.29);
  z-index: 80;
  width: 100vw;
  height: 100vh;

  &__title {
    font-family: DM Sans;
    font-weight: 700;
    font-size: 36px;
    line-height: 46px;
    letter-spacing: 0%;
    text-align: center;
  }

  &__desc {
    font-family: DM Sans;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0%;
    text-align: center;
    margin: 2px 0 40px 0;
  }

  &__contain {
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 40px;
    border-radius: 10px;
  }

  &__buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    width: 100%;
  }
}
</style>
