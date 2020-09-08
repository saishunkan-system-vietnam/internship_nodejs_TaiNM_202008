<template>
  <div :style="{color:textcolor}">
      {{tname}}
  </div>
</template>

<script>
export default {
    name:"tthai",
    props:{
        tname:{
            type:String,
            required:true
        },
        textcolor:{
            type:String,
            required:true
        }
    }
}
</script>

<style>

</style>