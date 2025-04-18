<script lang="ts" setup>
import type { Story } from "~/type/module/stories";
import type { User } from "~/type/module/users";

import Button from "@/components/ui/Button.vue";
import Modal from "~/components/pages/auth/mystory/Modal.vue";
import CardSekeleton from "~/components/ui/CardSekeleton.vue";
import ModalEditProfile from "~/components/pages/auth/ModalEditProfile.vue";
import Toast from "~/components/ui/Toast.vue";

import imgNotFound from "~/assets/images/notfound_story.png";
import CardEdit from "~/components/ui/CardEdit.vue";
import UserSection from "~/components/pages/auth/UserSection.vue";

// meta
definePageMeta({
  layout: "home",
  middleware: ["auth-user"],
});

// declaration variable
const { $api } = useNuxtApp();
const story: Ref<Story[]> = ref([]);
const storyLoading = ref(false);

const user: Ref<User | undefined> = ref();
const userLoading = ref(false);

const modalProfileStatus = ref(false)

// function
const fetchstory = () => {
  storyLoading.value = true;

  const keywords = {
    sort_by: '',
    search: '',
    category: '',
  }
  
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

const fetchDetailUser = () => {
  userLoading.value = true;

  $api.users
    .getDetail()
    .then((res) => {
      user.value = res.user;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      userLoading.value = false;
    });
};

// lifecycle
fetchDetailUser();
fetchstory();
</script>

<template>
  <Toast message="Succesfully for updated data!" :status="false" type="success" />
  <ModalEditProfile v-model="modalProfileStatus" />
  <section class="mystory">
    <UserSection/>
  </section>
  <section class="mystory__items container">
    <div class="mystory__badges">
      <Button link="#" label="My Story" variant="success" classCustom="mystory__button" />
      <Button
        link="/auth/mybookmark"
        label="Bookmark"
        variant="light"
        classCustom="mystory__button"
      />
    </div>
    <div class="mystory__content">
      <div class="mystory__left">
        <Modal />
      </div>
      <div class="mystory__right">
        <div class="mystory__cards">
          <!--  -->
          <CardSekeleton v-if="storyLoading" />
          <CardSekeleton v-if="storyLoading" />
          <CardSekeleton v-if="storyLoading" />
          <CardSekeleton v-if="storyLoading" />
          <!--  -->
          <CardEdit v-for="(item, index) in story" :key="index" :item="item" />
        </div>
        
        <!-- not found -->
        <div class="mystory__notfound"
        v-if="story && story.length === 0"
        >
          <h3 class="mystory__heading1">No Stories Yet</h3>
          <p class="mystory__desc">
            You haven't shared any stories yet. Start your fitness journey today!
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
    object-fit: cover;
    height: 200px;
    width: 100%;
    max-width: 200px;
    border-radius: 100%;
  }

  &__content {
    max-width: 700px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
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

  &__sekeletontitle {
    width: 150px;
    height: 30px;
    border-radius: 5px;
  }

  &__sekeletonemail {
    width: 200px;
    height: 15px;
    border-radius: 5px;
  }

  &__sekeletondesc {
    width: 100%;
    max-width: 700px;
    height: 100px;
    border-radius: 5px;
  }
}
</style>
