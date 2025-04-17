<template>
  <NuxtLayout name="home">
    <section class="container error">
      <div class="error__left">
        <img src="/images/undraw_server_down.svg" alt="server down" class="error__image" />
      </div>
      <div class="error__right">
        <h1 class="error__heading1">404</h1>
        <h5 class="error_heading2">Page Not Found</h5>
        <p class="error__desc">
          Oops! It looks like this page doesn't exist. Please check the URL or return to
          the homepage.
        </p>
        <Button label="Back To Home" variant="primary" />
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
import Button from "@/components/ui/Button.vue";
</script>

<style lang="scss" scoped>
.error {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 60px 0;
  min-height: 80vh;

  &__image {
    width: 100%;
  }

  &__heading1 {
    font-family: Playfair Display;
    font-weight: 700;
    font-size: 160px;
    letter-spacing: 0%;
    text-align: center;
  }

  &__heading2 {
    font-family: Playfair Display;
    font-weight: 600;
    font-size: 44px;
    letter-spacing: 0%;
    text-align: center;
  }

  &__desc {
    font-family: DM Sans;
    font-weight: 400;
    font-size: clamp(11px, 1vw + 0.5rem, 14px);
    letter-spacing: 0%;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 40px;
  }

  &__left {
    width: 50%;
  }

  &__right {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}
</style>
