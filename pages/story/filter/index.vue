<script setup lang="ts">
import Input from "~/components/ui/Input.vue";
import Select from "~/components/ui/Select.vue";
import Card from "~/components/ui/Card.vue";
import type { Story } from "~/type/module/stories";
import CardSekeleton from "~/components/ui/CardSekeleton.vue";
import Toast from "~/components/ui/Toast.vue";
import type { Category } from "~/type/module/categories";

// meta
definePageMeta({
  layout: "story",
});

// declaration variable
const { $api } = useNuxtApp();
const story: Ref<Story[]> = ref([]);
const storyLoading = ref(false);
const route = useRoute();
// query
const sort_by: Ref<string | any> = ref(route.query.sort_by);
const category: Ref<string | any> = ref(route.query.category);
const search: Ref<string | any> = ref(route.query.search);
// toast
const toastMessage = ref("");
const toastStatus = ref(false);
// select
const selectLoading = ref(false);
const selectCategory: Ref<Category[]> = ref([]);
const selectOrder = [
  {
    id: "popular",
    name: "popular",
  },
  {
    id: "a-z",
    name: "a-z",
  },
  {
    id: "z-a",
    name: "z-a",
  },
  {
    id: "newest",
    name: "newest",
  },
];

// handle search
const handleSearchPage = () => {
  const queryParams = new URLSearchParams();

  if (sort_by.value) {
    queryParams.append("sort_by", sort_by.value);
  }

  if (category.value) {
    queryParams.append("category", category.value);
  }

  if (search.value) {
    queryParams.append("search", search.value);
  }

  window.location.href = "/story/filter?" + queryParams.toString();
};

// fetch story
const fetchstory = () => {
  storyLoading.value = true;

  const keywords: Record<string, string> = {};

  if (sort_by.value) keywords.sort_by = sort_by.value;
  if (search.value) keywords.search = search.value;
  if (category.value) keywords.category = category.value;

  console.log("keywords : ", keywords);

  $api.stories
    .getFilter(keywords)
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


// fetch category
const fetchCategories = () => {
  selectLoading.value = true;

  $api.categories
    .getCategories()
    .then((res) => {
      selectCategory.value = res.data; // ✅ karena res.data.value = PropsStory
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      selectLoading.value = false;
    });
};

// handle search
const handleSearch = () => {
  if (search.value == "") {
    toastStatus.value = true;
    toastMessage.value = "Pencaharian Kosong...";
  } else {
    handleSearchPage();
  }
};

// handle reset keyword
const handleResetKeyword = () => {
  sort_by.value = "";
  search.value = "";
  category.value = "";
  // 
  toastStatus.value = true;
  toastMessage.value = "Reset Keyword...";
}

// lifecycle
fetchCategories();
fetchstory();
</script>

<template>
  <Toast :message="toastMessage" type="info" v-model="toastStatus" />

  <section class="form">
    <!-- condition select -->
    <div class="form__selects" v-if="!selectLoading">
      <Select label="Category" :options="selectCategory" v-model="category" optionValue="id" optionLabel="name"
        @change="handleSearchPage" />
      <Select label="Sort By" :options="selectOrder" v-model="sort_by" optionValue="name" optionLabel="name"
        @change="handleSearchPage" />
    </div>
    <!-- else -->
    <div class="form__selects placeholder-glow" v-if="selectLoading">
      <div class="placeholder form__selectsekeleton"></div>
      <div class="placeholder form__selectsekeleton"></div>
    </div>

    <form @submit.prevent="handleSearch" class="form__search">
      <Input placeholder="Search Story" classCustom="form__input" v-model="search" />
      <Icon name="proicons:cancel" style="color: black" size="25" @click="handleResetKeyword"
        class="form__buttonreset" />
    </form>
  </section>

  <!--  -->
  <section class="cards" v-if="storyLoading || story.length != 0">
    <div class="cards__items">
      <Card height="770" :item="story[0]" v-if="!storyLoading" />
      <CardSekeleton height="770" v-if="storyLoading" />
      <div class="cards__left">
        <CardSekeleton v-if="storyLoading" />
        <CardSekeleton v-if="storyLoading" />
        <Card :item="story[1]" v-if="!storyLoading" />
        <Card :item="story[2]" v-if="!storyLoading" />
      </div>
    </div>
  </section>
  <section class="cards__list" v-if="storyLoading || story.length != 0">
    <!--  -->
    <CardSekeleton v-if="storyLoading" />
    <CardSekeleton v-if="storyLoading" />
    <CardSekeleton v-if="storyLoading" />
    <CardSekeleton v-if="storyLoading" />
    <!--  -->
    <Card v-for="(item, index) in story" :item="item" :key="index" />
  </section>
  <p v-else class="text-center fst-italic">📚 Story not found.. ❌</p>
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

  &__selectsekeleton {
    width: 150px;
    height: 30px;
    border-radius: 5px;
  }

  &__search {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  &__buttonreset {
    cursor: pointer;
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
</style>
