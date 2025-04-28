<script lang="ts" setup>
import type { Story } from "~/type/module/stories";

import Card from "@/components/ui/Card.vue";
import CardSekeleton from "~/components/ui/CardSekeleton.vue";
import Separator from '@/components/ui/Separator.vue'
// Define props with TypeScript
interface Props {
  loading: boolean;
  items: Story[];
}

defineProps<Props>();
</script>

<template>
  <section class="cards container">
    <div class="cards__contain">
      <h2 class="cards__title">Romance</h2>
      <NuxtLink to="/story?category=romance" class="cards__link">Explore More
        <Icon name="formkit:arrowright" style="color: black" size="18" />
      </NuxtLink>
    </div>
    <Separator />
    <div class="cards__items">
      <!--  -->
      <CardSekeleton v-if="loading" />
      <CardSekeleton v-if="loading" />
      <CardSekeleton v-if="loading" />
      <CardSekeleton v-if="loading" />
      <!--  -->
      <Card v-for="(item, index) in items" :item="item" :key="index" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
/* width */
::-webkit-scrollbar {
  width: 0px;
}

.cards {
  &__contain {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    font-family: Playfair Display;
    font-weight: 600;
    font-size: 44px;
    line-height: 58px;
    letter-spacing: 0%;
  }

  &__link {
    font-family: DM Sans;
    font-weight: 400;
    font-size: clamp(1rem, calc(1vw + 0.5rem), 2rem);

    letter-spacing: 0%;
    vertical-align: middle;
    color: black;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  &__items {
    width: 100%;
    display: flex;
    gap: 20px;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
  }
}
</style>
