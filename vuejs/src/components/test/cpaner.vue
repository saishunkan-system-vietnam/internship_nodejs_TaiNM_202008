<template>
  <div id="demo9" :class="{demo91:a}">
    <div id="left" :class="{demo92:a}">
      <div id="l1">
        <div></div>
        <div id="l11" v-show="d">
          <div class="l121">
            <i class="fas fa-tachometer-alt"></i> Giao diện chính
          </div>
          <div class="l121" data-toggle="collapse" href="#l111">
            <i class="fas fa-clipboard"></i> Quản Lý
            Đơn Hàng
          </div>
          <div id="l111" class="collapse" data-parent="#l11">
            <div class="l111" :class="{actived:t=='dh'}" @click="isActive=1">
              <i class="fas fa-list"></i>
              <router-link to="/cpaner1/dh">Danh sách sản phẩm</router-link>
            </div>
            <div class="l111" :class="{actived:t=='add'}" @click="isActive=2">
              <i class="fas fa-folder-plus"></i> 
              <router-link to="/cpaner1/add">Thêm sản phẩm</router-link>
            </div>
            <div class="l111" :class="{actived:isActive==3}" @click="isActive=3">
              <i class="fas fa-clipboard-list"></i> Đơn Hàng
            </div>
            <div class="l111" :class="{actived:isActive==4}" @click="isActive=4">
              <i class="fas fa-dollar-sign"></i> Kế Toán Doanh Thu
            </div>
          </div>
          <div class="l121" data-toggle="collapse" href="#l112">
            <i class="fas fa-list"></i> Kho Hàng
          </div>
          <div id="l112" class="collapse" data-parent="#l11">
            <div class="l111">
              <i class="fas fa-paper-plane"></i>
              <router-link to="/cpaner1/hang">Trạng Thái</router-link>
            </div>
            <div class="l111">1</div>
            <div class="l111">1</div>
            <div class="l111">1</div>
          </div>
          <div class="l121" data-toggle="collapse" href="#l113">
            <i class="fas fa-user"></i> Khách Hàng
          </div>
          <div id="l113" class="collapse" data-parent="#l11">
            <div class="l111">1</div>
            <div class="l111">1</div>
            <div class="l111">1</div>
            <div class="l111">1</div>
          </div>
          <div class="l121" data-toggle="collapse" href="#l114">
            <i class="fas fa-receipt"></i> Quản lý Xe
          </div>
          <div id="l114" class="collapse" data-parent="#l11">
            <div class="l111">1</div>
            <div class="l111">1</div>
            <div class="l111">1</div>
            <div class="l111">1</div>
          </div>
          <div class="l121" data-toggle="collapse" href="#l115">
            <i class="fas fa-dollar-sign"></i> Quản Lý
            Chi Thu
          </div>
          <div id="l115" class="collapse" data-parent="#l11">
            <div class="l111">1</div>
            <div class="l111">1</div>
            <div class="l111">1</div>
            <div class="l111">1</div>
          </div>
          <div class="l121" data-toggle="collapse" href="#l116">
            <i class="fas fa-cog"></i> Quản Trị
          </div>
          <div id="l116" class="collapse" data-parent="#l11">
            <div class="l111">
              <i class="fas fa-user-circle"></i>
              <router-link to="/cpaner1/avatar">Change Avatar</router-link>
            </div>
            <div class="l111">1</div>
            <div class="l111">1</div>
            <div class="l111">1</div>
          </div>
        </div>

        <div id="l12" v-show="!d">
          <div class="l121">
            <i class="fas fa-tachometer-alt"></i>
          </div>
          <div class="dropdown dropright l121">
            <div class="dropdown-toggle" data-toggle="dropdown">
              <i class="fas fa-clipboard"></i>
            </div>
            <div class="dropdown-menu">
              <router-link tag="a" class="dropdown-item" to="/cpaner1/dh">
                <i class="fas fa-list"></i> Danh sách sản phẩm
              </router-link>
              <router-link tag="a" class="dropdown-item" to="/cpaner1/add">
                <i class="fas fa-dollar-sign"></i> Thêm sản phẩm
              </router-link>
              <a class="dropdown-item" href="#">
                <i class="fas fa-paper-plane"></i> Đơn Hàng
              </a>
              <a class="dropdown-item" href="#">
                <i class="fas fa-list"></i> Kế Toán Doanh Thu
              </a>
            </div>
          </div>
          <div class="dropdown dropright l121">
            <div class="dropdown-toggle" data-toggle="dropdown">
              <i class="fas fa-list"></i>
            </div>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Tablet2</a>
              <a class="dropdown-item" href="#">Smartphone2</a>
            </div>
          </div>
          <div class="dropdown dropright l121">
            <div class="dropdown-toggle" data-toggle="dropdown">
              <i class="fas fa-user"></i>
            </div>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Tablet3</a>
              <a class="dropdown-item" href="#">Smartphone3</a>
            </div>
          </div>
          <div class="dropdown dropright l121">
            <div class="dropdown-toggle" data-toggle="dropdown">
              <i class="fas fa-receipt"></i>
            </div>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Tablet3</a>
              <a class="dropdown-item" href="#">Smartphone3</a>
            </div>
          </div>
          <div class="dropdown dropright l121">
            <div class="dropdown-toggle" data-toggle="dropdown">
              <i class="fas fa-dollar-sign"></i>
            </div>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Tablet3</a>
              <a class="dropdown-item" href="#">Smartphone3</a>
            </div>
          </div>
          <div class="dropdown dropright l121">
            <div class="dropdown-toggle" data-toggle="dropdown">
              <i class="fas fa-cog"></i>
            </div>
            <div class="dropdown-menu">
              <router-link tag="a" class="dropdown-item" to="/cpaner1/avatar">
                <i class="fas fa-user-circle"></i> Change Avatar
              </router-link>
              <a class="dropdown-item" href="#">Smartphone3</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="right">
      <button type="button" class="btn btn-primary a" @click="show()">
        <b>-</b>
      </button>
      <he1></he1>
      <hr>
      <transition name="test" appear mode="out-in">
        <router-view />
      </transition>
    </div>
    <div id="up" @click="upp"><i class="fas fa-arrow-up"></i></div>
  </div>
