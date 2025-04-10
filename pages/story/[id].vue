<script setup lang="ts">

import type { Story } from "~/type/module/stories";

import Card from "~/components/ui/Card.vue";
import Breadcumb from "~/components/ui/Breadcumb.vue";
import SliderThumbs from "~/components/ui/SliderThumbs.vue";
import bg from "@/assets/images/image-book.png";
import Separator from "~/components/ui/Separator.vue";

definePageMeta({
  layout: "home",
});

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
  <Breadcumb />
  <div class="detail container">
    <section class="detail__title">
      <p class="detail__label">15 May 2023</p>
      <h1 class="detail__title">Guardians of the Galaxy Vol. 3</h1>
      <div class="detail__avatar">
        <div :style="{ backgroundImage: `url(${bg})` }" class="detail__user"></div>
        <p class="detail__label">Khrisvana (updated) 1</p>
      </div>
      <div class="detail__bookmark">
        <Icon
          name="material-symbols:bookmark-add-outline-rounded"
          style="color: #fff"
          size="25"
        />
      </div>
    </section>
    <section class="detail__content">
      <div class="detail__contentleft">
        <SliderThumbs />
      </div>
      <div class="detail__contentright">
        <p>
          At their new headquarters on Knowhere,[a] the Guardians of the Galaxy are
          attacked by Adam Warlock, a Sovereign warrior created by their high
          priestess Ayesha.[b] After Adam overpowers them and critically wounds Rocket, he
          is stabbed by Nebula and forced to flee. The Guardians are unable to tend to
          Rocket's wounds due to a kill switch, made by the company Orgocorp, embedded in
          him. They travel to Orgocorp's headquarters to find the override code.
        </p>
        <p>
          As Rocket lies unconscious, he recalls his past. As a baby raccoon, he was
          experimented on by the High Evolutionary, a scientist who sought to enhance
          and anthropomorphize animal lifeforms to create a Counter-Earth. Rocket
          befriended the High Evolutionary's other test subjects: the otter Lylla,
          the walrus Teefs, and the rabbit Floor. The High Evolutionary was impressed by
          Rocket's intelligence but furious that it exceeded his own. The High
          Evolutionary perfected his experiments with Rocket's advice but ordered Rocket's
          brain to be extracted and his friends incinerated. Rocket freed Lylla, only for
          the High Evolutionary to kill her. Rocket mauled the High Evolutionary and shot
          his guards, but Teefs and Floor were killed in the chaos. Alone, Rocket stole a
          spaceship and fled.
        </p>

        <p>
          In the present, the alternate version of Gamora,[c] who has joined the Ravagers,
          helps the Guardians infiltrate Orgocorp. They retrieve Rocket's file but
          discover that the code has been removed. The group speculates that Theel, one of
          the High Evolutionary's advisors, has it, so they depart for Counter-Earth. They
          are followed by Ayesha and Adam, who are ordered by their creator, the High
          Evolutionary, to retrieve Rocket for his brain.
        </p>

        <p>
          Upon arriving, the team is helped by residents in tracing Theel to the High
          Evolutionary's ship. Drax and Mantis remain with Gamora and Rocket as Peter
          Quill, Groot, and Nebula travel to the High Evolutionary's ship. Nebula is
          forced to wait outside by guards as Quill and Groot board. Drax and Mantis
          pursue Quill's group.
        </p>
        <p>
          The High Evolutionary initiates his destruction and planned recreation of
          Counter-Earth, which kills all life on the planet, including Ayesha. As his ship
          enters orbit, Quill and Groot leap off and kill Theel, retrieving the code from
          him. Gamora arrives with their ship to rescue them, while Nebula, Mantis, and
          Drax board the High Evolutionary's ship to escape the planet. As Quill's group
          attempts to access the code, Rocket flatlines and has a near-death experience,
          where he reunites with Lylla, Teefs, and Floor. Lylla tells him that his time
          has not yet come as Quill uses the code to disable the kill switch and save
          Rocket's life.
        </p>
        <p>
          Nebula, Mantis, and Drax come across hundreds of imprisoned humanoid children on
          the High Evolutionary's ship before being captured. Quill's group sets out to
          rescue the three, who are placed in a chamber with monstrous Abilisks. Mantis
          befriends the Abilisks, allowing the group to escape and reunite with Quill's
          group, together overpowering the High Evolutionary's
          army. Kraglin and Cosmo arrive on Knowhere, and Cosmo creates
          a telekinetic tunnel connecting Knowhere to the High Evolutionary's ship to free
          the captured children. Rocket discovers imprisoned animals on the ship before
          being attacked by the High Evolutionary, but the rest of the Guardians help
          subdue him, leaving him to perish on his ship. The Guardians rescue the animals
          and lead them aboard Knowhere. Quill nearly dies trying to cross over but is
          saved by Adam, who had a change of heart after being saved by Groot.
        </p>
        <p>
          In the aftermath, Quill leaves the Guardians, bestowing the captaincy to Rocket
          before leaving for Earth to reunite with his grandfather Jason. Mantis embarks
          on a journey of self-discovery with the Abilisks, Gamora reunites with the
          Ravagers, and Nebula and Drax remain on Knowhere to raise the rescued children.
        </p>
        <p>
          In a mid-credits scene, the new Guardians, consisting of Rocket, Groot, Cosmo,
          Kraglin, Adam, Phyla (one of the rescued children), and Adam's pet Blurp, take
          on a new mission. In a post-credits scene, Quill eats breakfast with Jason.
        </p>
      </div>
    </section>
    <section>
      <h3 class="detail__heading3">Similiar Story</h3>
      <Separator />
      <div class="detail__items">
        <Card v-for="item in story" :item="item" />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";
.detail {
  &__title {
    text-align: center;
    margin-bottom: 50px;
    position: relative;
  }
  &__heading2 {
    font-family: Playfair Display;
    font-weight: 600;
    font-size: 44px;
    letter-spacing: 0%;
    margin-bottom: 40px;
    margin-top: 100px;
  }
  &__bookmark {
    background-color: $color3;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    position: absolute;
    top: 0;
    cursor: pointer;
    right: 0;
  }
  &__label {
    font-family: DM Sans;
    font-weight: 400;
    font-size: 24px;
    letter-spacing: 0%;
    text-align: center;
    margin: 0;
  }
  &__title {
    font-family: Playfair Display;
    font-weight: 700;
    font-size: 60px;
    letter-spacing: 0%;
    text-align: center;
    margin-bottom: 40px;
  }

  &__avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  &__user {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 30px;
    width: 30px;
    border-radius: 100%;
  }

  &__content {
    display: flex;
    gap: 40px;
  }

  &__contentleft {
    width: 40%;
  }

  &__contentright {
    width: 60%;
  }

  &__items {
    margin: 50px 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
  }
}
</style>
