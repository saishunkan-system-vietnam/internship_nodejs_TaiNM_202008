<template>
  <div >
      
      <div class="row">
          <button @click="test=!test" class="btn btn-primary"><b>-</b></button>
            <div class="col-xl-2 row" :class="{an:test}" id="left">
                <div id="left1">
                    <div class="col-12">Giao diện chính</div>
                <div id="accordion" class="col-12">
                    <div data-toggle="collapse" data-target="#collapse1">Quản lý sản phẩm</div>
                    <div id="collapse1" class="collapse" data-parent="#accordion">
                        <router-link
                        tag="div"
                        class="list"
                        to="/cpaner/ds">Danh sách sản phẩm</router-link>
                        <router-link
                        tag="div"
                        class="list"
                        to="/cpaner/add">Thêm sản phẩm</router-link>
                    </div>
                    <div data-toggle="collapse" data-target="#collapse2">Đơn hàng</div>
                    <div id="collapse2" class="collapse" data-parent="#accordion">
                        <div class="list">1</div>
                        <div class="list">1</div>
                        <div class="list">1</div>
                    </div>
                    <div data-toggle="collapse" data-target="#collapse4">Quản trị</div>
                    <div id="collapse4" class="collapse" data-parent="#accordion">
                        <div class="list">1</div>
                        <div class="list">1</div>
                        <div class="list">1</div>
                    </div>
                </div>
                </div>
            </div>
            <div class="col-xl-10 right">
                <transition name="slide">
                    <router-view/>
                </transition>
            </div>
      </div>
      {{username}}/{{password}}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data(){
        return{
            d:'none',
            test:0
        }
    },
    computed:{
        ...mapGetters(['username','password']),
        ol(){
            return navigator.onLine
        }
    },
    methods:{
        showmenu(){
            var left = document.getElementById('left');
            
            if(this.d == 'none')
            this.d = 'block';
            else
            this.d = 'none';
            left.style.display= this.d;
        }
    },
    beforeRouteEnter(to,from,next){
        if(1)
        next();
        else{
            alert('sai username hoặc password')
        }
    }
    
}

</script>
<style scoped>
    .row{
        margin-left: 0px;
        margin-right: 0px;
    }
    #left{
        background: #26294e;
        color: #ffffff;
        min-height: 633px;
        align-content: start;
        display: block;
        z-index: 1041;
    }
    #left div{
        cursor: pointer;
        padding: 3px 0  3px 0;
        z-index: 1042;
    }
    #left1{
        position: fixed;
        z-index: 1043;
    }
    .right{
        z-index: 1041;
    }
    .list{
        margin-left: 10px;
    }
    .btn-primary{
        display: none;
    }
    .an{
        display: block;
    }
    @media(max-width: 1200px){
        #left{
            position: fixed;
            z-index: 1044;
            opacity: 0.5;
        }
        #left1{
            margin-top: 40px;
        }
        .btn-primary{
            display: block !important;
            position: fixed;
            z-index: 1045;
        }
        .an{
        display: none !important;
    }
    }
    .slide-enter-active {
  transition: all .2s ease;
}
.slide-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-enter, .slide-leave-to{
  transform: translateX(10px);
  opacity: 0;
}
</style>
