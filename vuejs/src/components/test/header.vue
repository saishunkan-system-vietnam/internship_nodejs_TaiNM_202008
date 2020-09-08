<template>
  <div>
      <div id="header">
            <div class="head1">Giao diện chính / Quản Lý Đơn Hàng / Kế Toán Doanh Thu</div>
            <div class="head2"><img :src="anhthe.src" :alt="anhthe.name"></div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name:"he1",
    data(){
        return{
            i:require('@/assets/a1.jpg')
        }
    },
    computed:{
        ...mapGetters(['anhthe']),
    }
}
</script>

<style scoped>
    #header{
        display: grid;
        grid-template-columns: auto 100px;
        margin-bottom: 10px;
    }
   .head1{
    margin-left: 45px;
    margin-top: 8px;
    font-size: 17px;
    font-weight: bold;
   }
   .head2{
   }
   .head2 img{
       width: 50px;
       height: 50px;
   }
   @media(max-width: 576px){
   .head1{
   font-size: 8px;
   }
   }
</style>