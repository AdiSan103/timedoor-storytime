<template>
  <section class="mystory__items">
    <div class="mystory__cards">
      <!--  -->
      <UiCardSekeleton v-if="storyLoading" />
      <UiCardSekeleton v-if="storyLoading" />
      <UiCardSekeleton v-if="storyLoading" />
      <UiCardSekeleton v-if="storyLoading" />
      <!--  -->
      <CardEdit v-for="(item, index) in story" :key="index" :item="item" />
    </div>
    <!-- not found -->
    <div class="mystory__notfound" v-if="!storyLoading && story.length === 0">
      <h3 class="mystory__heading1">No Stories Yet</h3>
      <p class="mystory__desc">
        You haven't shared any stories yet. Start your fitness journey today!
      </p>
      <img :src="imgNotFound" alt="not found" class="mystory__image" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { Story } from "~/type/module/stories";

import CardSekeleton from "~/components/ui/CardSekeleton.vue";
import CardEdit from "~/components/ui/CardEdit.vue";

import imgNotFound from "~/assets/images/notfound_story.png";

// declaration variable
const { $api } = useNuxtApp();
const story: Ref<Story[]> = ref([]);
const storyLoading = ref(false);

// function
const fetchstory = () => {
  storyLoading.value = true;

  const keywords = {
    // sort_by: "",
    // search: "",
    // category: "",
  };

  $api.stories
    .getFilter(keywords)
    .then((res) => {
      story.value = res.data; // ✅ karena res.data.value = PropsStory
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      storyLoading.value = false;
    });
};

// lifecycle
fetchstory();
</script>

<style lang="scss" scoped>
@import "@/assets/main.scss";

.mystory {

  &__cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
  }

  &__notfound {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px;
  }

  &__heading1 {
    font-family: Playfair Display;
    font-weight: 600;
    font-size: 44px;
    line-height: 58px;
    letter-spacing: 0%;
    text-align: center;
  }

  &__desc {
    font-family: DM Sans;
    font-weight: 400;
    font-size: clamp(1rem, calc(1vw + 0.5rem), 2rem);

    letter-spacing: 0%;
  }

  &__image {
    width: 100%;
    max-width: 500px;
  }

  &__modal {
    height: 300px;
    width: 100%;
    border-radius: 10px;
  }
}


@media screen and (max-width: 900px) {
  .mystory {
    &__content {
      flex-direction: column;
    }

    &__left {
      width: 100%;
    }

    &__right {
      width: 100%;
    }
  }
}
</style>
