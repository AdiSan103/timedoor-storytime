<script lang="ts" setup></script>

<template>
  <section class="loading">
    <div class="spinner-border text-success" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </section>
</template>

<style lang="scss" scoped>
 .loading {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.138);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
 }
</style>