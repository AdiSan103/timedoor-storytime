<script setup lang="ts">
import Input from "~/components/ui/Input.vue";
import Select from "~/components/ui/Select.vue";
import Card from "~/components/ui/Card.vue";
import Pagination from "~/components/ui/Pagination.vue";
import type { Story } from "~/type/module/stories";
import CardSekelton from "~/components/ui/CardSekelton.vue";
import Toast from "~/components/ui/Toast.vue";

// meta
definePageMeta({
  layout: "story",
});

// declaration variable
const { $api } = useNuxtApp();
const story: Ref<Story[]> = ref([]);
const storyLoading = ref(false);
const route = useRoute();
const query = ref(route.params.id);

const toastMessage = ref("");
const toastStatus = ref(false);

// function
const fetchstory = () => {
  storyLoading.value = true;

  $api.stories
    .getSearchStories(query.value)
    .then((res) => {
      story.value = res.data; // ✅ karena res.data.value = PropsStory
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      storyLoading.value = false;
    });
};

const handleSearch = () => {
  if (query.value == "") {
    toastStatus.value = true;
    toastMessage.value = "Pencaharian Kosong...";
  } else {
    window.location.href = "/story/search/" + query.value;
  }
};

// lifecycle
fetchstory();
</script>

<template>
  <Toast :message="toastMessage" type="info" v-model="toastStatus" />

  <section class="form">
    <div class="form__selects">
      <Select />
      <Select />
    </div>
    <form @submit.prevent="handleSearch">
      <Input placeholder="Search Story" classCustom="form__input" v-model="query" />
    </form>
  </section>

  <!--  -->
  <section class="cards" v-if="storyLoading || story.length != 0">
    <div class="cards__items">
      <Card height="770" :item="story[0]" v-if="!storyLoading" />
      <CardSekelton height="770" v-if="storyLoading" />
      <div class="cards__left">
        <CardSekelton v-if="storyLoading" />
        <CardSekelton v-if="storyLoading" />
        <Card :item="story[1]" v-if="!storyLoading" />
        <Card :item="story[2]" v-if="!storyLoading" />
      </div>
    </div>
  </section>
  <section class="cards__list" v-if="storyLoading || story.length != 0">
    <!--  -->
    <CardSekelton v-if="storyLoading" />
    <CardSekelton v-if="storyLoading" />
    <CardSekelton v-if="storyLoading" />
    <CardSekelton v-if="storyLoading" />
    <!--  -->
    <Card v-for="item in story" :item="item" />
  </section>
  <p v-else class="text-center fst-italic">Cerita tidak di temukan</p>
  <Pagination classCustom="pagination" />
</template>

<style lang="scss" scoped>
.form {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__selects {
    display: flex;
    gap: 20px;
  }
  &__input {
    width: 45%;
  }
}
.cards {
  &__items {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-top: 40px;
  }
  &__list {
    margin: 50px 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
  }
  &__left {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 50%;
  }
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 70px;
}
</style>
