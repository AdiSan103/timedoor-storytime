<script setup lang="ts">
interface Props {
  classCustom?: string;
  label?: string;
  link?: string;
}

defineProps<Props>();
</script>

<template>
  <NuxtLink v-if="link" :to="link" :class="['badgeitem', classCustom]">
    {{ label }}
  </NuxtLink>
  <div v-else :class="['badgeitem', classCustom]">
    {{ label }}
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";

.badgeitem {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $color2;
  padding: 3px 6px;
  border-radius: 6px;
  text-align: center;

  font-family: DM Sans;
  font-weight: 400;
  font-size: 10px;
  letter-spacing: 0%;

  color: $color3;
  text-decoration: none;
}
</style>
