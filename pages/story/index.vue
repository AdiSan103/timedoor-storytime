<script setup lang="ts">
definePageMeta({
  layout: "story",
});

import Input from "~/components/ui/Input.vue";
import Select from "~/components/ui/Select.vue";
import Card from "~/components/ui/Card.vue";
import Pagination from "~/components/ui/Pagination.vue";
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
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
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
