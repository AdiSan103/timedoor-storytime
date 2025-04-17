<script lang="ts" setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import type { StoryImage } from "~/type/module/stories";

const thumbsSwiper = ref(null);
const swiperPopupStatus = ref(false);
const modules = [FreeMode, Navigation, Thumbs];


// Define props with TypeScript
interface Props {
  classCustom?: string;
  classCustomItems?: string;
  loading: boolean;
  items: Story[];
}

defineProps<Props>();

const setThumbsSwiper = (swiperInstance) => {
  thumbsSwiper.value = swiperInstance;
};

const handlePopup = () => {
  swiperPopupStatus.value = !swiperPopupStatus.value;
};
</script>

<template>
  <!-- popup -->
  <div :class="['popup ', swiperPopupStatus === true ? ' popup--active' : '']">
    <div class="popup__close" @click="handlePopup">
      <Icon name="icon-park-solid:close-one" style="color: white" size="60" />
    </div>
    <div class="container">
      <swiper :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }" :loop="true" :spaceBetween="10" :navigation="true" :thumbs="{ swiper: thumbsSwiper }" :modules="modules"
        class="mySwiper2">
        <swiper-slide v-for="n in 10" :key="n">
          <img :src="`https://swiperjs.com/demos/images/nature-${n}.jpg`" />
        </swiper-slide>
      </swiper>

      <swiper @swiper="setThumbsSwiper" :loop="true" :spaceBetween="10" :slidesPerView="4" :freeMode="true"
        :watchSlidesProgress="true" :modules="modules" class="mySwiper">
        <swiper-slide v-for="n in 10" :key="n">
          <img :src="`https://swiperjs.com/demos/images/nature-${n}.jpg`" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
  <!-- slider -->
  <div>
    <swiper :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }" :loop="true" :spaceBetween="10" :navigation="true" :thumbs="{ swiper: thumbsSwiper }" :modules="modules"
      class="mySwiper2">
      <swiper-slide v-for="n in 10" :key="n" @click="handlePopup">
        <img :src="`https://swiperjs.com/demos/images/nature-${n}.jpg`" />
      </swiper-slide>
    </swiper>

    <swiper @swiper="setThumbsSwiper" :loop="true" :spaceBetween="10" :slidesPerView="4" :freeMode="true"
      :watchSlidesProgress="true" :modules="modules" class="mySwiper">
      <swiper-slide v-for="n in 10" :key="n">
        <img :src="`https://swiperjs.com/demos/images/nature-${n}.jpg`" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<style lang="scss" scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: clamp(16px, 1vw + 0.5rem, 18px);

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.swiper {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.mySwiper2 {
  height: 80%;
  width: 100%;
}

.mySwiper {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
}

.mySwiper .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-slide img {
  display: block;
  height: 100%;
  max-height: 600px;
  object-fit: cover;
  border-radius: 10p;
}

//
.popup {
  width: 100vw;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.515);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  padding: 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-100%);

  &__close {
    position: fixed;
    top: 50px;
    cursor: pointer;
  }

  &--active {
    transform: translateY(0%);
  }
}
</style>
