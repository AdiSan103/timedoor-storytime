<script setup lang="ts">

const model = defineModel()

interface Props {
  message: string;
  type: "success" | "info";
}

defineProps<Props>();

const handleToggle = () => {
  model.value = !model.value
}

</script>
<template>
  <div class="toasts" v-if="model">
    <div
      :class="[
        'toasts__contain',
        { 'toasts--success': type === 'success', 'toasts--info': type === 'info' },
      ]"
    >
      <Icon v-if="type == 'info'" name="akar-icons:info" style="color: black" size="32" />
      <Icon v-if="type == 'success'" name="la:check-circle" style="color: black" size="32" />
      <p class="toasts__desc">{{ message }}</p>
      <Icon
        name="proicons:cancel"
        style="color: black"
        size="22"
        class="toasts__cancel"
        @click="handleToggle"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.toasts {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 30px;
  z-index: 99;


  &__desc {
    margin: 0;
    padding-left: 5px;
    font-family: DM Sans;
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    letter-spacing: 0%;
    text-align: center;
  }

  &__contain {
    position:relative;
    background-color: white;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    border-radius: 10px;
    min-width: 500px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }

  &__cancel {
    position: absolute;
    right: 20px;
    cursor: pointer;
  }
}
</style>
