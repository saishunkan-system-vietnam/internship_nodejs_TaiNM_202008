<template>
  <span>
      {{formatnum}}
  </span>
</template>

<script>
export default {
    name:"formatnumber",
    props:{
        num:""
    },
    computed:{
        formatnum(){
            
            return new Intl.NumberFormat('ja-JP').format(this.num.toString().split(',').join(''))
        }
    }
}
</script>

<style>

</style>