<script setup lang="ts">
import type { Story } from "~/type/module/stories";

import ModalEditCard from "@/components/pages/auth/ModalEditCard.vue";
import Badge from "@/components/ui/Badge.vue";

import { defineProps } from "vue";

const modalCardStatus = ref(false)

// Define props with TypeScript
interface Props {
  height?: string;
  item: Story;
}

defineProps<Props>();

const handleModal = () => {
  modalCardStatus.value = !modalCardStatus.value
}

</script>

<template>
  <ModalEditCard v-model="modalCardStatus" />
  <div class="card">
    <div
      :style="{
        backgroundImage: `url(${item.content_images[0].url})`,
        minHeight: (height ?? 300) + 'px',
      }"
      class="card__background"
    >
      <div class="card__icons">
        <NuxtLink :to="'/auth/story/edit/' + '123'" class="card__icon">
          <Icon
            name="mage:edit"
            style="color: #fff"
            size="25"
          />
        </NuxtLink>
        <div class="card__icon">
          <Icon
            name="material-symbols:bookmark-add-outline-rounded"
            style="color: #fff"
            size="25"
          />
        </div>
        <div class="card__icon"  @click="handleModal">
          <Icon
            name="tabler:trash"
            style="color: #fff"
            size="25"
          />
        </div>
      </div>
    </div>
    <div class="card__content">
      <h3 class="card__title">{{ item.title.slice(0, 26) }}</h3>
      <p class="card__label">
        {{ item.preview_content.slice(0, 200) }}
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

    line-height: 46px;
    letter-spacing: 0%;
    vertical-align: middle;
  }

  &__label {
    font-family: DM Sans;
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 0%;
    vertical-align: middle;
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

  &__icons {
    position: absolute;
    bottom: 20px;
    right: 20px;
    display: flex;
    gap:10px
  }

  &__icon {
    background-color: $color3;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    cursor: pointer;
  }

  &__content {
    padding: 10px;
    word-wrap: break-word;
    overflow-wrap: break-word;
    white-space: normal;
  }
}
</style>
