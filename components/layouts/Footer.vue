<template>
  <Separator />
  <section class="container">
    <p>© 2024 PT. Timedoor Indonesia. All rights reserved.</p>
    <div class="socialmedia">
      <img :src="FacebookIcon" alt="facebook" />
      <img :src="InstagramIcon" alt="instagram" />
      <img :src="YoutubeIcon" alt="youtube" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import Separator from "@/components/ui/Separator.vue";
import InstagramIcon from "@/assets/images/instagram.svg";
import YoutubeIcon from "@/assets/images/youtube.svg";
import FacebookIcon from "@/assets/images/facebook.svg";
</script>

<style lang="scss" scoped>
section {
 display: flex;
 justify-content: space-between;
 align-items:center;
 padding: 20px 0;

  p {
    font-family: DM Sans;
    font-weight: 500;
    font-size: 20px;
    letter-spacing: 0%;
    vertical-align: middle;
    margin:0;
    
  }
  .socialmedia {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
}
</style>
