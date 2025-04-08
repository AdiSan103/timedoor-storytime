<template>
  <main>
    <Navbar />
    <Nav />
    <div class="container">
      <slot />
    </div>
    <Footer />
  </main>
</template>

<script setup lang="ts">
import Navbar from "~/components/layouts/Navbar.vue";
import Nav from "~/components/layouts/Nav.vue";
import Footer from "~/components/layouts/Footer.vue";
</script>

<style lang="css">
main {
  position: relative;
}
</style>
