<script lang="ts" setup>
import Button from "@/components/ui/Button.vue";
import Modal from "~/components/pages/auth/mystory/Modal.vue";
import CardSekelton from "~/components/ui/CardSekelton.vue";
import Card from "~/components/ui/Card.vue";

import imgNotFound from "~/assets/images/notfound_bookmark.png";
// meta
definePageMeta({
  layout: "home",
});

// declaration variable
const { $api } = useNuxtApp();
const story: Ref<Story[]> = ref([]);
const storyLoading = ref(false);

// function
const fetchstory = () => {
  storyLoading.value = true;

  $api.stories
    .getStories("newest")
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

<template>
  <section class="mystory">
    <div class="container user">
      <img class="user__profile" src="/images/image-book.png" alt="" />
      <div class="user__content">
        <p class="user__title">Iswara</p>
        <p class="user__email">dewiratnaiswara99@gmail.com</p>
        <p class="user__desc">
          Avid reader and aspiring writer. Lover of mysteries, thrillers, and sci-fi.
          Coffee enthusiast and nature explorer. Always on the lookout for new stories and
          adventures.
        </p>
      </div>
      <Button label="Edit Profile" variant="primary" />
    </div>
  </section>
  <section class="mystory__items container">
    <div class="mystory__badges">
      <Button label="My Story" variant="success" classCustom="mystory__button" />
      <Button label="Bookmark" variant="light" classCustom="mystory__button" />
    </div>
    <div class="mystory__content">
      <div class="mystory__left">
        <Modal />
      </div>
      <div class="mystory__right">
        <div class="mystory__cards">
          <!--  -->
          <CardSekelton v-if="storyLoading" />
          <CardSekelton v-if="storyLoading" />
          <CardSekelton v-if="storyLoading" />
          <CardSekelton v-if="storyLoading" />
          <!--  -->
          <Card v-for="item in story" :item="item" />
        </div>
        <!-- not found -->
        <div class="mystory__notfound">
          <h3 class="mystory__heading1">No Bookmarks Yet</h3>
          <p class="mystory__desc">
            You haven't saved any bookmarks yet. Explore and bookmark your top workouts!
          </p>
          <img :src="imgNotFound" alt="not found" class="mystory__image" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";

.mystory {
  background-color: $color2;

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
    font-size: 24px;
    line-height: 32px;
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
    font-size: 36px;
    letter-spacing: 0%;
    vertical-align: middle;
  }

  &__email {
    font-family: DM Sans;
    font-weight: 400;
    font-size: 24px;
    letter-spacing: 0%;
    vertical-align: middle;
  }

  &__desc {
    font-family: DM Sans;
    font-weight: 400;
    font-size: 24px;
    letter-spacing: 0%;
    vertical-align: middle;
    text-align: justify;
  }
}
</style>
