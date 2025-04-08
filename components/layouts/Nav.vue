<template>
  <section>
    <h3 class="container">All Story</h3>
    <div class="breadcumb">
      <div class="container">Home <span>/</span> All Story</div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";

h3 {
  font-family: Playfair Display;
  font-weight: 600;
  font-size: 44px;
  line-height: 58px;
  letter-spacing: 0%;
}

.breadcumb {
  background-color: $color2;
  width: 100%;
  margin: 40px 0;
  padding: 5px 0;

  .container {
    padding: 20px 10px;
    font-family: DM Sans;
    font-weight: 500;
    font-size: 20px;
    letter-spacing: 0%;
    

    span {
      margin: 0 20px;
      color: $color3;
    }
  }
}
</style>
