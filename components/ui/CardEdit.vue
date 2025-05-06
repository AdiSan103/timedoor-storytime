<script setup lang="ts">
import type { Story } from "~/type/module/stories";

import Badge from "@/components/ui/Badge.vue";
import LoadingScreen from '@/components/ui/LoadingScreen.vue'
import Button from "@/components/ui/Button.vue";

import { defineProps } from "vue";

const { $api, $toast } = useNuxtApp();
const loading = ref(false)
const modalPopup = ref(false)
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

const handleModal = () => {
  modalPopup.value = !modalPopup.value
}

const handleDelete = () => {
  loading.value = true;

  $api.stories
    .removeStory(props.item.id)
    .then((res) => {
      $toast("Successfully Deleted", {
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
      $toast("This is not your story. Please contact the admin to delete this content.",
        {
          type: "error",
          position: "top-center",
          autoClose: 3000,
          transition: "zoom",
          dangerouslyHTMLString: true
        }); console.log('error', err);
    })
    .finally(() => {
      loading.value = false;
      modalPopup.value = false;

    });
};

</script>

<template>
  <UiLoadingScreen v-if="loading" />
  <!-- modal -->
  <div class="component" v-if="modalPopup">
    <div class="component__contain">
      <h2 class="component__title">Delete Story</h2>
      <p class="component__desc">Are you sure want to delete this story?</p>
      <div class="component__buttons">
        <UiButton label="Cancel" variant="secondary" @click="handleModal" />
        <UiButton label="Delete" variant="primary" @click="handleDelete" />
      </div>
    </div>
  </div>
  <!-- card -->
  <div :class="['card ', { 'card__animate': trashStatus === 'ANIMATE' }]" v-if="trashStatus !== 'NONACTIVE'">
    <div :style="{
      backgroundImage: `url('${item.content_images?.[0]?.url || 'https://placehold.co/600x600'}')`,
      minHeight: (height || 300) + 'px',
    }" class="card__background">
      <div class="card__icons">
        <NuxtLink :prefetch="false" :to="'/profile/story/edit/' + '123'" class="card__icon">
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
      <p class="card__label" v-html="item.preview_content.slice(0, 200)">
      </p>
    </div>
    <div class="card__footer">
      <div class="card__footerleft">
        <div :style="{
          backgroundImage: `url(${item.user.profile_image ? item.user.profile_image : 'https://placehold.co/600x600'})`,
        }" class="card__user"></div>
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
  opacity: 1;

  &:hover {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 10px;
  }

  &__animate {
    transition: ease-in-out 0.7s;
    opacity: 0;
    transform: scale(0.5);
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

// modal
.component {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.29);
  z-index: 80;
  width: 100vw;
  height: 100vh;

  &__title {
    font-family: DM Sans;
    font-weight: 700;
    font-size: clamp(24px, 3vw + 1rem, 36px);
    line-height: 46px;
    letter-spacing: 0%;
    text-align: center;
  }

  &__desc {
    font-family: DM Sans;
    font-weight: 400;
    font-size: clamp(16px, 1vw + 0.5rem, 18px);
    line-height: 27px;
    letter-spacing: 0%;
    text-align: center;
    margin: 2px 0 40px 0;
  }

  &__contain {
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 40px;
    border-radius: 10px;
  }

  &__buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    width: 100%;
  }
}
</style>
