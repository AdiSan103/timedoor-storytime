<template>
  <UiLoadingScreen v-if="loading" />
  <section class="register container">
    <div class="register__left">
      <img :src="logoImg" alt="logo" class="register__logo" />
      <h1 class="register__heading1">
        Join the World’s Most-Loved Social Storytelling Platform!
      </h1>
      <p class="register__desc">
        Create an account to explore interesting articles, connect with like-minded
        people, and share your own stories.
      </p>
      <img :src="imgRegister" alt="image register" class="register__image" />
    </div>
    <div class="register__right">
      <h3 class="register__heading2">Create Account</h3>
      <form action="" class="register__form" @submit.prevent="onSubmit">
        <UiInput v-model="name" :error="errors.name" placeholder="Enter Your Name" label="Name" type="text" />
        <UiInput v-model="username" :error="errors.username" placeholder="Enter Your Username" label="Username"
          type="text" />
        <UiInput v-model="email" :error="errors.email" placeholder="Enter Your Email" label="Email" type="email" />
        <UiInput v-model="password" :error="errors.password" placeholder="Enter Your Password" label="Password"
          type="password" />
        <UiInput v-model="password_confirmation" :error="errors.password_confirmation"
          placeholder="Re-enter your chosen password" label="Confirm Passowrd" type="password" />
        <UiButton variant="primary" label="Create Account" classCustom="register__button" />
        <span class="register__link">Already have an account?
          <NuxtLink :prefetch="false" to="/login" class="register__login">Login</NuxtLink>
        </span>
      </form>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useForm } from "vee-validate";
import * as yup from "yup";

import logoImg from "@/assets/images/logo.png";
import imgRegister from "@/assets/images/register.png";

// meta
useSeoMeta({
  title: "Register Apps",
  ogTitle: "Register Apps",
  // description: 'This is my amazing site, let me tell you all about it.',
  // ogDescription: 'This is my amazing site, let me tell you all about it.',
})

// Initialize variable
const { $api, $toast } = useNuxtApp();
const loading = ref(false);
const token = useCookie("STORYTIME_TOKEN");

// Schema for form validation
const schema = yup.object({
  name: yup.string().required("Name is required"),
  username: yup.string().required("username is required"),
  password: yup.string().required("Password is required"),
  email: yup.string().email().required("email is required"),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
});

// Use vee-validate for form management and validation
const { defineField, handleSubmit, errors, resetForm } = useForm({
  validationSchema: schema,
});

// Define fields using defineField for individual input management
const [username] = defineField("username");
const [name] = defineField("name");
const [email] = defineField("email");
const [password] = defineField("password");
const [password_confirmation] = defineField("password_confirmation");

// function
const onSubmit = handleSubmit(() => {
  loading.value = true;

  const formRegister = {
    username: username.value,
    email: email.value,
    name: name.value,
    password: password.value,
    password_confirmation: password_confirmation.value,
  };

  $api.auth
    .register(formRegister)
    .then(async (res) => {
      console.log(res);
      token.value = res.token;

      // check
      if (res.token && res.token !== "") {
        //  success flow
        // message
        $toast("Success Registered", {
          type: "success",
          position: "top-center",
          autoClose: 3000,
          transition: "zoom",
          dangerouslyHTMLString: true
        });

        await navigateTo("/profile");
      } else {
        //  failure flow
        $toast("Your cccount has been registered", {
          type: "info",
          position: "top-center",
          autoClose: 3000,
          transition: "zoom",
          dangerouslyHTMLString: true
        });
      }
    })
    .catch((err) => {
      alert("!Error!");
      console.log(err);
    })
    .finally(() => {
      loading.value = false;
    });
});
</script>

<style lang="scss" scoped>
@import "@/assets/main.scss";

.register {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  gap: 50px;

  &__logo {
    width: 254px;
    margin-bottom: 50px;
  }

  &__heading1 {
    font-family: Playfair Display;
    font-weight: 700;
    font-size: 50px;
    letter-spacing: 0%;
    vertical-align: middle;
  }

  &__desc {
    font-family: DM Sans;
    font-weight: 400;
    font-size: clamp(18px, 1vw + 0.5rem, 21px);
    letter-spacing: 0%;
    vertical-align: middle;
  }

  &__heading2 {
    font-family: DM Sans;
    font-weight: 700;
    font-size: 44px;
    line-height: 58px;
    letter-spacing: 0%;
    vertical-align: middle;
    margin-bottom: 40px;
  }

  &__link {
    font-family: DM Sans;
    font-weight: 400;
    font-size: clamp(16px, 1vw + 0.5rem, 18px);
    line-height: 23px;
    letter-spacing: 0%;
    vertical-align: middle;
    margin-top: 30px;
  }

  &__login {
    font-family: DM Sans;
    font-weight: 700;
    font-size: clamp(16px, 1vw + 0.5rem, 18px);
    line-height: 23px;
    letter-spacing: 0%;
    vertical-align: middle;
    color: $color3;
    text-decoration: none;
  }

  &__image {
    width: 100%;
    max-width: 500px;
    margin: auto;
    display: flex;
  }

  &__left {
    width: 50%;
    background-color: $color2;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 30px;
    max-width: 800px;
    max-height: 1400px;
    border-radius: 20px;
    padding: 40px;
    margin: 20px;
  }

  &__right {
    padding: 30px;
    width: 50%;
    max-width: 800px;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__button {
    width: 250px;
  }
}

@media screen and (max-width:900px) {
  .register {
    flex-direction: column;

    &__left {
      display: none;
    }

    &__right {
      width: 100%;
    }
  }
}
</style>
