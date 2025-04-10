<script setup lang="ts">
import Navbar from "~/components/layouts/Navbar.vue";
import Nav from "~/components/layouts/Nav.vue";
import Footer from "~/components/layouts/Footer.vue";

const route = useRoute();
const query = ref(route.params.id);

</script>

<template>
  <main>
    <Navbar />
    <Nav :query="query" />
    <div class="container">
      <slot />
    </div>
    <Footer />
  </main>
</template>

<style lang="css">
main {
  position: relative;
}
</style>
