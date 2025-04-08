<template>
  <nav>
    <div class="d-flex justify-content-between align-items-center container">
      <img src="/images/logo.png" alt="logo" class="img" />
      <div class="d-flex gap-3">
        <Button label="Register" variant="secondary" />
        <Button label="Login" variant="primary" />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import Button from "@/components/ui/Button.vue";
</script>

<style scoped lang="scss">
@import "@/assets/main.scss";

nav {
  position: sticky;
  background-color: $color1;
  top: 0;
  z-index: 99;
  padding: 10px;
  box-shadow: 0px 1px 4px 0px #0C0C0D0D;
  box-shadow: 0px 1px 4px 0px #0C0C0D1A;

  img {
    width: 254px;
  }
}
</style>
