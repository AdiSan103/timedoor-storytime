<script setup lang="ts">
definePageMeta({
  layout: "story",
});

import Input from "~/components/ui/Input.vue";
import Select from "~/components/ui/Select.vue";
import Card from "~/components/ui/Card.vue";
import Pagination from "~/components/ui/Pagination.vue";
import type { Story } from "~/type/module/stories";
import CardSekeleton from "~/components/ui/CardSekeleton.vue";
import Toast from "~/components/ui/Toast.vue";

// declaration variable
const { $api } = useNuxtApp();
const stories: Ref<Story[]> = ref([]);
const storiesLoading = ref(false);

const route = useRoute();
const id = ref(route.params.id);

const toastMessage = ref("");
const toastStatus = ref(false);

// function
const fetchStoryFilterByCategory = () => {
  storiesLoading.value = true;

  $api.stories
    .getStoriesFilterByCategory(id.value)
    .then((res) => {
      stories.value = res.data;
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      storiesLoading.value = false;
    });
};

const handleSearch = () => {
  if (id.value == "") {
    toastStatus.value = true;
    toastMessage.value = "Pencaharian Kosong...";
  } else {
    window.location.href = "/story/category/" + id.value;
  }
};

// lifecycle
fetchStoryFilterByCategory();
</script>

<template>
  <Toast :message="toastMessage" type="info" v-model="toastStatus" />

  <section class="form">
    <div class="selects">
      <Select />
      <Select />
    </div>
    <form @submit.prevent="handleSearch">
      <Input placeholder="Search Story" classCustom="form__input" v-model="id" />
    </form>
  </section>
  <section class="cards">
    <!--  -->
    <CardSekeleton v-if="storiesLoading" />
    <CardSekeleton v-if="storiesLoading" />
    <CardSekeleton v-if="storiesLoading" />
    <CardSekeleton v-if="storiesLoading" />
    <!--  -->
    <Card v-for="(item, index) in stories" :key="index" :item="item" />
  </section>
  <Pagination classCustom="pagination" />
</template>

<style lang="scss" scoped>
.cards {
  margin: 50px 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 70px;
}
.form {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .selects {
    display: flex;
    gap: 20px;
  }
}
</style>
