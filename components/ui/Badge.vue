<script setup lang="ts">
interface Props {
  classCustom?: string;
  label?: string;
  link?: string;
}

defineProps<Props>();
</script>

<template>
  <NuxtLink v-if="link" :to="link" :class="['badge', classCustom]">
    {{ label }}
  </NuxtLink>
  <div v-else :class="['badge', classCustom]">
    {{ label }}
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";

.badge {
  display: flex;
  background-color: $color2;
  padding: 3px 6px;
  border-radius: 6px;

  font-family: DM Sans;
  font-weight: 400;
  font-size: 10px;
  letter-spacing: 0%;

  color: $color3;
  text-decoration: none;
}
</style>
