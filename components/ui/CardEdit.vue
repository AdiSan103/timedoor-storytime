<script setup lang="ts">
import type { Story } from "~/type/module/stories";

import ModalEditCard from "@/components/pages/profile/ModalEditCard.vue";
import Badge from "@/components/ui/Badge.vue";
import LoadingScreen from '@/components/ui/LoadingScreen.vue'

import { defineProps } from "vue";

const { $api, $toast } = useNuxtApp();
const modalCardStatus = ref(false)
const loading = ref(false)

// Define props with TypeScript
interface Props {
  height?: string;
  item: Story;
}

const props = defineProps<Props>();

const handleModal = () => {
  modalCardStatus.value = !modalCardStatus.value
}

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
      $toast("Error Message", {
        type: "error",
        position: "top-center",
        autoClose: 3000,
        transition: "zoom",
        dangerouslyHTMLString: true
      });
      console.log(err);
    })
    .finally(() => {
      loading.value = false;
    });
}

</script>

<template>
  <LoadingScreen v-if="loading" />
  <ModalEditCard v-model="modalCardStatus" :id="item.id" />
  <div class="card">
    <div :style="{
      backgroundImage: `url('${item.content_images?.[0]?.url || 'https://placehold.co/600x600'}')`,
      minHeight: (height || 300) + 'px',
    }" class="card__background">
      <div class="card__icons">
        <NuxtLink :to="'/profile/story/edit/' + '123'" class="card__icon">
          <Icon name="mage:edit" style="color: #fff" size="25" />
        </NuxtLink>
        <!--  -->
        <div class="card__icon card__bookmark" @click="toggleBookmark">
          <Icon name="material-symbols:bookmark-add-outline-rounded" style="color: #fff" size="25" />
        </div>
        <!--  -->
        <div class="card__icon" @click="handleModal">
          <Icon name="tabler:trash" style="color: #fff" size="25" />
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
      <div class="card__footerleft">
        <div :style="{ backgroundImage: `url(${item.user.profile_image ?? 'https://placehold.co/600x600'})` }"
          class="card__user"></div>
        <p class="card__label">{{ item.user.name.length > 9 ? item.user.name.slice(0, 9) + '...' : item.user.name }}
        </p>
      </div>
      <div class="card__footerright">
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
  text-decoration: none;
  cursor: pointer;
  transition: 0.2s;

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

    line-height: 46px;
    letter-spacing: 0%;
    vertical-align: middle;
  }

  &__label {
    font-family: DM Sans;
    font-weight: 500;
    font-size: clamp(14px, 1vw + 0.5rem, 16px);
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

  &__bookmark {
    background-color: $color3;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
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
    bottom: 10px;
    cursor: pointer;
    right: 10px;
  }

  &__icons {
    position: absolute;
    bottom: 20px;
    right: 20px;
    display: flex;
    gap: 10px
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
