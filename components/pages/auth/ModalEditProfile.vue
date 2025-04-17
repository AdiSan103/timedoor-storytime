<script lang="ts" setup>
import Input from "~/components/ui/Input.vue";
import InputTextarea from "~/components/ui/InputTextarea.vue";
import Button from "~/components/ui/Button.vue";

import imageDefault from "@/assets/images/image-book.png"

const model = defineModel()

const handleClose = () => {
  model.value = !model.value
}
</script>

<template>
  <div class="component" v-if="model">
    <form action="" class="component__form">
      <h1 class="component__heading1">Edit Profile</h1>
      <div class="component__contain">
        <div class="component__left">
          <div class="component__user">
            <img :src="imageDefault" alt="image user" class="component__image" />
            <Button label="Change Picture" variant="secondary" />
          </div>
          <Input label="Name" placeholder="Name" />
          <Input label="Email" placeholder="Email" type="email" />
          <ClientOnly>
            <InputTextarea type="basic" label="About Me" />
          </ClientOnly>
        </div>
        <div class="component__right">
          <h1 class="component__heading1">Change Password</h1>
          <Input label="Olda Password" placeholder="Enter your old password" />
          <Input label="New Password" placeholder="Enter your new password" />
          <Input label="Confirm New Passsword" placeholder="Re-enter your new passsword" />
        </div>
      </div>
      <div class="component__buttons">
        <Button label="Cancel" variant="secondary" @click="handleClose" />
        <Button label="Update Profile" variant="primary" />
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";

.component {
  background-color: rgba(0, 0, 0, 0.214);
  min-height: 100vh;
  width: 100vw;
  z-index: 80;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &__form {
    width: 100%;
    max-width: 1200px;
    padding: 30px;
    background-color: $color1;
    border-radius: 10px;
  }

  &__user {
    display: flex;
    gap: 20px;
    justify-content: start;
    align-items: center;
  }

  &__image {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 180px;
    height: 180px;
    border-radius: 100%;
  }

  &__heading1 {
    font-family: DM Sans;
    font-weight: 700;
    font-size: clamp(24px, 3vw + 1rem, 36px);
    line-height: 46px;
    letter-spacing: 0%;
  }

  &__buttons {
    display: flex;
    gap: 20px;
    padding: 20px 0;
  }

  &__left {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__right {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__contain {
    display: flex;
    gap: 30px;
  }
}
</style>
