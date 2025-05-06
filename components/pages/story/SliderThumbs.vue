<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import type { StoryImage } from '~/type/module/stories'

// Define props
interface Props {
  classCustom?: string
  classCustomItems?: string
  items?: StoryImage[]
}
defineProps<Props>()

const containerRef = ref(null)
const swiper = useSwiper(containerRef, {
  navigation: true,
  loop: true,
  autoplay: {
    delay: 5000,
  },
})

onMounted(() => {
  const instance = swiper.instance?.value
  console.log(swiper.instance.value)
  if (instance) {

    instance.slideTo(2); // Go to slide index 2
  }
})

</script>

<template>
  <div class="component">
    <!--  -->
    <ClientOnly>
      <!-- Main Swiper -->
      <swiper-container style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff" class="mySwiper1"
        thumbs-swiper=".mySwiper1_2" ref="containerRef" :init="false">
        <swiper-slide v-for="(item, index) in items" :key="index">
          <img :src="item.url" alt="Image" class="component__image" />
        </swiper-slide>
      </swiper-container>

      <!-- Thumbnail Swiper -->
      <swiper-container class="mySwiper1_2" space-between="10" :slides-per-view="4" :free-mode="true">
        <swiper-slide v-for="(item, index) in items" :key="'thumb-' + index">
          <img :src="item.url" alt="Thumbnail" class="component__thumbnail" />
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
    <!--  -->
  </div>
</template>

<style lang="scss" scoped>
swiper-container {
  width: 100%;
  height: 100%;
}

swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

body {
  background: #000;
  color: #000;
}

swiper-container {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

swiper-slide {
  background-size: cover;
  background-position: center;
}

.mySwiper1 {
  height: 80%;
  width: 100%;
}

.mySwiper1_2 {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
}

.mySwiper1_2 swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

.mySwiper1_2 .swiper-slide-thumb-active {
  opacity: 1;
}

swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
