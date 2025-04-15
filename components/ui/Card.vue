<script setup lang="ts">
// import bg from "@/assets/images/image-book.png";
import Badge from "@/components/ui/Badge.vue";
import { defineProps } from "vue";
import type { Story } from "~/type/module/stories";

const route = useRoute();
const query = ref(route.params.id);

// Define props with TypeScript
interface Props {
  height?: string;
  item: Story;
}

defineProps<Props>();
</script>

<template>
  <NuxtLink :to="`/story/${item.id}`" class="card">
    <div
      :style="{
        backgroundImage: `url(${item.content_images[0].url})`,
        minHeight: (height ?? 300) + 'px',
      }"
      class="card__background"
    >
      <div class="card__bookmark">
        <Icon
          name="material-symbols:bookmark-add-outline-rounded"
          style="color: #fff"
          size="25"
        />
      </div>
    </div>
    <div class="card__content">
      <h3 class="card__title">{{ item.title.slice(0, 26) }}</h3>
      <p class="card__label">
        {{ item.preview_content.slice(0, 100) + '...'}}
      </p>
    </div>
    <div class="card__footer">
      <div class="card_footerleft">
        <div
          :style="{ backgroundImage: `url(${item.user.profile_image})` }"
          class="card__user"
        ></div>
        <p class="card__label">{{ item.user.name }}</p>
      </div>
      <div class="card_footerright">
        <p class="card__label">{{ item.created_at }}</p>
        <Badge />
      </div>
    </div>
  </NuxtLink>
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

  &__footer {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    font-family: DM Sans;
    font-weight: 700;
    font-size: clamp(1rem,calc(2vw + 1rem),1.2rem);
    letter-spacing: 0%;
    vertical-align: middle;
  }

  &__label {
    font-family: DM Sans;
    font-weight: 500;
    font-size: clamp(0.8rem,calc(1vw + 0.5rem),1rem);
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
    position: relative;
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

  &__content {
    padding: 10px;
    word-wrap: break-word;
    overflow-wrap: break-word;
    white-space: normal;
  }
}
</style>
