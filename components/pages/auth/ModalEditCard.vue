<script lang="ts" setup>
import Button from "~/components/ui/Button.vue";
import Toast from '@/components/ui/Toast.vue'
import LoadingScreen from '@/components/ui/LoadingScreen.vue'

const model = defineModel();
const { $api } = useNuxtApp();
const bookmarkStatus = ref(false);
const bookmarkToast = ref(false);
const bookmarkMessage = ref("");
const loading = ref(false);

interface Props {
  id: string;
}

const props = defineProps<Props>();

// function
const handleClose = () => {
  model.value = !model.value;
};

const handleDelete = () => {
  loading.value = true;

  $api.stories
    .removeStory(props.id)
    .then((res) => {
      bookmarkMessage.value = res.message;
      bookmarkToast.value = true;

      setTimeout(() => {
        window.location.reload();
      }, 700);
    })
    .catch((err) => {
      alert('error system..')
      console.log('error', err);
    })
    .finally(() => {
      loading.value = false;
      bookmarkStatus.value = true;
      // 
      model.value = false;
      //
      setTimeout(() => {
        bookmarkStatus.value = false;
      }, 700);
    });
};
</script>

<template>
  <LoadingScreen v-if="loading" />
  <Toast type="info" :message="bookmarkMessage" v-model="bookmarkToast" />
  <div class="component" v-if="model">
    <div class="component__contain">
      <h2 class="component__title">Delete Story</h2>
      <p class="component__desc">Are you sure want to delete this story?</p>
      <div class="component__buttons">
        <Button label="Cancel" variant="secondary" @click="handleClose" />
        <Button label="Delete" variant="primary" @click="handleDelete" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.component {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.29);
  z-index: 80;
  width: 100vw;
  height: 100vh;

  &__title {
    font-family: DM Sans;
    font-weight: 700;
    font-size: clamp(24px, 3vw + 1rem, 36px);
    line-height: 46px;
    letter-spacing: 0%;
    text-align: center;
  }

  &__desc {
    font-family: DM Sans;
    font-weight: 400;
    font-size: clamp(16px, 1vw + 0.5rem, 18px);
    line-height: 27px;
    letter-spacing: 0%;
    text-align: center;
    margin: 2px 0 40px 0;
  }

  &__contain {
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 40px;
    border-radius: 10px;
  }

  &__buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    width: 100%;
  }
}
</style>
