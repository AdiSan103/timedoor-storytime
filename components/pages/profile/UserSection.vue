<script lang="ts" setup>
import type { User } from "~/type/module/users";

import Button from "@/components/ui/Button.vue";
import ModalEditProfile from "@/components/pages/profile/ModalEditProfile.vue";

// declaration variable
const { $api } = useNuxtApp();

const user: Ref<User | undefined> = ref();
const userLoading = ref(false);

const modelProfile = ref(false);

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

const handleModelProfile = () => {
  modelProfile.value = !modelProfile.value;
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
    <img class="user__profile" :src="user.profile_image && user.profile_image != 'https://timestory.tmdsite.my.id/'
      ? user.profile_image
      : 'https://placehold.co/600x600'
      " alt="image user" v-if="!userLoading" />
    <div class="user__content" v-if="!userLoading">
      <p class="user__title">{{ user?.name }}</p>
      <p class="user__email">{{ user?.email }}</p>
      <p class="user__desc">
        {{ user?.about }}
      </p>
    </div>
    <ModalEditProfile />
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

@media screen and (max-width: 600px) {
  .user {
    flex-direction: column;
    padding: 10px;

    &__content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
