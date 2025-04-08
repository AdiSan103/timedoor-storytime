<script setup lang="ts">
import Input from "~/components/ui/Input.vue";
import Select from "~/components/ui/Select.vue";
import Card from "~/components/ui/Card.vue";
import Pagination from "~/components/ui/Pagination.vue";

definePageMeta({
  layout: "story",
});
</script>

<template>
  <section class="form">
    <div class="selects">
      <Select />
      <Select />
    </div>
    <Input placeholder="Search Story" classCustom="inputCustom" />
  </section>
  <section class="cards2">
    <div class="cards">
      <Card height="770" />
      <div class="left">
        <Card />
        <Card />
      </div>
    </div>
  </section>
  <section class="cards">
    <Card />
    <Card />
    <Card />
    <Card />
  </section>
  <Pagination classCustom="pagination" />
</template>

<style lang="scss" scoped>
.cards2 {
  .cards {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
}
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
.inputCustom {
  width: 45%;
}
</style>
