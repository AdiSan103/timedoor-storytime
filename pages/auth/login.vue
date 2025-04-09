<script lang="ts" setup>
import logoImg from "@/assets/images/logo.png";
import imgLogin from "@/assets/images/login.png";
import Input from "~/components/ui/Input.vue";
import Button from "~/components/ui/Button.vue";
</script>

<template>
  <section class="login container">
    <div class="login__left">
      <img :src="logoImg" alt="logo" class="login__logo" />
      <h3 class="login__heading2">Login</h3>
      <form action="" class="login__form">
        <Input
          placeholder="Enter your username or email"
          label="Username/Email"
          type="text"
        />
        <Input
          placeholder="Enter your choosen password"
          label="Password"
          type="password"
        />
        <Button variant="primary" label="Login" classCustom="login__button" />
        <span class="login__link"
          >Don't have an account?
          <NuxtLink to="/#" class="login__register">Register</NuxtLink></span
        >
      </form>
    </div>
    <div class="login__right">
      <h1 class="login__heading1">Welcome Back to Story Time!</h1>
      <p class="login__desc">
        Dive back into captivating stories, follow your favorite authors, and continue
        sharing your own tales.
      </p>
      <img :src="imgLogin" alt="image login" class="login__image" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";

.login {
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
    margin: 20px 0;
    padding-bottom: 40px;
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

  &__register {
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

  &__right {
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

  &__left {
    padding: 30px;
    width: 50%;
    max-width: 800px;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  &__button {
    width: 150px;
  }
}
</style>
