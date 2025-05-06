<script setup lang="ts">
const route = useRoute()

const breadcrumbs = computed(() => {
  const paths = []

  // Always start with 'story'
  paths.push('story')

  if (route.params.id) {
    // If the URL is like /story/100
    paths.push(route.params.id)
  } else {
    // If the URL is /story?query=params
    const { sort_by, category, search } = route.query

    if (sort_by) {
      paths.push(sort_by)
    }
    if (category) {
      paths.push(category)
    }
    if (search) {
      paths.push(search)
    }
  }

  return paths
})
</script>

<template>
  <div class="breadcumb">
    <div class="breadcumb__contain container">
      <NuxtLink :to="'/' + item" v-for="(item, index) in breadcrumbs" :key="index" class="breadcumb__link">
        {{ item }}
        <span v-if="index < breadcrumbs.length - 1" class="breadcumb__separator"> / </span>
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";

.breadcumb {
  background-color: $color2;
  width: 100%;
  margin-bottom: 40px;
  padding: 5px 0;

  &__link {
    color: $color8;
    text-decoration: none;
  }

  &__contain {
    padding: 20px 10px;
    font-family: DM Sans;
    font-weight: 500;
    font-size: clamp(18px, 1vw + 0.5rem, 21px);
    letter-spacing: 0%;
  }

  &__separator {
    margin: 0 20px;
    color: $color3;
  }
}
</style>
