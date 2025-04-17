<script setup lang="ts">
import Button from "../ui/Button.vue";
import Toast from "~/components/ui/Toast.vue";

const model = defineModel();
const toastStatus = ref(false);

const { $api } = useNuxtApp();

const handleLogout = () => {

  $api.auth
    .getDetail()
    .then((res) => {
      user.value = res.user;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      userLoading.value = false;
    });

  // show toast
  toastStatus.value = true;
  // close popup
  handleCancel();
  // remove token
  const authToken = useCookie("STORYTIME_TOKEN");
  authToken.value = null;
  // redirect home page
  setTimeout(() => {
    window.location.href = "/"
  }, 1000)
};

const handleCancel = () => {
  model.value = !model.value;
};
</script>
<template>
  <Toast type="success" message="Logout Successfully!" v-model="toastStatus" />
  <div class="popup" v-if="model">
    <div class="popup__contain">
      <h2 class="popup__title">Logout</h2>
      <p class="popup__desc">Are you sure want to logout?</p>
      <div class="popup__buttons">
        <Button label="Cancel" variant="secondary" @click="handleCancel" />
        <Button label="Logout" variant="primary" @click="handleLogout" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.popup {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.088);
  z-index: 90;

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
  }

  &__contain {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    padding: 10px;
    background-color: white;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
    gap: 10px;
  }

  &__buttons {
    display: flex;
    gap: 20px;
  }
}
</style>
