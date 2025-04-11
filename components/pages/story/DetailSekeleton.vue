<script lang="ts" setup></script>
<template>
  <section class="placeholder-glow sekeleton container">
    <div class="placeholder sekeleton__date"></div>
    <div class="placeholder sekeleton__title"></div>
    <div class="placeholder sekeleton__user"></div>
    <div class="sekeleton__contain">
      <div class="sekeleton__left">
       <div class="placeholder sekeleton__slider"></div>
      </div>
      <div class="sekeleton__right">
        <div class="placeholder sekeleton__desc"></div>
        <div class="placeholder sekeleton__text"></div>
        <div class="placeholder sekeleton__desc"></div>
        <div class="placeholder sekeleton__text"></div>
        <div class="placeholder sekeleton__desc"></div>
        <div class="placeholder sekeleton__text"></div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";
.sekeleton {
 display: flex;
 justify-content: center;
 flex-direction: column;
 align-items: center;
 text-align: center;

 &__date {
  width: 180px;
  height: 35px;
  border-radius: 10px;
  margin-bottom: 25px;
 }

 &__title {
  width: 100%;
  max-width: 800px;
  height: 80px;
  border-radius: 10px;
  margin-bottom: 30px;
 }

 &__user {
  width: 250px;
  height: 35px;
  border-radius: 10px;
 }

 &__contain {
  display: flex;
  gap: 40px;
  width: 100%;
  margin-top: 50px;
 }

 &__left {
  width: 40%;
 }

 &__slider {
  width: 100%;
  height: 530px;
  border-radius: 10px;
 }
 
 &__right {
  width: 60%;
  display: flex;
  flex-direction: column;
 }

 &__text {
  width: 70%;
  border-radius: 10px;
  height: 50px;
  margin-bottom: 20px;
 }

 &__desc {
  width: 100%;
  border-radius: 10px;
  height: 100px;
  margin-bottom: 10px;
 }
}
</style>
