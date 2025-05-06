<script setup lang="ts">
// import imageDefault from "@/assets/images/404.png";
import moment from 'moment'
import Badge from "@/components/ui/Badge.vue";
import type { Story } from "~/type/module/stories";
import LoadingScreen from "./LoadingScreen.vue";

const { $api, $toast } = useNuxtApp();
const loading = ref(false)

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
        type: "info",
        position: "top-center",
        autoClose: 3000,
        transition: "zoom",
        dangerouslyHTMLString: true
      });
    })
    .catch((err) => {
      $toast("Authentication required. Please login..", {
        type: "error",
        position: "top-center",
        autoClose: 3000,
        transition: "zoom",
        dangerouslyHTMLString: true
      }); console.log(err);
    })
    .finally(() => {
      loading.value = false;
    });
}
</script>

<template>
  <UiLoadingScreen v-if="loading" />
  <div class="card col">
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
        <span class="card__label" v-html="item.preview_content.slice(0, 100)">
        </span> ...
      </div>
      <div class="card__footer">
        <div class="card__footerleft">
          <div :style="{ backgroundImage: `url(${item.user.profile_image ?? 'https://placehold.co/600x600'})` }"
            class="card__user"></div>
          <p class="card__label">{{ item.user.name.length > 7 ? item.user.name.slice(0, 7) + '...' : item.user.name }}
          </p>
        </div>
        <div class="card__footerright">
          <p class="card__label">{{ moment(item.created_at).format('ddd, D MMMM YYYY') }}</p>
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
  cursor: pointer;
  transition: 0.2s;
  justify-content: space-between;
  margin: 20px 10px;
  padding: 0;

  &__background {
    width: 100%;
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    flex-shrink: 0;
    border-radius: 8px;
    position: relative;
    transition: 0.2s;
  }

  &:hover &__background {
    background-size: 110% 110%;
  }

  &:hover {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 10px;
  }

  &__footerright,
  &__footerleft {
    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;
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
    font-size: clamp(0.5rem, calc(1vw + 0.5rem), 0.9rem);
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

  &__bookmark {
    background-color: $color3;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    position: absolute;
    bottom: 10px;
    cursor: pointer;
    right: 10px;
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
    bottom: 10px;
    cursor: pointer;
    right: 10px;
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 200px;
  }
}
</style>
