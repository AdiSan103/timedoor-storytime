<script lang="ts" setup>
import type { User } from "~/type/module/users";

import Modal from "~/components/pages/profile/Modal.vue";
import ModalEditProfile from "~/components/pages/profile/ModalEditProfile.vue";
import NavTabs from "~/components/pages/profile/NavTabs.vue"
import UserSection from "~/components/pages/profile/UserSection.vue";
import MyBookmark from "~/components/pages/profile/MyBookmark.vue"
import MyStory from "~/components/pages/profile/MyStory.vue"

// meta
definePageMeta({
  layout: "home",
  middleware: ["auth-user"],
});

// declaration variable
const { $api } = useNuxtApp();

const user: Ref<User | undefined> = ref();
const userLoading = ref(false);
const navtabsStatus = ref("LEFT") // value : "LEFT" | "RIGHT"
const modalProfileStatus = ref(false);

// function
const fetchDetailUser = () => {
  userLoading.value = true;

  $api.users
    .getDetail()
    .then((res) => {
      user.value = res.user;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      userLoading.value = false;
    });
};

// lifecycle
fetchDetailUser();
</script>

<template>
  <ModalEditProfile v-model="modalProfileStatus" />
  <section class="mystory">
    <UserSection />
  </section>
  <section class="mystory__items container">
    <!--  -->
    <NavTabs v-if="!userLoading" v-model="navtabsStatus" />
    <div class="navtabs placeholder-glow" v-if="userLoading">
      <div class="navtabs__item placeholder"></div>
      <div class="navtabs__item placeholder"></div>
    </div>
    <!--  -->
    <div class="mystory__content">
      <div class="mystory__left  placeholder-glow">
        <Modal v-if="!userLoading" />
        <div class="mystory__modal placeholder" v-if="userLoading">
        </div>
      </div>
      <div class="mystory__right">
        <!-- MyStory -->
        <div v-if="navtabsStatus == 'LEFT'">
          <MyStory />
        </div>
        <!-- MyBookMark -->
        <div v-if="navtabsStatus == 'RIGHT'">
          <MyBookmark />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";

.mystory {
  background-color: $color2;

  // &__badges {
  //   display: flex;
  //   gap: 10px;
  //   padding: 30px 0;
  // }

  // &__button {
  //   padding: 40px;
  // }

  &__content {
    display: flex;
    gap: 40px;
  }

  &__left {
    width: 30%;
  }

  &__right {
    width: 70%;
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
  }

  &__notfound {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px;
  }

  &__heading1 {
    font-family: Playfair Display;
    font-weight: 600;
    font-size: 44px;
    line-height: 58px;
    letter-spacing: 0%;
    text-align: center;
  }

  &__desc {
    font-family: DM Sans;
    font-weight: 400;
    font-size: clamp(1rem, calc(1vw + 0.5rem), 2rem);

    letter-spacing: 0%;
  }

  &__image {
    width: 100%;
    max-width: 500px;
  }

  &__modal {
    height: 300px;
    width: 100%;
    border-radius: 10px;
  }
}

.navtabs {
  display: flex;
  gap: 20px;
  max-width: 400px;
  margin: 30px 0;

  &__item {
    height: 100px;
    width: 160px;
    border-radius: 10px;
  }
}

.user {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 30px 0;

  &__profile {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: cover;
    height: 200px;
    width: 100%;
    max-width: 200px;
    border-radius: 100%;
  }

  &__content {
    max-width: 700px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__title {
    font-family: DM Sans;
    font-weight: 700;
    font-size: clamp(24px, 3vw + 1rem, 36px);
    letter-spacing: 0%;
    vertical-align: middle;
  }

  &__email {
    font-family: DM Sans;
    font-weight: 400;
    font-size: clamp(1rem, calc(1vw + 0.5rem), 2rem);
    letter-spacing: 0%;
    vertical-align: middle;
  }

  &__desc {
    font-family: DM Sans;
    font-weight: 400;
    font-size: clamp(1rem, calc(1vw + 0.5rem), 2rem);
    letter-spacing: 0%;
    vertical-align: middle;
    text-align: justify;
  }

  &__sekeletontitle {
    width: 150px;
    height: 30px;
    border-radius: 5px;
  }

  &__sekeletonemail {
    width: 200px;
    height: 15px;
    border-radius: 5px;
  }

  &__sekeletondesc {
    width: 100%;
    max-width: 700px;
    height: 100px;
    border-radius: 5px;
  }
}

@media screen and (max-width: 900px) {
  .mystory {
    &__content {
      flex-direction: column;
    }

    &__left {
      width: 100%;
    }

    &__right {
      width: 100%;
    }
  }
}
</style>
