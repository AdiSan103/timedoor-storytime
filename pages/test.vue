<script setup>
const { $toast } = useNuxtApp();
// const { $toast,$bModal } = useNuxtApp();


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
// const handleClick = () => {
//  $bModal.show('exampleModal');
// }
</script>

<template>
 <div class="container py-10">
  <h1>TEST PAGE</h1>
  <button class="btn btn-primary" @click="notify">notify by click</button>
  <!--  -->
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
   Launch demo modal
  </button>

  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
   <div class="modal-dialog">
    <div class="modal-content">
     <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
     </div>
     <div class="modal-body">
      ...
     </div>
     <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary">Save changes</button>
     </div>
    </div>
   </div>
  </div>
 </div>
</template>