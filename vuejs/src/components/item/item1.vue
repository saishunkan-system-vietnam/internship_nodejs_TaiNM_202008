<template>
  <div class="item1">
      <img :src="src" alt="" class="src">
      <h5 class="name">{{name}}</h5>
      <div class="gia">{{format(gia)}}</div>
  </div>
</template>

<script>
export default {
props:{
    src:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true,
    },
    gia:{
        type:Number,
        required:true
    }

},
methods:{
    format(number){
                return (new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number));

            },
}
}
</script>

<style scoped>
.src{
    width: 100%;
    
}
img{
}
.name{
}
.gia{
    font-weight: bold;
}
.item1{
    cursor: pointer;
    text-align: center;
    padding-bottom: 10px;
    padding-top: 10px;
}

@media(max-width: 768px){
    /* .src{
        width: 300px;
    } */
}
</style>