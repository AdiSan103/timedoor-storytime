<script setup lang="ts">
// import bg from "@/assets/images/image-book.png";
import Badge from "@/components/ui/Badge.vue";
import { defineProps } from "vue";
import type { Story } from "~/type/module/stories";
import LoadingScreen from "./LoadingScreen.vue";

const model = defineModel() // for return response

const { $api, $toast } = useNuxtApp();
const loading = ref(false)
const trashStatus = ref("ACTIVE") // // value : "ACTIVE | "ANIMATE" | "NONACTIVE" // this is for if content has been deleted...

// Define props with TypeScript
interface Props {
  height?: string;
  item: Story;
}
const props = defineProps<Props>();

// function
const toggleBookmark = () => {
  loading.value = true;
  const dataForm = {
    story_id: props.item.id
  }

  $api.bookmark.toggle(dataForm)
    .then((res: any) => {
      $toast(res.message, {
        type: "success",
        position: "top-center",
        autoClose: 3000,
        transition: "zoom",
        dangerouslyHTMLString: true
      });

      // add animmate..
      trashStatus.value = 'ANIMATE';

      setTimeout(() => {
        trashStatus.value = "NONACTIVE"; // content will be trash...
      }, 700);
    })
    .catch((err) => {
      $toast("Error..", {
        type: "info",
        position: "top-center",
        autoClose: 3000,
        transition: "zoom",
        dangerouslyHTMLString: true
      });
      console.log(err);
    })
    .finally(() => {
      loading.value = false;
      model.value = true // response toggle bookmark done process
    });
}
</script>

<template>
  <LoadingScreen v-if="loading" />
  <div :class="['card ', { 'card__animate': trashStatus === 'ANIMATE' }]" v-if="trashStatus !== 'NONACTIVE'">
    <div :style="{
      backgroundImage: `url(${item.content_images[0] ? item.content_images[0].url : 'https://placehold.co/600x600'})`,
      minHeight: (height ?? 300) + 'px',
    }" class="card__background">
      <div class="card__bookmark" @click="toggleBookmark">
        <Icon name="material-symbols:bookmark-add-outline-rounded" style="color: #fff" size="25" />
      </div>
    </div>
    <NuxtLink :to="`/story/${item.id}`" class="card__link">
      <div class="card__content">
        <h3 class="card__title">{{ item.title.slice(0, 26) }}</h3>
        <p class="card__label">
          {{ item.preview_content.slice(0, 100) + "..." }}
        </p>
      </div>
      <div class="card__footer">
        <div class="card__footerleft">
          <div
            :style="{ backgroundImage: `url(${item.user.profile_image ? item.user.profile_image : 'https://placehold.co/600x600'})` }"
            class="card__user"></div>
          <p class="card__label">{{ item.user.name }}</p>
        </div>
        <div class="card__footerright">
          <p class="card__label">{{ item.created_at }}</p>
          <Badge :label="item.category.name" />
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/main.scss";

.card {
  width: 100%;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  border: none;
  outline: none;
  text-decoration: none;
  transition: 0.2s;
  opacity: 1;

  &__footerleft {
    display: flex;
    gap: 10px;
  }

  &__footerright {
    display: flex;
    gap: 10px;
  }

  &__animate {
    transition: ease-in-out 0.7s;
    opacity: 0;
    transform: scale(0.5);
  }

  &__footer {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    font-family: DM Sans;
    font-weight: 700;
    font-size: clamp(1rem, calc(2vw + 1rem), 1.2rem);
    letter-spacing: 0%;
    vertical-align: middle;
  }

  &__label {
    font-family: DM Sans;
    font-weight: 500;
    font-size: clamp(0.8rem, calc(1vw + 0.5rem), 1rem);
    letter-spacing: 0%;
    vertical-align: middle;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    margin: 0;
    text-align: justify;
  }

  &__left {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  &__right {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  &__user {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 30px;
    width: 30px;
    border-radius: 100%;
  }

  &__background {
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    flex-shrink: 0;
    border-radius: 8px;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
  }

  &__bookmark {
    background-color: $color3;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    position: absolute;
    cursor: pointer;
  }

  &__bookmarkactive {
    background-color: black;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    position: absolute;
    cursor: pointer;
  }

  &__content {
    padding: 10px;
    word-wrap: break-word;
    overflow-wrap: break-word;
    white-space: normal;
  }

  &__link {
    text-decoration: none;
    color: black;
  }
}
</style>
