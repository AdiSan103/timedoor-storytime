<script setup lang="ts">
import Badge from "~/components/ui/Badge.vue";
import type { Category } from "~/type/module/categories";
import Separator from '@/components/ui/Separator.vue'

// Define props with TypeScript
interface Props {
  classCustom?: string;
  classCustomItems?: string;
  loading: boolean;
  items: Category[];
}

defineProps<Props>();
</script>

<template>
  <section class="container categories">
    <h2>More Categories</h2>
    <UiSeparator />
    <div class="categories__items" v-if="items">
      <Badge classCustom="categories__item" :label="item.name" :link="'/story?category=' + item.name"
        v-for="(item, index) in items" :key="index" />
      <!--  -->
    </div>
    <div class="categories__items" v-if="loading">
      <Badge classCustom="categories__item placeholder placeholder-glow" label="Loading..." />
      <Badge classCustom="categories__item placeholder placeholder-glow" label="Loading..." />
      <Badge classCustom="categories__item placeholder placeholder-glow" label="Loading..." />
      <Badge classCustom="categories__item placeholder placeholder-glow" label="Loading..." />
    </div>
  </section>
</template>

<style lang="scss" scoped>
/* width */
::-webkit-scrollbar {
  width: 0px;
}

.categories {
  padding: 40px 1rem;

  &__title {
    font-family: Playfair Display;
    font-weight: 600;
    font-size: 44px;
    line-height: 58px;
    letter-spacing: 0%;
  }

  &__items {
    gap: 20px;
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
  }

  &__item {
    font-size: clamp(16px, 1vw + 0.5rem, 18px);
    padding: 25px 20px;
  }
}
</style>
