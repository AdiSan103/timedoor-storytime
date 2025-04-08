<script setup lang="ts">
import { ref } from "vue";
import Button from "@/components/ui/Button.vue";
import bg from "@/assets/images/image-book.png";

const menu = ref(false);

const handleMenu = () => {
  menu.value = !menu.value;
};
</script>

<template>
  <nav>
    <div class="d-flex justify-content-between align-items-center container">
      <img src="/images/logo.png" alt="logo" class="img" />
      <div class="d-flex gap-3">
        <Button label="Register" variant="secondary" />
        <Button label="Login" variant="primary" />
        <div class="avatar">
          <div class="content" @click="handleMenu">
            <div :style="{ backgroundImage: `url(${bg})` }" class="user"></div>
            <span>Khrisvana</span>
            <Icon
              name="weui:arrow-outlined"
              style="color: black"
              size="25"
              class="icon"
            />
          </div>
          <ul class="list" v-if="menu">
            <li>My Profile</li>
            <li>Log Out</li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@import "@/assets/main.scss";

nav {
  position: sticky;
  background-color: $color1;
  top: 0;
  z-index: 99;
  padding: 10px;
  box-shadow: 0px 1px 4px 0px #0c0c0d0d;
  box-shadow: 0px 1px 4px 0px #0c0c0d1a;

  img {
    width: 254px;
  }
}

.icon {
  transform: rotate(90deg);
}

.avatar {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .user {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 30px;
    width: 30px;
    border-radius: 100%;
  }

  span {
    font-family: DM Sans;
    font-weight: 700;
    font-size: 18px;
    vertical-align: middle;
  }

  .list {
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

    li {
      margin: 0;
      padding: 0;
      cursor: pointer;
    }
  }
}
</style>
