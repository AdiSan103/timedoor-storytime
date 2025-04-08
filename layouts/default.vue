<template>
 <main>
   <Navbar/>
   <slot />
   <Footer/>
 </main>
</template>

<script setup lang="ts">
import Navbar from '~/components/layouts/Navbar.vue'
import Footer from '~/components/layouts/Footer.vue';
</script>

<style lang="css">
main{
 position: relative;
}
</style>

