<template>
  <main>
    <Navbar />
    <slot />
    <ButtonToUp />
    <Footer />
  </main>
</template>

<script setup lang="ts">
import Navbar from '~/components/layouts/Navbar.vue'
import Footer from '~/components/layouts/Footer.vue';
import ButtonToUp from '~/components/ui/ButtonToUp.vue';
</script>

<style lang="css">
main {
  position: relative;
  overflow-x: hidden;
}
</style>
