<script lang="ts" setup>
import logoImg from "@/assets/images/logo.png";
import imgRegister from "@/assets/images/register.png";
import Input from "~/components/ui/Input.vue";
import Button from "~/components/ui/Button.vue";
</script>

<template>
  <section class="register container">
    <div class="register__left">
      <img :src="logoImg" alt="logo" class="register__logo" />
      <h1 class="register__heading1">
        Join the World’s Most-Loved Social Storytelling Platform!
      </h1>
      <p class="register__desc">
        Create an account to explore interesting articles, connect with like-minded
        people, and share your own stories.
      </p>
      <img :src="imgRegister" alt="image register" class="register__image" />
    </div>
    <div class="register__right">
      <h3 class="register__heading2">Create Account</h3>
      <form action="" class="register__form">
        <Input placeholder="Enter Your Name" label="Name" type="text" />
        <Input placeholder="Enter Your Username" label="Username" type="text" />
        <Input placeholder="Enter Your Email" label="Email" type="email" />
        <Input placeholder="Enter Your Password" label="Password" type="password" />
        <Input
          placeholder="Re-enter your chosen password"
          label="Confirm Passowrd"
          type="password"
        />
        <Button variant="primary" label="Create Account" classCustom="register__button" />
        <span class="register__link"
          >Already have an account?
          <NuxtLink to="/#" class="register__login">Login</NuxtLink></span
        >
      </form>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";

.register {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  gap: 50px;

  &__logo {
    width: 254px;
    margin-bottom: 50px;
  }

  &__heading1 {
    font-family: Playfair Display;
    font-weight: 700;
    font-size: 50px;
    letter-spacing: 0%;
    vertical-align: middle;
  }

  &__desc {
    font-family: DM Sans;
    font-weight: 400;
    font-size: 20px;
    letter-spacing: 0%;
    vertical-align: middle;
  }

  &__heading2 {
    font-family: DM Sans;
    font-weight: 700;
    font-size: 44px;
    line-height: 58px;
    letter-spacing: 0%;
    vertical-align: middle;
    margin-bottom: 40px;
  }

  &__link {
    font-family: DM Sans;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: 0%;
    vertical-align: middle;
    margin-top: 30px;
  }

  &__login {
    font-family: DM Sans;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: 0%;
    vertical-align: middle;
    color: $color3;
    text-decoration: none;
  }

  &__image {
    width: 100%;
    max-width: 500px;
    margin: auto;
    display: flex;
  }

  &__left {
    width: 50%;
    background-color: $color2;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 30px;
    max-width: 800px;
    max-height: 1400px;
    border-radius: 20px;
    padding: 40px;
    margin: 20px;
  }

  &__right {
    padding: 30px;
    width: 50%;
    max-width: 800px;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  &__button {
    width: 250px;
  }
}
</style>
