<template>
  <div class="banner">
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
     <div class="carousel-inner">
       <div class="carousel-item" :class="{active:i.Isactive}" v-for="i in slide" :key="i.name">
       <img class="d-block w-100" :src="i.name" alt="First slide">
      </div>
     </div>
     <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
     </a>
     <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
     <span class="carousel-control-next-icon" aria-hidden="true"></span>
     <span class="sr-only">Next</span>
     </a>
        </div>
        
  </div>
</template>

<script>
export default {
    data(){
        return{
            slide:[
                {name:require('@/assets/b1.jpg'),Isactive:1},
                {name:require('@/assets/b2.jpg'),Isactive:0},
                {name:require('@/assets/b3.jpg'),Isactive:0},
                {name:require('@/assets/4.jpg'),Isactive:0},
            ],
        }
    }
}
</script>

<style scoped>
    .banner{
        margin-bottom: 30px;
    }
</style>