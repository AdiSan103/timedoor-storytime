<template>
 <div class="breadcumb">
   <div class="container">Home <span>/</span> All Story</div>
 </div>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";

.breadcumb {
 background-color: $color2;
 width: 100%;
 margin-bottom:40px;
 padding: 5px 0;

 .container {
   padding: 20px 10px;
   font-family: DM Sans;
   font-weight: 500;
   font-size: 20px;
   letter-spacing: 0%;

   span {
     margin: 0 20px;
     color: $color3;
   }
 }
}
</style>
