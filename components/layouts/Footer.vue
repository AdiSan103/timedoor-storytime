<script lang="ts" setup>
import Separator from "@/components/ui/Separator.vue";
import InstagramIcon from "@/assets/images/instagram.svg";
import YoutubeIcon from "@/assets/images/youtube.svg";
import FacebookIcon from "@/assets/images/facebook.svg";
</script>

<template>
  <UiSeparator />
  <section class="container footer">
    <p class="footer__title">© 2024 PT. Timedoor Indonesia. All rights reserved.</p>
    <div class="footer__socialmedia">
      <img :src="FacebookIcon" alt="facebook" />
      <img :src="InstagramIcon" alt="instagram" />
      <img :src="YoutubeIcon" alt="youtube" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;

  &__title {
    font-family: DM Sans;
    font-weight: 500;
    font-size: clamp(18px, 1vw + 0.5rem, 21px);
    letter-spacing: 0%;
    vertical-align: middle;
    margin: 0;
  }

  &__socialmedia {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
}

@media screen and (max-width:600px) {
  .footer {
    flex-direction: column;
    text-align: center;
    gap: 30px;
  }
}
</style>
