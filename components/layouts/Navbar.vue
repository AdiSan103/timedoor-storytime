<template>
  <!-- modal -->
  <div class="modal fade" id="modalLogout" tabindex="-1" aria-labelledby="modalLogoutLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content py-4">
        <div class="modal-body">
          <h2 class="modal__title">Logout</h2>
          <p class="modal__desc">Are you sure want to logout?</p>
        </div>
        <div class="modal__buttons">
          <Button label="Cancel" data-bs-dismiss="modal" variant="secondary" />
          <Button label="Logout" variant="primary" @click="handleLogout" />
        </div>
      </div>
    </div>
  </div>
  <!-- nav -->
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <NuxtLink to="/">
        <img src="/images/logo.png" alt="logo" class="navbar__img" />
      </NuxtLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#modalLogout"
        aria-controls="modalLogout" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse d-lg-flex justify-content-lg-end navbar-collapse" id="modalLogout">
        <!-- content -->
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a v-if="authToken" class="nav-link dropdown-toggle d-flex gap-3 justify-content-center align-items-center"
              href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <!-- loading.. -->
              <div v-if="userLoading">
                <div class="placeholder-glow navbar__avatars">
                  <div class="placeholder navbar__loadingprofile"></div>
                  <div class="placeholder navbar__loadinguser"></div>
                </div>
              </div>
              <!-- loading end... -->
              <div v-else>
                <img class="navbar__user" :src="user.profile_image &&
                  user.profile_image != 'https://timestory.tmdsite.my.id/'
                  ? user.profile_image
                  : 'https://placehold.co/600x600'
                  " alt="" />
                <span class="navbar__usertitle">{{ user?.name }}</span>
              </div>
            </a>
            <div v-if="!authToken" class="d-flex justify-content-center gap-3">
              <Button link="/register" label="Register" variant="secondary" />
              <Button link="/login" label="Login" variant="primary" />
            </div>
            <ul class="dropdown-menu px-4 text-center">
              <li>
                <NuxtLink to="/profile" :prefetch="false" class="navbar__listitem">My Profile</NuxtLink>
              </li>
              <hr />
              <li>
                <span type="button" class="navbar__listitem" data-bs-toggle="modal" data-bs-target="#modalLogout">
                  Log Out
                </span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";

import Button from "@/components/ui/Button.vue";

// declaration variable
const menu = ref(false);
const authToken = useCookie("STORYTIME_TOKEN");
const { user, userLoading } = useUser();
const router = useRouter();
const { $api, $toast, $bModal } = useNuxtApp();

// function
const handleMenu = () => {
  menu.value = !menu.value;
};

const handleLogout = () => {
  $api.auth
    .logout()
    .then((res) => {
      // show toast
      $toast("Succesfully Logout!", {
        type: "success",
        position: "top-center",
        autoClose: 3000,
        transition: "zoom",
        dangerouslyHTMLString: true,
      }); // close popup
      // remove token
      const authToken = useCookie("STORYTIME_TOKEN");
      authToken.value = null;
      // redirect home
      console.log("- test logout -");

      setTimeout(() => {
        router.push("/");
      }, 1500);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      $bModal.toggle('modalLogout');
    });
};
</script>

<style scoped lang="scss">
@import "@/assets/main.scss";

.navbar {
  position: sticky;
  background-color: $color1;
  top: 0;
  z-index: 80;
  padding: 10px;
  box-shadow: 0px 1px 4px 0px #0c0c0d0d;
  box-shadow: 0px 1px 4px 0px #0c0c0d1a;

  &__avatars {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
  }

  &__loadingprofile {
    width: 30px;
    height: 30px;
    border-radius: 100%;
  }

  &__loadinguser {
    width: 150px;
    height: 20px;
    border-radius: 5px;
  }

  &__contain {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__img {
    width: 100%;
    max-width: 200px;
  }

  &__icon {
    transform: rotate(90deg);
  }

  &__avatar {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__content {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  &__user {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 30px;
    width: 30px;
    border-radius: 100%;
  }

  &__usertitle {
    font-family: DM Sans;
    font-weight: 700;
    font-size: clamp(16px, 1vw + 0.5rem, 18px);
    vertical-align: middle;
    margin-left: 10px;
  }

  &__listmenu {
    width: 150px;
    background-color: $color1;
    padding: 15px 20px;
    border-radius: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  &__listitem {
    margin: 0;
    padding: 0;
    cursor: pointer;
    color: black;
    text-decoration: none;
  }
}

.modal {
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
    justify-content: center;
    width: 100%;
    gap: 20px;
  }
}

@media screen and (max-width: 600px) {
  .navbar {
    &__contain {
      justify-content: space-between !important;
      gap: 10px;
    }

    &__usertitle {
      display: none;
    }
  }
}
</style>
