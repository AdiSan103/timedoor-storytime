<script setup>
const { $toast } = useNuxtApp();

nextTick(() => {
 if (process.client) {
  $toast('notify after nextTick');
 }
});

const notify = () => {
 $toast.info('toastify success');
 // or
 // toast.info('toastify success');
};
</script>

<template>
 <div class="container py-10">
  <h1>TEST PAGE</h1>
  <button class="btn btn-primary" @click="notify">notify by click</button>
 </div>
</template>