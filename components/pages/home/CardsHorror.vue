<script lang="ts" setup>
import type { Story } from "~/type/module/stories";

import Card from "@/components/ui/Card.vue";
import CardSekeleton from "~/components/ui/CardSekeleton.vue";

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
      <h2 class="cards__title">Horror</h2>
      <NuxtLink to="/story?category=horror" class=" cards__link">Explore More
        <Icon name="formkit:arrowright" style="color: black" size="18" />
      </NuxtLink>
    </div>
    <Separator />
    <div class="cards__items">
      <Card height="770" :item="items[0]" v-if="!loading" />
      <CardSekeleton v-if="loading" height="770" />
      <div class="cards__left">
        <CardSekeleton v-if="loading" />
        <CardSekeleton v-if="loading" />
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

  &__items {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }

  &__left {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}

@media screen and (max-width: 600px) {
  .cards__items {
    flex-direction: column;
  }
}
</style>
