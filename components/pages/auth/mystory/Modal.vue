<script lang="ts" setup>
import Button from "~/components/ui/Button.vue";
</script>
<template>
  <div class="component">
    <h4>Write your story</h4>
    <p>Share your unique voice with the world – start writing your story today!</p>
    <Button label="Write Story" variant="primary" />
  </div>
</template>
<style lang="scss" scoped>
.component {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 30px;
  border-radius: 10px;
  gap: 10px;
  min-width: 300px;
  border: 1px solid #cccccc;
}
</style>
