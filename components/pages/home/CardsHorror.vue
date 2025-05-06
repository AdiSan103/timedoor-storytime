<script lang="ts" setup>
import type { Story } from "~/type/module/stories";

import Card from "@/components/ui/Card.vue";
import CardSekeleton from "~/components/ui/CardSekeleton.vue";
import Separator from '@/components/ui/Separator.vue'

// Define props with TypeScript
interface Props {
  classCustom?: string;
  classCustomItems?: string;
  loading: boolean;
  items: Story[];
}

defineProps<Props>();
</script>
<template>
  <section class="container">
    <div class="cards__contain">
      <div data-aos="fade-left">
        <h2 class="cards__title">Horror</h2>
      </div>
      <NuxtLink to="/story?category=horror" class=" cards__link">Explore More
        <Icon name="formkit:arrowright" style="color: black" size="18" />
      </NuxtLink>
    </div>
    <UiSeparator />
    <div class="cards__items row row-cols-lg-2 row-cols-1">
      <Card height="770" :item="items[0]" v-if="!loading" />
      <UiCardSekeleton v-if="loading" height="770" />
      <div class="col">
        <UiCardSekeleton v-if="loading" />
        <UiCardSekeleton v-if="loading" />
        <Card :item="items[1]" v-if="!loading" />
        <Card :item="items[2]" v-if="!loading" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.cards {
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
    cursor: pointer;
    color: black;

    &:hover {
      text-decoration: underline;
    }
  }

  &__contain {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