</template>

<script>
import he1 from './header'
export default {
  data() {
    return {
      d: true,
      a: false,
      isActive:0,
      t:this.$route.path.substr(9)
    }

  },
  methods: {
    show() {
      this.a = !this.a;
      this.d = !this.d
    },
    upp(){
     window.scrollTo(0, 0);
    }
  },
  watch:{
    '$route'(to,from){
      this.t=this.$route.path.substr(9)
    }
  },
  components: {
    he1
  }
}
</script>

<style scoped>
.row {
}
#up{
  position: fixed;
  bottom: 10px;
  right: 10px;
  background: fuchsia;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
}
#demo9 {
  display: grid;
  grid-template-columns: 17% 81%;
  grid-column-gap: 1%;
  background-color: #ffffff;
}
.demo91 {
  grid-template-columns: 3% 95% !important;
}

#left {
  background-color: #304156;
  min-height: 633px;
  height: 100%;
  color: #ffffff;
  font-weight: bold;
}
#left div {
  cursor: pointer;
}

#l1 {
  display: grid;
  grid-template-columns: 0% 100%;
}
#l11 {
  padding-left: 12px;
}
#l11 i {
  margin-right: 4px;
}
#l12 i {
  margin-left: 3px;
}
#l12 .l121 {
  text-align: center;
}
.l111 {
  padding-bottom: 20px;
  padding-top: 23px;
  padding-left: 30px;
}
.l121 {
  margin-bottom: 20px;
  margin-top: 25px;
}
#l111,
#l112,
#l113,
#l114,
#l115,
#l116 {
  background: #1f2d3d;
  margin-left: -12px;
}
.dropdown-menu {
  background: #1f2d3d;
}
.dropdown-toggle::after {
  display: none !important;
}
a,.l111 {
  color: #bfcbd9;
}
.l111:hover,a:hover{
  text-decoration: none;
  color: #ffffff;
}
.a {
  position: fixed;
  z-index: 3;
}
.test-enter-active {
  animation: testt .5s reverse;
}
.test-leave-active {
  animation: testt .5s ;
}
.actived,.actived a{
  color: #3b73a4 !important;
}
@keyframes testt {
  0%{
    transform: translateX(0);
    opacity: 1;
  }
  100%{
    transform: translateX(100px);
    opacity: 0;
  }
}
@media (max-width: 1200px) {
  #demo9 {
    display: block;
  }
  #left {
    display: none;
    padding-top: 45px;
    width: 50%;
    position: fixed;
    z-index: 1;
  }
  .demo92 {
    display: block !important;
  }
  #l11 {
    display: block !important;
  }
  #l12 {
    display: none !important;
  }
}
</style>