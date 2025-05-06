<template>
  <section class="container banner">
    <div data-aos="fade-up">
      <h1 class="banner__title">Welcome to Storytime</h1>
    </div>
    <div data-aos="fade-up">
      <p class="banner__desc">
        The world's most-loved social storytelling platform. Story time connects a global
        community of 90 million readers and writers through the power of story.
      </p>
    </div>
    <form data-aos="zoom-in" @submit.prevent="handleSearch">
      <UiInput placeholder="Search Story" classCustom="banner__input" icon="iconoir:search" v-model="search"
        @click="handleSearch" />
    </form>
    <div data-aos="zoom-in">
      <img src="/images/image1.png" alt="" class="banner__image" />
    </div>
  </section>
  <!-- lastest -->
  <PagesHomeCardsSlider :items="lastestStory" :loading="lastestStoryLoading" title="Lastest Story"
    link_explore="/story?sort_by=newest" />
  <!-- comedy -->
  <PagesHomeCardsThumb v-if="isLgUp" :items="comedy" :loading="comedyLoading" title="Comedy"
    link_explore="/story?sort_by=comedy" />
  <PagesHomeCardsSlider v-else :items="comedy" :loading="comedyLoading" title="Comedy"
    link_explore="/story?sort_by=comedy" />
  <!-- romance -->
  <PagesHomeCardsSlider :items="romance" :loading="romanceLoading" title="Romance"
    link_explore="/story?sort_by=romance" />
  <!-- horror -->
  <PagesHomeCardsThumb v-if="isLgUp" :items="horror" :loading="horrorLoading" title="Horror"
    link_explore="/story?sort_by=horror" />
  <PagesHomeCardsSlider v-else :items="horror" :loading="horrorLoading" title="Horror"
    link_explore="/story?sort_by=horror" />
  <!-- categories -->
  <PagesHomeCardsCategories :items="categories" :loading="categoriesLoading" />
</template>

<script setup lang="ts">
// import
import type { Category } from "~/type/module/categories";
import type { Story } from "~/type/module/stories";

// meta
definePageMeta({
  layout: "home",
});

// declaration variable
const { $api, $toast } = useNuxtApp();
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

const search = ref("");

// function
const fetchLastestStory = () => {
  lastestStoryLoading.value = true;

  const keywords = {
    sort_by: "newest",
  };

  $api.stories
    .getFilter(keywords)
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

  const keywords = {
    category: slug,
  };

  $api.stories
    .getFilter(keywords)
    .then((res) => {
      data.value = res.data;
      // console.log(slug, data.value);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      loading.value = false;
    });
};

const handleSearch = async () => {
  if (search.value == "") {

    $toast("❌ Error: Search input cannot be empty!", {
      type: "error",
      position: "top-center",
      autoClose: 3000,
      transition: "zoom",
      dangerouslyHTMLString: true,
    });
  } else {
    await navigateTo({
      path: "/story",
      query: {
        search: search.value,
      },
    });
  }
};

// lifecycle
fetchLastestStory();
fetchCategories();
fetchStoryFilterByCategory("Romance", romance, romanceLoading);
fetchStoryFilterByCategory("Horror", horror, horrorLoading);
fetchStoryFilterByCategory("Comedy", comedy, comedyLoading);

// 
import { useWindowSize } from '@vueuse/core'

// Get reactive window width
const { width } = useWindowSize()

// Track whether screen is lg or up
const isLgUp = ref(width.value >= 992)

// Watch for changes to width and update isLgUp
watch(width, (newWidth) => {
  isLgUp.value = newWidth >= 992
})
</script>

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
    font-size: clamp(1.8rem, calc(5vw + 1rem), 5rem);
    line-height: 74px;
    letter-spacing: 0%;
    text-align: center;
    text-shadow: 0px 4px 4px #00000040;
  }

  &__desc {
    padding-top: 20px;
    font-family: DM Sans;
    font-weight: 400;
    font-size: clamp(1rem, calc(1vw + 0.5rem), 2rem);

    letter-spacing: 0%;
    text-align: center;
    max-width: 1412px;
  }

  &__input {
    width: 100% !important;
    max-width: 2000px;
    margin-top: 30px;
  }

  &__image {
    width: 100%;
    max-width: 802px;
    margin-top: 30px;
  }
}
</style>
