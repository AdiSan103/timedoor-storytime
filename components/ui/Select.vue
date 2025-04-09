<script lang="ts" setup>
</script>

<template>
  <div class="select">
    <label class="select__label">Sort By</label>
    <div class="select__wrapper">
      <select class="select__input">
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="popular">Most Popular</option>
      </select>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.select {
  display: flex;
  gap: 20px;

  &__label {
    font-family: "DM Sans";
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    display: block;
    margin-bottom: 8px;
    width: 130px;
  }

  &__wrapper {
    position: relative;
    width: 100%;
    max-width: 300px;
  }

  &__input {
    max-width: 120px;
    font-family: "DM Sans";
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    border: none;
    outline: none;
  }
}
</style>
