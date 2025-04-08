<template>
  <NuxtLayout name="default">
    <section class="container">
      <div>
        <img src="/images/undraw_server_down.svg" alt="server down" />
      </div>
      <div class="left">
        <h1>404</h1>
        <h5>Page Not Found</h5>
        <p>
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

<style lang="css" scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
  gap:50px;
  padding: 60px 0;

  img {
    width: 100%;
  }

  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h1 {
      font-family: Playfair Display;
      font-weight: 700;
      font-size: 160px;
      letter-spacing: 0%;
      text-align: center;
    }

    h5 {
      font-family: Playfair Display;
      font-weight: 600;
      font-size: 44px;
      letter-spacing: 0%;
      text-align: center;
    }

    p {
      font-family: DM Sans;
      font-weight: 400;
      font-size: 14px;      
      letter-spacing: 0%;
      text-align: center;
      margin-top:20px;
      margin-bottom:40px;
    }
  }
}
</style>
