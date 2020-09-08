<template>
  <div>
    <div class="header">
      <nav class="navbar navbar-expand-lg navbar-light he-2">
        <a class="navbar-brand" href="#">
          <div class="he-21">
            <img :src="srclogo" alt width="35px" />
          </div>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div id="al" v-if="sl>0">{{sl}}</div>
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto he-22">
            <li class="nav-item" v-for="i in menu" v-bind:key="i.id">
              <router-link tag="a" class="nav-link" :to="i.link">{{i.item}}</router-link>
            </li>
          </ul>
          <div class="input-group">
            <input type="text" @keyup.13="tim" v-model="Search" class="form-control" placeholder="Search" />
            <button class="btn btn-success" @click="tim">Search</button>
          </div>
          <div class="form-inline my-2 my-lg-0">
            <button
              style="margin-right:10px"
              type="button"
              class="btn"
              data-toggle="modal"
              data-target="#myModal"
            >
              <i class="fas fa-shopping-cart"></i>
              <span v-if="sl!=0">{{sl}}</span>
            </button>

            <router-link tag="div" class="he-23" to="/login">Login</router-link>
          </div>
          <div class="modal fade" id="myModal">
            <div class="modal-dialog">
              <div class="modal-content">
                <!-- Modal Header -->
                <div class="modal-header">
                  <h5>Giỏ hàng của bạn</h5>
                  <button type="button" class="close" data-dismiss="modal">×</button>
                </div>

                <!-- Modal body -->
                <div class="modal-body">
                  <table v-if="sl != 0">
                    <tr>
                      <th>Ảnh</th>
                      <th>Tên Sản Phẩm</th>
                      <th>Giá Tiền</th>
                      <th colspan="3">Số Lượng</th>
                    </tr>
                    <tr v-for="(i,index) in listmua" :key="index">
                      <td style="text-align: center;">
                        <img :src="i.src" alt srcset width="40px" />
                      </td>
                      <td>{{i.name}}</td>
                      <td><formatnumber :num="i.gia"></formatnumber>đ</td>
                      <td style="text-align: center;width: 25px;cursor: pointer;" @click="down(i)">-</td>
                      <td style="text-align: center;">{{i.slItem}}</td>
                      <td style="text-align: center;width: 25px;cursor: pointer;" @click="up(i)">+</td>
                    </tr>
                    <tr>
                      <td colspan="6">
                        <h5 style="color:green">
                          Tổng Tiền:
                          <formatnumber :num="tong"></formatnumber>đ
                        </h5>
                      </td>
                    </tr>
                  </table>
                  <div v-else style="color:red">Không có sản phẩm nào trong giỏ</div>
                </div>

                <!-- Modal footer -->
                <div class="modal-footer">
                  <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import formatnumber from './formatnumber'
export default {
  name: "cheader",
  data() {
    return {
      Search:"",
      srcbaner: require('@/assets/banner.png'),
      srclogo: require('@/assets/logo.png'),

    }
  },
  computed: {
    ...mapGetters(['menu', 'listmua', 'sl']),
    tong() {
      var t = 0
      for (var i of this.listmua) {
        t += i.gia*i.slItem
      }

      return t
    }
  },
  methods:{
      tim(){
          this.$router.push('/tim/' + this.Search)
          this.Search = ""
      },
      up(item){
        var x = confirm("Bạn có chắc mua "+item.name+ " ?")
        if(x)
        item.slItem++
      },
      down(item){
        var x = confirm("Bạn có chắc mua "+item.name+ " ?")
        if(x)
        item.slItem >= 1 ? item.slItem-- : item.slItem=0
      }
  },
  components: {
    formatnumber
  }
}
</script>

<style scoped>
.carousel {
  margin-bottom: 30px;
}
.header {
  width: 100% !important;
}
.navbar-toggler{
  position: relative;
  outline: none;
}
.navbar-toggler #al{
  border-radius: 50%;
  background: red;
  color: #fff;
  width: 20px;
  height: 20px;
  position: absolute;
  top:-10px;
  right: -10px;
}
.header .he-1 {
  width: 100% !important;
  height: 43px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
}

.header .he-2 {
  display: flex;
  align-items: center;
}

.header .he-2 .he-21 {
  display: inline-flex;
}

.header .he-2 .he-21 .he-211 {
  font-weight: bolder;
  font-size: 35px;
}

.header .he-2 .he-21 .he-212 {
  width: 15px;
  height: 42px;
  position: relative;
}

.header .he-2 .he-21 .he-212 .he-2121 {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  bottom: 0;
  right: 0;
}

.header .he-2 .he-22 {
  text-align: left;
  padding-right: 10px;
  margin-right: 10px;
}

.header .he-2 .he-22 li a {
  font-weight: 500;
  color: #000;
}

.header .he-2 .he-23 {
  cursor: pointer;
  padding-left: 10px;
  border-left: solid 1px #000;
}

.he-3 {
  height: 175px;
  background-color: #f1593b;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
}

.he-3 .he-31 .he-311 {
  font-size: 30px;
  font-weight: bold;
  text-align: center;
}

.he-3 .he-31 .he-312 {
  font-size: 16px;
}
.fo-4 {
  margin-top: 90px;
  margin-left: 0 !important;
  margin-right: 0 !important;
}

.fo-4 img {
  padding: 0;
}
tr,
td,
th {
  border: solid 0.5px #757272;
  padding: 5px;
}
table {
  width: 100%;
}
.input-group{
    width: auto;
}
</style>