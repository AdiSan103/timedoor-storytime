<script lang="ts" setup>
import type { User } from "~/type/module/users";

// meta
definePageMeta({
  layout: "home",
  middleware: ["auth-user"],
});

// declaration variable
const { $api } = useNuxtApp();

const user: Ref<User | undefined> = ref();
const userLoading = ref(false);

// function
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
</script>

<template>
  <div class="container user placeholder-glow">
    <div class="user__profile placeholder" v-if="userLoading"></div>
    <div class="user__content" v-if="userLoading">
      <div class="user__sekeletontitle placeholder"></div>
      <div class="user__sekeletonemail placeholder"></div>
      <div class="user__sekeletondesc placeholder"></div>
    </div>
    <!-- -->
    <img
      class="user__profile"
      :src="
        user?.profile_image ??
        'https://timestory.tmdsite.my.id/storage/story_images/dSMgu5TBx3Gz3M5G.jpg'
      "
      alt=""
      v-if="!userLoading"
    />
    <div class="user__content" v-if="!userLoading">
      <p class="user__title">{{ user?.name }}</p>
      <p class="user__email">{{ user?.email }}</p>
      <p class="user__desc">
        {{ user?.about }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";

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
