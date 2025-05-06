<script setup lang="ts">
const route = useRoute();
const query = ref(route.params.id);

</script>

<template>
  <main>
    <LayoutsNavbar />
    <LayoutsNav :query="query" />
    <div class="container">
      <slot />
    </div>
    <LayoutsFooter />
  </main>
</template>

<style lang="css">
main {
  position: relative;
}
</style>
