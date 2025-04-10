<script setup lang="ts">
import { ref, reactive } from "vue";
import VueCropper from "vue-cropperjs";
import "cropperjs/dist/cropper.css";

import Button from "@/components/ui/Button.vue";

defineProps<{
  image_name?: string;
}>();

const mime_type = ref("");
const cropedImage = ref("");
const autoCrop = ref(false);
const selectedFile = ref("");
const image = ref("");
const dialog = ref(false);
const files = ref<File | null>(null);

const cropperRef = ref();

function onFileSelect(e: Event) {
  const target = e.target as HTMLInputElement;
  const file = target.files?.[0];
  if (!file) return;

  mime_type.value = file.type;
  if (typeof FileReader === "function") {
    dialog.value = true;
    const reader = new FileReader();
    reader.onload = (event: ProgressEvent<FileReader>) => {
      selectedFile.value = event.target?.result as string;
      cropperRef.value?.replace(selectedFile.value);
    };
    reader.readAsDataURL(file);
  } else {
    alert("Sorry, FileReader API not supported");
  }
}

function saveImage() {
  const canvas = cropperRef.value?.getCroppedCanvas();
  if (!canvas) return;

  cropedImage.value = canvas.toDataURL();
  canvas.toBlob((blob: Blob) => {
    if (!blob) return;
    const formData = new FormData();
    formData.append("profile_photo", blob, "name.jpeg");
    alert("success save");
    console.log(formData);

    // Uncomment when ready to use axios
    // axios
    //   .post(`/api/user/profile-photo`, formData)
    //   .then((response) => {})
    //   .catch((error) => {
    //     console.error(error)
    //   })
  }, mime_type.value);
}
</script>

<template>
  <div class="inputimage">
    <p class="inputimage__title">Cover Image</p>
    <div class="inputimage__contain" v-if="!dialog">
    <!--  -->
      <img :src="image_name" class="inputimage__image" v-if="image_name"></img>
      <Icon name="ph:image-thin" style="color: black" size="100" v-else />

      <label for="inputimage" class="inputimage__label">Choose image</label>
      <input
        class="inputimage__action"
        ref="FileInput"
        type="file"
        style="display: none"
        name="inputimage"
        id="inputimage"
        @change="onFileSelect"
      />
    </div>
    <div v-if="dialog" width="500" class="dialog">
      <VueCropper
        v-show="selectedFile"
        ref="cropperRef"
        :src="selectedFile"
        alt="Source Image"
      />
      <div class="dialog__buttons">
        <Button
          label="Crop"
          variant="primary"
          @click="
            saveImage();
            dialog = false;
          "
        />
        <Button variant="secondary" @click="dialog = false" label="Cancel" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.inputimage {
  &__title {
    font-family: DM Sans;
    font-weight: 400;
    font-size: 18px;
    letter-spacing: 0%;
    vertical-align: middle;
  }

  &__contain {
    width: 100%;
    max-width: 500px;
    height: 500px;
    border: 3px solid #2e7d32;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border: 2px solid #cccccc;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  &__label {
    font-family: DM Sans;
    font-weight: 400;
    font-size: 18px;
    letter-spacing: 0%;
    cursor: pointer;
    width: 100%;
    max-width: 500px;
    height: 500px;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
    transition: 0.5s;
    background-color: rgba(255, 255, 255, 0.442);

    &:hover {
      background-color: rgba(0, 0, 0, 0.052);
    }
  }

  &__action {
    position: absolute;
    top: 0;
    background-color: black;
    width: 100%;
    max-width: 500px;
    height: 500px;
    left: 0;
    z-index: 99;
    cursor: pointer;
  }

  &__image {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    max-width: 500px;
    height: 500px;
    border-radius: 20px;
  }
}

.dialog {
  &__buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
    padding: 20px 0 40px;
  }
}
</style>
