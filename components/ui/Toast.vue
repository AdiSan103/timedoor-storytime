<script setup lang="ts">
interface Props {
  message: string;
  type: "success" | "danger";
  status: boolean;
}

defineProps<Props>();
</script>
<template>
  <div class="toasts" v-if="status">
    <div
      :class="[
        'toasts__contain',
        { 'toasts--success': type === 'success', 'toasts--danger': type === 'danger' },
      ]"
    >
      <Icon name="la:check-circle" style="color: black" size="32" />
      <p class="toasts__desc">{{ message }}</p>
      <Icon
        name="proicons:cancel"
        style="color: black"
        size="22"
        class="toasts__cancel"
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
    position: fixed;
    top: 10;
    background-color: white;
    z-index: 99;
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
