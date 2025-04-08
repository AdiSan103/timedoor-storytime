<template>
  <NuxtLayout name="default">
    <section class="container banner">
      <h1>Welcome to Storytime</h1>
      <p>
        The world's most-loved social storytelling platform. Story time connects a global
        community of 90 million readers and writers through the power of story.
      </p>
      <Input placeholder="Search Story" customClass="input" />
      <img src="/images/image1.png" alt="" />
    </section>
    <section class="container lastest-story">
      <div class="d-flex justify-content-between align-items-center">
        <h2>Latest Story</h2>
        <NuxLink to="/#" class="link"
          >Explore More <Icon name="formkit:arrowright" style="color: black" size="18" />
        </NuxLink>
      </div>
      <Separator />
      <div class="cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
    <section class="container comedy">
      <div class="d-flex justify-content-between align-items-center">
        <h2>Comedy</h2>
        <NuxLink to="/#" class="link"
          >Explore More <Icon name="formkit:arrowright" style="color: black" size="18" />
        </NuxLink>
      </div>
      <Separator />
      <div class="cards">
        <Card height="770" />
        <div class="left">
          <Card />
          <Card />
        </div>
      </div>
    </section>
    <section class="container lastest-story">
      <div class="d-flex justify-content-between align-items-center">
        <h2>Latest Story</h2>
        <NuxLink to="/#" class="link"
          >Explore More <Icon name="formkit:arrowright" style="color: black" size="18" />
        </NuxLink>
      </div>
      <Separator />
      <div class="cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
    <section class="container comedy">
      <div class="d-flex justify-content-between align-items-center">
        <h2>Horror</h2>
        <NuxLink to="/#" class="link"
          >Explore More <Icon name="formkit:arrowright" style="color: black" size="18" />
        </NuxLink>
      </div>
      <Separator />
      <div class="cards">
        <Card height="770" />
        <div class="left">
          <Card />
          <Card />
        </div>
      </div>
    </section>
    <section class="container categories">
      <h2>More Categories</h2>
      <Separator />
      <div class="cards">
        <Badge classCustom="badge_" />
        <Badge classCustom="badge_" />
        <Badge classCustom="badge_" />
        <Badge classCustom="badge_" />
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
import Input from "@/components/ui/Input.vue";
import Separator from "@/components/ui/Separator.vue";
import Card from "@/components/ui/Card.vue";
import Badge from "@/components/ui/Badge.vue";
</script>

<style lang="scss" scoped>
.banner {
  padding: 50px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-family: Playfair Display;
    font-weight: 400;
    font-size: 60px;
    line-height: 74px;
    letter-spacing: 0%;
    text-align: center;
    text-shadow: 0px 4px 4px #00000040;
  }

  p {
    padding-top: 20px;
    font-family: DM Sans;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 0%;
    text-align: center;
    max-width: 1412px;
  }

  .input {
    width: 100% !important;
    max-width: 1062px;
    margin-top: 30px;
  }

  img {
    width: 100%;
    max-width: 802px;
    margin-top: 30px;
  }
}

.lastest-story {
  h2 {
    font-family: Playfair Display;
    font-weight: 600;
    font-size: 44px;
    line-height: 58px;
    letter-spacing: 0%;
  }
  .link {
    font-family: DM Sans;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 0%;
    vertical-align: middle;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  .cards {
    width: 100%;
    display: flex;
    gap: 20px;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
  }
}

.comedy {
  .cards {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
}

.categories {
  padding: 40px 0;

  h2 {
    font-family: Playfair Display;
    font-weight: 600;
    font-size: 44px;
    line-height: 58px;
    letter-spacing: 0%;
  }
  .cards {
    gap: 20px;
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
  }
  .badge_ {
    font-size: 18px;
    padding: 25px 20px;
  }
}
</style>
