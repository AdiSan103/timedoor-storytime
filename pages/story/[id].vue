<script setup lang="ts">
import type { Story } from "~/type/module/stories";

import Card from "~/components/ui/Card.vue";
import Breadcumb from "~/components/ui/Breadcumb.vue";
import SliderThumbs from '@/components/pages/story/SliderThumbs.vue'
import Separator from "~/components/ui/Separator.vue";
import DetailSekeleton from "@/components/pages/story/DetailSekeleton.vue";
import LoadingScreen from "@/components/ui/LoadingScreen.vue";


definePageMeta({
  layout: "home",
});

// declaration variable
const { $api, $toast } = useNuxtApp();

const lastestStory: Ref<Story[]> = ref([]);
const lastestStoryLoading = ref(false);

const story: Ref<Story | undefined> = ref();
const storyLoading = ref(false);

const route = useRoute();
const id = ref(route.params.id);

const bookmarkStatus = ref(false);
const loading = ref(false);

// function
const fetchstory = () => {
  storyLoading.value = true;

  $api.stories
    .getDetailStory(id.value)
    .then((res: any) => {
      story.value = res.data; // ✅ karena res.data.value = PropsStory

      // meta
      useSeoMeta({
        title: story?.value?.title,
        ogTitle: story?.value?.title,
        // description: 'This is my amazing site, let me tell you all about it.',
        // ogDescription: 'This is my amazing site, let me tell you all about it.',
      })
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      storyLoading.value = false;
    });
};

// function
const fetchLastestStory = () => {
  lastestStoryLoading.value = true;

  const keywords = {
    sort_by: 'lastest',
  }

  $api.stories
    .getFilter(keywords)
    .then((res) => {
      lastestStory.value = res.data; // ✅ karena res.data.value = PropsStory
      // console.log('data', res)
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      lastestStoryLoading.value = false;
    });
};

// function
const toggleBookmark = () => {
  loading.value = true;
  const dataForm = {
    story_id: id.value
  }

  $api.bookmark.toggle(dataForm)
    .then((res) => {
      // message
      $toast("You've successfully bookmarked this story", {
        type: "success",
        position: "top-center",
        autoClose: 3000,
        transition: "zoom",
        dangerouslyHTMLString: true
      });
      // console.log('message', res)
    })
    .catch((err) => {
      // message
      $toast("Login required to bookmark..", {
        type: "info",
        position: "top-center",
        autoClose: 3000,
        transition: "zoom",
        dangerouslyHTMLString: true
      });
      console.log('message', err);
    })
    .finally(() => {
      loading.value = false;
    });
}

// lifecycle
fetchstory();
fetchLastestStory();
</script>

<template>
  <LoadingScreen v-if="loading" />
  <Breadcumb />
  <div class="detail container">
    <!--  -->
    <DetailSekeleton v-if="storyLoading" />
    <!--  -->
    <section v-if="!storyLoading" class="detail__title">
      <p class="detail__label" data-aos="fade-up">{{ story?.created_at }}</p>
      <h1 class="detail__title" data-aos="fade-up">{{ story?.title }}</h1>
      <div class="detail__avatar" data-aos="fade-up">
        <div :style="{ backgroundImage: `url(${story?.user.profile_image ?? 'https://placehold.co/600x600'})` }"
          class="detail__user"></div>
        <p class="detail__label" data-aos="fade-up">Author : {{ story?.user.name }}</p>
      </div>
      <!--  -->
      <div class="detail__bookmark" @click="toggleBookmark">
        <Icon name="material-symbols:bookmark-add-outline-rounded" style="color: #fff" size="25" />
      </div>
    </section>
    <section v-if="!storyLoading" class="detail__content">
      <div class="detail__contentleft">
        <SliderThumbs v-if="story?.content_images != null" :items="story?.content_images" />
      </div>
      <div class="detail__contentright" v-html="story?.content">
      </div>
    </section>

    <section>
      <h3 class="detail__heading3">Similiar Story</h3>
      <Separator />
      <div class="detail__items">
        <div v-for="(item, index) in lastestStory" :key="index">
          <Card :item="item" />
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";

.detail {
  &__bookmark {
    background-color: $color3;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    position: absolute;
    top: 0;
    cursor: pointer;
    right: 0;
  }

  &__title {
    text-align: center;
    margin-bottom: 50px;
    position: relative;
  }

  &__heading2 {
    font-family: Playfair Display;
    font-weight: 600;
    font-size: 44px;
    letter-spacing: 0%;
    margin-bottom: 40px;
    margin-top: 100px;
  }

  &__label {
    font-family: DM Sans;
    font-weight: 400;
    font-size: clamp(1rem, calc(1vw + 0.5rem), 2rem);
    letter-spacing: 0%;
    text-align: center;
    margin: 0;
  }

  &__title {
    font-family: Playfair Display;
    font-weight: 700;
    font-size: 60px;
    letter-spacing: 0%;
    text-align: center;
    margin-bottom: 40px;
  }

  &__avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  &__user {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 30px;
    width: 30px;
    border-radius: 100%;
  }

  &__content {
    display: flex;
    gap: 40px;
    margin-bottom: 40px;
  }

  &__contentleft {
    width: 40%;
  }

  &__contentright {
    width: 60%;
  }

  &__items {
    margin: 50px 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
  }
}
</style>
