<template>
  <div class="custom-select">
    <label for="selects">Sort By</label>
    <div class="select-wrapper">
      <select id="selects">
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="popular">Most Popular</option>
      </select>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.custom-select {
  display: flex;
  gap: 20px;

  label {
    font-family: "DM Sans";
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    display: block;
    margin-bottom: 8px;
    width: 130px;
  }

  .select-wrapper {
    position: relative;
    width: 100%;
    max-width: 300px;

    select {
      max-width: 120px;
      font-family: "DM Sans";
      font-weight: 500;
      font-size: 24px;
      line-height: 32px;
      border: none;
      outline: none;
    }
  }
}
</style>
