<template>
  <!-- Button trigger modal -->
  <UiButton type="button" label="Edit Profile" data-bs-toggle="modal" data-bs-target="#modalProfile" variant="primary"
    @click="handleModelProfile" />

  <!-- Modal -->
  <div class="modal fade" id="modalProfile" tabindex="-1" aria-labelledby="modalProfileLabel" aria-hidden="true">
    <div class="modal-dialog component modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-body ">

          <form action="" class="component__form" @submit.prevent="onSubmit">
            <h1 class="component__heading1">Edit Profile</h1>
            <div class="component__contain">
              <div class="component__left">
                <div class="component__user">
                  <img :src="imageDefault" alt="image user" class="component__image" />
                  <UiButton label="Change Picture" variant="secondary" />
                </div>
                <UiInput label="Name" placeholder="Name" v-model="name" :error="errors.name" />
                <UiInput :disabled="true" label="Email" placeholder="Email" type="email" v-model="user.email" />
                <ClientOnly>
                  <UiInputtextarea v-model="about" type="basic" label="About Me" />
                </ClientOnly>
              </div>
              <div class="component__right">
                <h1 class="component__heading1">Change Password</h1>
                <UiInput label="Olda Password" :error="errors.old_password" placeholder="Enter your old password"
                  v-model="old_password" />
                <UiInput label="New Password" :error="errors.new_password" placeholder="Enter your new password"
                  v-model="new_password" />
                <UiInput label="Confirm New Passsword" :error="errors.new_password_confirmation"
                  placeholder="Re-enter your new passsword" v-model="new_password_confirmation" />
              </div>
            </div>
            <div class="component__buttons">
              <UiButton label="Cancel" variant="secondary" data-bs-dismiss="modal" aria-label="Close" />
              <UiButton label="Update Profile" variant="primary" type="submit" />
            </div>
          </form>

        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useForm } from "vee-validate";
import * as yup from "yup";
import { onMounted } from 'vue'

import Input from "~/components/ui/Input.vue";
import InputTextarea from "~/components/ui/InputTextarea.vue";
import Button from "~/components/ui/Button.vue";
import LoadingScreen from '@/components/ui/LoadingScreen.vue'

import imageDefault from "@/assets/images/image-book.png"

// variable
const { $api } = useNuxtApp();
const { user, userLoading } = useUser();
const model = defineModel()
const loading = ref(false);

// Schema for form validation
const schema = yup.object({
  name: yup.string().required('Name is required'),
  about: yup.string(),
  old_password: yup.string().required('Old password is required'),
  new_password: yup.string().required('New password is required'),
  new_password_confirmation: yup
    .string()
    .required('Confirm password is required')
    .oneOf([yup.ref('new_password')], 'Passwords must match'),
});

// Use vee-validate for form management and validation
const { defineField, handleSubmit, errors, resetForm, setFieldValue } = useForm({
  validationSchema: schema,
});

// Define fields using defineField for individual input management
const [name] = defineField("name");
const [about] = defineField("about");
const [old_password] = defineField("old_password");
const [new_password] = defineField("new_password");
const [new_password_confirmation] = defineField("new_password_confirmation");

// function
const handleClose = () => {
  model.value = !model.value
}

const onSubmit = handleSubmit(() => {
  loading.value = true;

  const formData = new FormData();

  formData.append("name", name.value);
  formData.append("about", about.value);
  formData.append("old_password", old_password.value);
  formData.append("new_password", new_password.value);
  formData.append("new_password_confirmation", new_password_confirmation.value);

  // Ensure content_images.value is treated as an array
  // const imageArray = Array.isArray(content_images.value)
  //   ? content_images.value
  //   : [content_images.value]; // wrap in array if it's a single file

  // imageArray.forEach((file: File) => {
  //   formData.append("content_images[]", file); // correctly append as array
  // });

  // console.log("data form", formData);

  // console.log("type images");
  // console.log(typeof content_images.value); // Should be "object"
  // console.log(content_images.value); // Should show File or File[]

  $api.users
    .updateProfile(formData)
    .then((res) => {
      // console.log('success response : ', res);
    })
    .catch((err) => {
      console.log('error : ', err);
    })
    .finally(() => {
      loading.value = false;
    });
});

// on Mounted
// Auto-fill form when user data is available
onMounted(() => {
  if (user.value) {
    setFieldValue("name", user.value.name);
    setFieldValue("about", user.value.about || '-');
    // Note: Password fields are not auto-filled for security reasons
  }
});
</script>


<style lang="scss" scoped>
@import "@/assets/main.scss";

.modal-dialog {
  max-width: 1000px;
}

.component {
  max-width: 800px;

  &__form {
    width: 100%;
    max-width: 1200px;
    padding: 30px;
    background-color: $color1;
    border-radius: 10px;
  }

  &__user {
    display: flex;
    gap: 20px;
    justify-content: start;
    align-items: center;
  }

  &__image {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 180px;
    height: 180px;
    border-radius: 100%;
  }

  &__heading1 {
    font-family: DM Sans;
    font-weight: 700;
    font-size: clamp(24px, 3vw + 1rem, 36px);
    line-height: 46px;
    letter-spacing: 0%;
  }

  &__buttons {
    display: flex;
    gap: 20px;
    padding: 20px 0;
  }

  &__left {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__right {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__contain {
    display: flex;
    gap: 30px;
  }
}

@media screen and (max-width:700px) {
  .component {

    &__user {
      flex-direction: column;
    }

    &__contain {
      flex-direction: column
    }

    &__left {
      width: 100%;
    }

    &__right {
      width: 100%
    }
  }
}
</style>
