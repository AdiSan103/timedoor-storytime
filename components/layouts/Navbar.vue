<script setup lang="ts">
import { ref } from "vue";
import Button from "@/components/ui/Button.vue";
import bg from "@/assets/images/image-book.png";
import { NuxtLink } from "#components";

const menu = ref(false);

const handleMenu = () => {
  menu.value = !menu.value;
};
</script>

<template>
  <nav class="navbar">
    <div class="d-flex justify-content-between align-items-center container">
      <NuxtLink to="/">
        <img src="/images/logo.png" alt="logo" class="navbar__img" />
      </NuxtLink>
      <div class="d-flex gap-3">
        <Button link="/auth/register" label="Register" variant="secondary" />
        <Button link="/auth/login" label="Login" variant="primary" />
        <div class="navbar__avatar">
          <div class="navbar__content" @click="handleMenu">
            <div :style="{ backgroundImage: `url(${bg})` }" class="navbar__user"></div>
            <span class="navbar__usertitle">Khrisvana</span>
            <Icon
              name="weui:arrow-outlined"
              style="color: black"
              size="25"
              class="navbar__icon"
            />
          </div>
          <ul class="navbar__listmenu" v-if="menu">
            <NuxtLink to="/auth/mystory" class="navbar__listitem">My Profile</NuxtLink>
            <NuxtLink class="navbar__listitem">Log Out</NuxtLink>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

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

  &__img {
    width: 254px;
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
    font-size: 18px;
    vertical-align: middle;
  }

  &__listmenu {
    position: absolute;
    top: 50px;
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
</style>
