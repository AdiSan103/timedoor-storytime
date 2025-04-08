<template>
  <div class="card">
    <div
      :style="{ backgroundImage: `url(${bg})`, minHeight: (height ?? 300) + 'px' }"
      class="bg"
    >
      <div class="bookmark">
        <Icon
          name="material-symbols:bookmark-add-outline-rounded"
          style="color: #fff"
          size="25"
        />
      </div>
    </div>
    <div class="content">
      <h3>Gemma</h3>
      <p>
        1. GOLDEN Gemma was only five minutes away from her parents’ hut, but the jungle
        had already taken on a different personality. It was thicker. The trees had grown
        taller. The ti plants shaded the...
      </p>
    </div>
    <div class="footer">
      <div class="left">
        <div :style="{ backgroundImage: `url(${bg})` }" class="user"></div>
        <p>Khrisvana (updated) 1</p>
      </div>
      <div class="right">
        <p>12 March 2024</p>
        <Badge />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import bg from "@/assets/images/image-book.png";
import Badge from "@/components/ui/Badge.vue";
import { defineProps } from "vue";

// Define props with TypeScript
interface Props {
  height?: string;
}

defineProps<Props>();
</script>

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

  .footer {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
    }

    .right {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
    }

    p {
      font-family: DM Sans;
      font-weight: 500;
      font-size: 8px;
      line-height: 26px;
      letter-spacing: 0%;
      vertical-align: middle;
      margin: 0;
    }
  }

  .user {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 30px;
    width: 30px;
    border-radius: 100%;
  }

  .bg {
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    flex-shrink: 0;
    border-radius: 8px;
    position: relative;

    .bookmark {
      background-color: $color3;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100px;
      position: absolute;
      bottom: 10px;
      cursor: pointer;
      right: 10px;
    }
  }

  .content {
    padding: 10px;
    word-wrap: break-word;
    overflow-wrap: break-word;
    white-space: normal;

    h3 {
      font-family: DM Sans;
      font-weight: 700;
      font-size: 26px;
      line-height: 46px;
      letter-spacing: 0%;
      vertical-align: middle;
    }

    p {
      font-family: DM Sans;
      font-weight: 400;
      font-size: 12px;
      letter-spacing: 0%;
    }
  }
}
</style>
