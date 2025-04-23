<template>
  <ModalLogout v-model="statusModalLogout" />
  <nav class="navbar">
    <div class="navbar__contain container">
      <NuxtLink to="/">
        <img src="/images/logo.png" alt="logo" class="navbar__img" />
      </NuxtLink>
      <div class="d-flex gap-3">
        <Button link="/register" label="Register" variant="secondary" v-if="!authToken" />
        <Button link="/login" label="Login" variant="primary" v-if="!authToken" />

        <div class="navbar__avatar" v-if="authToken">
          <div class="placeholder-glow navbar__avatars" v-if="userLoading">
            <div class="placeholder navbar__loadingprofile"></div>
            <div class="placeholder navbar__loadinguser"></div>
          </div>
          <!--  -->
          <div class="navbar__content" @click="handleMenu" v-if="!userLoading">
            <img class="navbar__user" :src="user?.profile_image ??
              'https://timestory.tmdsite.my.id/storage/story_images/dSMgu5TBx3Gz3M5G.jpg'
              " alt="" v-if="!userLoading" />
            <span class="navbar__usertitle">{{ user?.name }}</span>
            <Icon name="weui:arrow-outlined" style="color: black" size="25" class="navbar__icon" />
          </div>
          <ul class="navbar__listmenu" v-if="menu">
            <NuxtLink to="/profile/mystory" class="navbar__listitem">My Profile</NuxtLink>
            <span class="navbar__listitem" @click="handleModalLogout">Log Out</span>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";

import Button from "@/components/ui/Button.vue";
import ModalLogout from "@/components/layouts/ModalLogout.vue";
import type { User } from "@/type/module/users";
import LoadingScreen from "../ui/LoadingScreen.vue";

// declaration variable
const { $api } = useNuxtApp();
const menu = ref(false);
const authToken = useCookie("STORYTIME_TOKEN");
const statusModalLogout = ref(false);
const { user, userLoading } = useUser();

const handleMenu = () => {
  menu.value = !menu.value;
};

const handleModalLogout = () => {
  statusModalLogout.value = !statusModalLogout.value;
};

</script>


<style scoped lang="scss">
@import "@/assets/main.scss";

.navbar {
  position: sticky;
  background-color: $color1;
  top: 0;
  z-index: 80;
  padding: 10px;
  box-shadow: 0px 1px 4px 0px #0c0c0d0d;
  box-shadow: 0px 1px 4px 0px #0c0c0d1a;

  &__avatars {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
  }

  &__loadingprofile {
    width: 30px;
    height: 30px;
    border-radius: 100%;
  }

  &__loadinguser {
    width: 150px;
    height: 20px;
    border-radius: 5px;
  }

  &__contain {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__img {
    width: 100%;
    max-width: 200px;
  }

  &__icon {
    transform: rotate(90deg);
  }

  &__avatar {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__content {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  &__user {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 30px;
    width: 30px;
    border-radius: 100%;
  }

  &__usertitle {
    font-family: DM Sans;
    font-weight: 700;
    font-size: clamp(16px, 1vw + 0.5rem, 18px);
    vertical-align: middle;
  }

  &__listmenu {
    position: absolute;
    top: 50px;
    right: 2px;
    width: 150px;
    background-color: $color1;
    list-style: none;
    padding: 15px 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  &__listitem {
    margin: 0;
    padding: 0;
    cursor: pointer;
    color: black;
    text-decoration: none;
  }
}

@media screen and (max-width: 600px) {
  .navbar {
    &__contain {
      justify-content: space-between !important;
      gap: 10px;
    }

    &__usertitle {
      display: none;
    }
  }
}
</style>
