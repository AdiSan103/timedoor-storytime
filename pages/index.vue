<script setup lang="ts">
// import
import type { Category, PropsCategory } from "~/type/module/categoris";

import Input from "@/components/ui/Input.vue";
import CardsLastestStory from "~/components/pages/home/CardsLastestStory.vue";
import CardsComedy from "~/components/pages/home/CardsComedy.vue";
import CardsRomance from "~/components/pages/home/CardsRomance.vue";
import CardsHorror from "~/components/pages/home/CardsHorror.vue";
import type { PropsStory, Story } from "~/type/module/stories";
import CardsCategories from "~/components/pages/home/CardsCategories.vue";

// meta
definePageMeta({
  layout: "home",
});

// declaration variable
const { $api } = useNuxtApp();
const lastestStory: Ref<Story[]> = ref([]);
const lastestStoryLoading = ref(false);

const categories: Ref<Category[]> = ref([]);
const categoriesLoading = ref(false);

const comedy: Ref<Story[]> = ref([]);
const comedyLoading = ref(false);

const horror: Ref<Story[]> = ref([]);
const horrorLoading = ref(false);

const romance: Ref<Story[]> = ref([]);
const romanceLoading = ref(false);

// function
const fetchLastestStory = () => {
  lastestStoryLoading.value = true;

  $api.stories
    .getStories("newest")
    .then((res) => {
      lastestStory.value = res.data; // ✅ karena res.data.value = PropsStory
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      lastestStoryLoading.value = false;
    });
};

const fetchCategories = () => {
  categoriesLoading.value = true;

  $api.categories
    .getCategories()
    .then((res) => {
      categories.value = res.data; // ✅ karena res.data.value = PropsStory
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      categoriesLoading.value = false;
    });
};

const fetchStoryFilterByCategory = (
  slug: string,
  data: Ref<Story[]>,
  loading: Ref<boolean>
) => {
  loading.value = true;

  $api.stories
    .getStoriesFilterByCategory(slug)
    .then((res) => {
      data.value = res.data;
      console.log(slug, data.value)
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      loading.value = false;
    });
};

// lifecycle
fetchLastestStory();
fetchCategories();
fetchStoryFilterByCategory("Romance",romance,romanceLoading)
fetchStoryFilterByCategory("Horror",horror,horrorLoading)
fetchStoryFilterByCategory("Comedy",comedy,comedyLoading)

</script>

<template>
  <section class="container banner">
    <h1 class="banner__title">Welcome to Storytime</h1>
    <p class="banner__desc">
      The world's most-loved social storytelling platform. Story time connects a global
      community of 90 million readers and writers through the power of story.
    </p>
    <Input placeholder="Search Story" classCustom="banner__input" icon="iconoir:search"/>
    <img src="/images/image1.png" alt="" class="banner__image" />
  </section>

  <CardsLastestStory :items="lastestStory" :loading="lastestStoryLoading" />
  <CardsComedy :items="comedy" :loading="comedyLoading"/>
  <CardsRomance :items="romance" :loading="romanceLoading"/>
  <CardsHorror :items="horror" :loading="horrorLoading"/>
  <CardsCategories :items="categories" :loading="categoriesLoading"/>
  
</template>

<style lang="scss" scoped>
/* width */
::-webkit-scrollbar {
  width: 0px;
}

.banner {
  padding: 50px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &__title {
    font-family: Playfair Display;
    font-weight: 400;
    font-size: 60px;
    line-height: 74px;
    letter-spacing: 0%;
    text-align: center;
    text-shadow: 0px 4px 4px #00000040;
  }

  &__desc {
    padding-top: 20px;
    font-family: DM Sans;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 0%;
    text-align: center;
    max-width: 1412px;
  }

  &__input {
    width: 100% !important;
    max-width: 1062px;
    margin-top: 30px;
  }

  &__image {
    width: 100%;
    max-width: 802px;
    margin-top: 30px;
  }
}
</style>
