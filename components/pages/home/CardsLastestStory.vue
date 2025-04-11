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
  <section :class="['cards container ', classCustom]">
    <div class="cards__contain">
      <h2 class="cards__title">Latest Story</h2>
      <NuxtLink to="/#" class="cards__link"
        >Explore More <Icon name="formkit:arrowright" style="color: black" size="18" />
      </NuxtLink>
    </div>
    <Separator />
    <div :class="['cards__items ', classCustomItems]">
      <!--  -->
      <CardSekeleton v-if="loading" />
      <CardSekeleton v-if="loading" />
      <CardSekeleton v-if="loading" />
      <CardSekeleton v-if="loading" />
      <!--  -->
      <Card v-for="(item,index) in items" :item="item" :key="index" v-else />
    </div>
  </section>
</template>

<style lang="scss" scoped>
/* width */
::-webkit-scrollbar {
  width: 0px;
}

.cards {
  height: 800px;

  &__contain {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
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
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 0%;
    vertical-align: middle;
    cursor: pointer;
    color: black;

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
    position: absolute; // make overflow scrollable
  }
}
</style>
