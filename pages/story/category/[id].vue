<script setup lang="ts">
definePageMeta({
  layout: "story",
});

import Input from "~/components/ui/Input.vue";
import Select from "~/components/ui/Select.vue";
import Card from "~/components/ui/Card.vue";
import Pagination from "~/components/ui/Pagination.vue";
import type { Story } from "~/type/module/stories";
import CardSekelton from "~/components/ui/CardSekelton.vue";

// declaration variable
const { $api } = useNuxtApp();
const story: Ref<Story[]> = ref([]);
const storyLoading = ref(false);

// function
const fetchstory = () => {
  storyLoading.value = true;

  $api.stories
    .getStories("newest")
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

// lifecycle
fetchstory();
</script>

<template>
  <section class="form">
    <div class="selects">
      <Select />
      <Select />
    </div>
    <Input placeholder="Search Story" />
  </section>
  <section class="cards">
    <!--  -->
    <CardSekelton v-if="storyLoading" />
    <CardSekelton v-if="storyLoading" />
    <CardSekelton v-if="storyLoading" />
    <CardSekelton v-if="storyLoading" />
    <!--  -->
    <Card v-for="item in story" :item="item" />
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
