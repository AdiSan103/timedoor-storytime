<template>
  <div class="breadcumb">
    <div class="breadcumb__contain container">
      Home <span class="breadcumb__separator">/</span> All Story
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";

.breadcumb {
  background-color: $color2;
  width: 100%;
  margin-bottom: 40px;
  padding: 5px 0;

  &__contain {
    padding: 20px 10px;
    font-family: DM Sans;
    font-weight: 500;
    font-size: clamp(18px, 1vw + 0.5rem, 21px);
    letter-spacing: 0%;
  }

  &__separator {
    margin: 0 20px;
    color: $color3;
  }
}
</style>
