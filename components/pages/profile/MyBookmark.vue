<script lang="ts" setup>
import type { BookmarksResponse } from "~/type/module/bookmark";

import CardSekeleton from "~/components/ui/CardSekeleton.vue";
import CardBookmark from "~/components/ui/CardBookmark.vue";
// import Pagination from "@/components/ui/Pagination.vue";

import imgNotFound from "~/assets/images/notfound_bookmark.png";

// declaration variable
const { $api } = useNuxtApp();
const story: Ref<BookmarksResponse | any> = ref([]);
const storyLoading = ref(false);
const storyPage = ref(1);

// function
const fetchstory = () => {
  story.value = [];
  storyLoading.value = true;

  $api.bookmark
    .getAllByUser(storyPage.value)
    .then((res) => {
      story.value = res; // ✅ karena res.data.value = PropsStory
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

<template>
  <section class="mystory__items">
    <div class="mystory__cards">
      <!--  -->
      <UiCardSekeleton v-if="storyLoading" />
      <UiCardSekeleton v-if="storyLoading" />
      <UiCardSekeleton v-if="storyLoading" />
      <UiCardSekeleton v-if="storyLoading" />
      <!--  -->
      <CardBookmark v-for="(item, index) in story.data" :key="index" :item="item" />
    </div>
    <!-- pagination -->
    <!-- <Pagination classCustom="mystory__pagination" :total="story.meta?.total" :per_page="story.meta?.per_page"
          :last_page="story.meta?.last_page" v-model="storyPage" v-if="story.data.length != 0" /> -->
    <!-- not found -->
    <div class="mystory__notfound" v-if="story && story.data && story.data.length === 0">
      <h3 class="mystory__heading1">No Bookmarks Yet</h3>
      <p class="mystory__desc">
        You haven't saved any bookmarks yet. Explore and bookmark your top workouts!
      </p>
      <img :src="imgNotFound" alt="not found" class="mystory__image" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";

.mystory {
  background-color: $color2;

  &__pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px auto;
  }

  &__badges {
    display: flex;
    gap: 10px;
    padding: 30px 0;
  }

  &__button {
    padding: 40px;
  }

  &__content {
    display: flex;
    gap: 40px;
  }

  &__left {
    width: 30%;
  }

  &__right {
    width: 70%;
  }

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
}

.user {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 30px 0;

  &__profile {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 200px;
    width: 100%;
    max-width: 200px;
    border-radius: 100%;
  }

  &__content {
    max-width: 700px;
  }

  &__title {
    font-family: DM Sans;
    font-weight: 700;
    font-size: clamp(24px, 3vw + 1rem, 36px);
    letter-spacing: 0%;
    vertical-align: middle;
  }

  &__email {
    font-family: DM Sans;
    font-weight: 400;
    font-size: clamp(1rem, calc(1vw + 0.5rem), 2rem);
    letter-spacing: 0%;
    vertical-align: middle;
  }

  &__desc {
    font-family: DM Sans;
    font-weight: 400;
    font-size: clamp(1rem, calc(1vw + 0.5rem), 2rem);
    letter-spacing: 0%;
    vertical-align: middle;
    text-align: justify;
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
