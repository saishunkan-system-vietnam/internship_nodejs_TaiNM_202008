<template>
  <div>
    <div v-if="typeof item != 'undefined'">
      <h5>
        <router-link to="/">Home</router-link>/
        <router-link to="/phone">Điện Thoại</router-link>
        /{{ item.name }}
      </h5>
      <div class="container">
        <h1 style="margin-bottom:25px">{{ item.name }}</h1>
        <div class="row">
          <div class="col-md-6 row">
            <div class="col-md-6">
              <div @mousemove="zoom" class="zoom-parent">
                <img id="image" :src="csrc" alt />
                <div id="zoom" v-show="isActive"></div>
                <div id="re" v-show="isActive"></div>
              </div>
              {{isActive}}
              <div class="row swiper">
                <!-- <div class="col-3 item" v-for="i in item.src" :key="i" @click="src=i" :class="{active:csrc==i}"><img :src="i" alt /></div> -->
                <div class="col-4 item" v-for="i in 3" :key="i" @click="src=item.src[i+t]" :class="{active:csrc==item.src[i+t]}"><img :src="item.src[i+t]" alt=""></div>
                <a @click="left" class="btn btn-light l" :class="{disabled:t<=-1}">&lt;</a>
                <a @click="right" class="btn btn-light r" :class="{disabled:t>=item.src.length-4}">&gt;</a>
              </div>
            </div>
            <div class="col-md-6">
              <h4 style="text-align: center;">{{ format(item.gia) }}</h4>
              <button type="button" class="btn btn-block" style="background: #ff0000;color:#fff">MUA NGAY</button>
              <button @click="buyitem(item)" type="button" class="btn btn-block btn-outline-danger" style="margin-bottom:10px">Thêm Giỏ Hàng</button>
              <div class="mau">
              <div v-mau="'red'"></div>
              <div v-mau="'black'"></div>
              <div v-mau="'pink'"></div>
            </div>
            </div>
          </div>
          <div class="col-md-6">
            <table>
              <tr>
                <th>Thông tin màn hình:</th>
                <td>{{ item.ttmh }}</td>
              </tr>
              <tr>
                <th>CPU:</th>
                <td>{{ item.cpu }}</td>
              </tr>
              <tr>
                <th>RAM:</th>
                <td>{{ item.ram }}</td>
              </tr>
              <tr>
                <th>Camera sau:</th>
                <td>{{ item.cs }}</td>
              </tr>
              <tr>
                <th>Camera trước:</th>
                <td>{{ item.ct }}</td>
              </tr>
              <tr>
                <th>Bộ nhớ trong:</th>
                <td>{{ item.bnt }}</td>
              </tr>
              <tr>
                <th>Thẻ nhớ ngoài:</th>
                <td>{{ item.sd }}</td>
              </tr>
              <tr>
                <th>Dung lượng pin:</th>
                <td>{{ item.pin }}</td>
              </tr>
              <tr>
                <th>Hệ điều hành:</th>
                <td>{{ item.hdh }}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h1>Sản phẩm không tồn tại</h1>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  data() {
    return {
      listitem: [
        { id: 1, src: [require("@/assets/1.jpg"),require("@/assets/5.jpg"),require("@/assets/6.jpg"),require("@/assets/7.jpg")], name: "spAPPLE1", gia: 1000000000 ,ttmh: "AMOLED",cpu: "Snapdragon 865",ram: "8 GB",cs: "64MP+13MP+16MP",ct: "20MP",bnt: "128 GB",sd: "Không",pin: "4.720 mAh",hdh: "Android 10",slItem:10},
        { id: 2, src: [require("@/assets/1.jpg"),require("@/assets/5.jpg"),require("@/assets/6.jpg"),require("@/assets/7.jpg")], name: "spAPPLE2", gia: 100 ,ttmh: "AMOLED",cpu: "Snapdragon 865",ram: "8 GB",cs: "64MP+13MP+16MP",ct: "20MP",bnt: "128 GB",sd: "Không",pin: "4.720 mAh",hdh: "Android 10",slItem:10},
        { id: 3, src: [require("@/assets/1.jpg"),require("@/assets/5.jpg"),require("@/assets/6.jpg"),require("@/assets/7.jpg")], name: "spAPPLE3", gia: 100 ,ttmh: "AMOLED",cpu: "Snapdragon 865",ram: "8 GB",cs: "64MP+13MP+16MP",ct: "20MP",bnt: "128 GB",sd: "Không",pin: "4.720 mAh",hdh: "Android 10",slItem:10},
        { id: 4, src: [require("@/assets/1.jpg"),require("@/assets/5.jpg"),require("@/assets/6.jpg"),require("@/assets/7.jpg")], name: "spAPPLE4", gia: 100 ,ttmh: "AMOLED",cpu: "Snapdragon 865",ram: "8 GB",cs: "64MP+13MP+16MP",ct: "20MP",bnt: "128 GB",sd: "Không",pin: "4.720 mAh",hdh: "Android 10",slItem:10},
        { id: 5, src: [require("@/assets/1.jpg"),require("@/assets/5.jpg"),require("@/assets/6.jpg"),require("@/assets/7.jpg")], name: "spAPPLE5", gia: 100 ,ttmh: "AMOLED",cpu: "Snapdragon 865",ram: "8 GB",cs: "64MP+13MP+16MP",ct: "20MP",bnt: "128 GB",sd: "Không",pin: "4.720 mAh",hdh: "Android 10",slItem:10},
        { id: 6, src: [require("@/assets/1.jpg"),require("@/assets/5.jpg"),require("@/assets/6.jpg"),require("@/assets/7.jpg")], name: "spAPPLE6", gia: 100 ,ttmh: "AMOLED",cpu: "Snapdragon 865",ram: "8 GB",cs: "64MP+13MP+16MP",ct: "20MP",bnt: "128 GB",sd: "Không",pin: "4.720 mAh",hdh: "Android 10",slItem:10},
        { id: 7, src: [require("@/assets/1.jpg"),require("@/assets/5.jpg"),require("@/assets/6.jpg"),require("@/assets/7.jpg")], name: "spAPPLE7", gia: 100 ,ttmh: "AMOLED",cpu: "Snapdragon 865",ram: "8 GB",cs: "64MP+13MP+16MP",ct: "20MP",bnt: "128 GB",sd: "Không",pin: "4.720 mAh",hdh: "Android 10",slItem:10},
        { id: 8, src: [require("@/assets/1.jpg"),require("@/assets/5.jpg"),require("@/assets/6.jpg"),require("@/assets/7.jpg")], name: "spAPPLE8", gia: 100 ,ttmh: "AMOLED",cpu: "Snapdragon 865",ram: "8 GB",cs: "64MP+13MP+16MP",ct: "20MP",bnt: "128 GB",sd: "Không",pin: "4.720 mAh",hdh: "Android 10",slItem:10},
        { id: 9, src: [require("@/assets/1.jpg"),require("@/assets/5.jpg"),require("@/assets/6.jpg"),require("@/assets/7.jpg")], name: "spAPPLE9", gia: 100 ,ttmh: "AMOLED",cpu: "Snapdragon 865",ram: "8 GB",cs: "64MP+13MP+16MP",ct: "20MP",bnt: "128 GB",sd: "Không",pin: "4.720 mAh",hdh: "Android 10",slItem:10},
        { id: 10, src: [require("@/assets/1.jpg"),require("@/assets/5.jpg"),require("@/assets/6.jpg"),require("@/assets/7.jpg")], name: "spAPPLE10", gia: 100 ,ttmh: "AMOLED",cpu: "Snapdragon 865",ram: "8 GB",cs: "64MP+13MP+16MP",ct: "20MP",bnt: "128 GB",sd: "Không",pin: "4.720 mAh",hdh: "Android 10",slItem:10},
        { id: 11, src: [require("@/assets/1.jpg"),require("@/assets/5.jpg"),require("@/assets/6.jpg"),require("@/assets/7.jpg")], name: "spAPPLE11", gia: 100 ,ttmh: "AMOLED",cpu: "Snapdragon 865",ram: "8 GB",cs: "64MP+13MP+16MP",ct: "20MP",bnt: "128 GB",sd: "Không",pin: "4.720 mAh",hdh: "Android 10",slItem:10},
        { id: 12, src: [require("@/assets/1.jpg"),require("@/assets/5.jpg"),require("@/assets/6.jpg"),require("@/assets/7.jpg")], name: "spAPPLE12", gia: 100 ,ttmh: "AMOLED",cpu: "Snapdragon 865",ram: "8 GB",cs: "64MP+13MP+16MP",ct: "20MP",bnt: "128 GB",sd: "Không",pin: "4.720 mAh",hdh: "Android 10",slItem:10},
        {
          id: 13,
          src: [require("@/assets/1.jpg"),require("@/assets/5.jpg"),require("@/assets/6.jpg"),require("@/assets/7.jpg")],
          name: "spSAMSUNG1",
          gia: 100,ttmh: "AMOLED",cpu: "Snapdragon 865",ram: "8 GB",cs: "64MP+13MP+16MP",ct: "20MP",bnt: "128 GB",sd: "Không",pin: "4.720 mAh",hdh: "Android 10",slItem:10
        },
        {
          id: 14,
          src: [require("@/assets/1.jpg"),require("@/assets/5.jpg"),require("@/assets/6.jpg"),require("@/assets/7.jpg")],
          name: "spSAMSUNG2",
          gia: 100,ttmh: "AMOLED",cpu: "Snapdragon 865",ram: "8 GB",cs: "64MP+13MP+16MP",ct: "20MP",bnt: "128 GB",sd: "Không",pin: "4.720 mAh",hdh: "Android 10",slItem:10
        },
        {
          id: 15,
          src: [require("@/assets/1.jpg"),require("@/assets/5.jpg"),require("@/assets/6.jpg"),require("@/assets/7.jpg")],
          name: "spSAMSUNG3",
          gia: 100,ttmh: "AMOLED",cpu: "Snapdragon 865",ram: "8 GB",cs: "64MP+13MP+16MP",ct: "20MP",bnt: "128 GB",sd: "Không",pin: "4.720 mAh",hdh: "Android 10",slItem:10
        },
        {
          id: 16,
          src: [require("@/assets/1.jpg"),require("@/assets/5.jpg"),require("@/assets/6.jpg"),require("@/assets/7.jpg")],
          name: "spSAMSUNG4",
          gia: 100,ttmh: "AMOLED",cpu: "Snapdragon 865",ram: "8 GB",cs: "64MP+13MP+16MP",ct: "20MP",bnt: "128 GB",sd: "Không",pin: "4.720 mAh",hdh: "Android 10",slItem:10
        },
        {
          id: 17,
          src: [require("@/assets/1.jpg"),require("@/assets/5.jpg"),require("@/assets/6.jpg"),require("@/assets/7.jpg")],
          name: "spSAMSUNG5",
          gia: 100,ttmh: "AMOLED",cpu: "Snapdragon 865",ram: "8 GB",cs: "64MP+13MP+16MP",ct: "20MP",bnt: "128 GB",sd: "Không",pin: "4.720 mAh",hdh: "Android 10",slItem:10
        },
        {
          id: 18,
          src: [require("@/assets/1.jpg"),require("@/assets/5.jpg"),require("@/assets/6.jpg"),require("@/assets/7.jpg")],
          name: "spSAMSUNG6",
          gia: 100,ttmh: "AMOLED",cpu: "Snapdragon 865",ram: "8 GB",cs: "64MP+13MP+16MP",ct: "20MP",bnt: "128 GB",sd: "Không",pin: "4.720 mAh",hdh: "Android 10",slItem:10
        },
        {
          id: 19,
          src: [require("@/assets/1.jpg"),require("@/assets/5.jpg"),require("@/assets/6.jpg"),require("@/assets/7.jpg")],
          name: "spSAMSUNG7",
          gia: 100,ttmh: "AMOLED",cpu: "Snapdragon 865",ram: "8 GB",cs: "64MP+13MP+16MP",ct: "20MP",bnt: "128 GB",sd: "Không",pin: "4.720 mAh",hdh: "Android 10",slItem:10
        },
        {
          id: 20,
          src: [require("@/assets/1.jpg"),require("@/assets/5.jpg"),require("@/assets/6.jpg"),require("@/assets/7.jpg")],
          name: "spSAMSUNG8",
          gia: 100,ttmh: "AMOLED",cpu: "Snapdragon 865",ram: "8 GB",cs: "64MP+13MP+16MP",ct: "20MP",bnt: "128 GB",sd: "Không",pin: "4.720 mAh",hdh: "Android 10",slItem:10
        },
        {
          id: 21,
          src: [require("@/assets/1.jpg"),require("@/assets/5.jpg"),require("@/assets/6.jpg"),require("@/assets/7.jpg")],
          name: "spSAMSUNG9",
          gia: 100,ttmh: "AMOLED",cpu: "Snapdragon 865",ram: "8 GB",cs: "64MP+13MP+16MP",ct: "20MP",bnt: "128 GB",sd: "Không",pin: "4.720 mAh",hdh: "Android 10",slItem:10
        },
        {
          id: 22,
          src: [require("@/assets/1.jpg"),require("@/assets/5.jpg"),require("@/assets/6.jpg"),require("@/assets/7.jpg")],
          name: "spSAMSUNG10",
          gia: 100,ttmh: "AMOLED",cpu: "Snapdragon 865",ram: "8 GB",cs: "64MP+13MP+16MP",ct: "20MP",bnt: "128 GB",sd: "Không",pin: "4.720 mAh",hdh: "Android 10",slItem:10
        },
        {
          id: 23,
          src: [require("@/assets/1.jpg"),require("@/assets/5.jpg"),require("@/assets/6.jpg"),require("@/assets/7.jpg")],
          name: "spSAMSUNG11",
          gia: 100,ttmh: "AMOLED",cpu: "Snapdragon 865",ram: "8 GB",cs: "64MP+13MP+16MP",ct: "20MP",bnt: "128 GB",sd: "Không",pin: "4.720 mAh",hdh: "Android 10",slItem:10
        },
        {
          id: 24,
          src: [require("@/assets/1.jpg"),require("@/assets/5.jpg"),require("@/assets/6.jpg"),require("@/assets/7.jpg")],
          name: "spSAMSUNG12",
          gia: 100,ttmh: "AMOLED",cpu: "Snapdragon 865",ram: "8 GB",cs: "64MP+13MP+16MP",ct: "20MP",bnt: "128 GB",sd: "Không",pin: "4.720 mAh",hdh: "Android 10",slItem:10
        },
        { id: 25, src: [require("@/assets/1.jpg"),require("@/assets/5.jpg"),require("@/assets/6.jpg"),require("@/assets/7.jpg")], name: "spLG1", gia: 100 ,ttmh: "AMOLED",cpu: "Snapdragon 865",ram: "8 GB",cs: "64MP+13MP+16MP",ct: "20MP",bnt: "128 GB",sd: "Không",pin: "4.720 mAh",hdh: "Android 10",slItem:10},
        { id: 26, src: [require("@/assets/1.jpg"),require("@/assets/5.jpg"),require("@/assets/6.jpg"),require("@/assets/7.jpg")], name: "spLG2", gia: 100 ,ttmh: "AMOLED",cpu: "Snapdragon 865",ram: "8 GB",cs: "64MP+13MP+16MP",ct: "20MP",bnt: "128 GB",sd: "Không",pin: "4.720 mAh",hdh: "Android 10",slItem:10},
        { id: 27, src: [require("@/assets/1.jpg"),require("@/assets/5.jpg"),require("@/assets/6.jpg"),require("@/assets/7.jpg")], name: "spLG3", gia: 100 ,ttmh: "AMOLED",cpu: "Snapdragon 865",ram: "8 GB",cs: "64MP+13MP+16MP",ct: "20MP",bnt: "128 GB",sd: "Không",pin: "4.720 mAh",hdh: "Android 10",slItem:10},
        { id: 28, src: [require("@/assets/1.jpg"),require("@/assets/5.jpg"),require("@/assets/6.jpg"),require("@/assets/7.jpg")], name: "spLG4", gia: 100 ,ttmh: "AMOLED",cpu: "Snapdragon 865",ram: "8 GB",cs: "64MP+13MP+16MP",ct: "20MP",bnt: "128 GB",sd: "Không",pin: "4.720 mAh",hdh: "Android 10",slItem:10},
        { id: 29, src: [require("@/assets/1.jpg"),require("@/assets/5.jpg"),require("@/assets/6.jpg"),require("@/assets/7.jpg")], name: "spLG5", gia: 100 ,ttmh: "AMOLED",cpu: "Snapdragon 865",ram: "8 GB",cs: "64MP+13MP+16MP",ct: "20MP",bnt: "128 GB",sd: "Không",pin: "4.720 mAh",hdh: "Android 10",slItem:10},
        { id: 30, src: [require("@/assets/1.jpg"),require("@/assets/5.jpg"),require("@/assets/6.jpg"),require("@/assets/7.jpg")], name: "spLG6", gia: 100 ,ttmh: "AMOLED",cpu: "Snapdragon 865",ram: "8 GB",cs: "64MP+13MP+16MP",ct: "20MP",bnt: "128 GB",sd: "Không",pin: "4.720 mAh",hdh: "Android 10",slItem:10},
        { id: 31, src: [require("@/assets/1.jpg"),require("@/assets/5.jpg"),require("@/assets/6.jpg"),require("@/assets/7.jpg")], name: "spLG7", gia: 100 ,ttmh: "AMOLED",cpu: "Snapdragon 865",ram: "8 GB",cs: "64MP+13MP+16MP",ct: "20MP",bnt: "128 GB",sd: "Không",pin: "4.720 mAh",hdh: "Android 10",slItem:10},
        { id: 32, src: [require("@/assets/1.jpg"),require("@/assets/5.jpg"),require("@/assets/6.jpg"),require("@/assets/7.jpg")], name: "spLG8", gia: 100 ,ttmh: "AMOLED",cpu: "Snapdragon 865",ram: "8 GB",cs: "64MP+13MP+16MP",ct: "20MP",bnt: "128 GB",sd: "Không",pin: "4.720 mAh",hdh: "Android 10",slItem:10},
        { id: 33, src: [require("@/assets/1.jpg"),require("@/assets/5.jpg"),require("@/assets/6.jpg"),require("@/assets/7.jpg")], name: "spLG9", gia: 100 ,ttmh: "AMOLED",cpu: "Snapdragon 865",ram: "8 GB",cs: "64MP+13MP+16MP",ct: "20MP",bnt: "128 GB",sd: "Không",pin: "4.720 mAh",hdh: "Android 10",slItem:10},
        { id: 34, src: [require("@/assets/1.jpg"),require("@/assets/5.jpg"),require("@/assets/6.jpg"),require("@/assets/7.jpg")], name: "spLG10", gia: 100 ,ttmh: "AMOLED",cpu: "Snapdragon 865",ram: "8 GB",cs: "64MP+13MP+16MP",ct: "20MP",bnt: "128 GB",sd: "Không",pin: "4.720 mAh",hdh: "Android 10",slItem:10},
        { id: 35, src: [require("@/assets/1.jpg"),require("@/assets/5.jpg"),require("@/assets/6.jpg"),require("@/assets/7.jpg")], name: "spLG11", gia: 100 ,ttmh: "AMOLED",cpu: "Snapdragon 865",ram: "8 GB",cs: "64MP+13MP+16MP",ct: "20MP",bnt: "128 GB",sd: "Không",pin: "4.720 mAh",hdh: "Android 10",slItem:10},
        { id: 36, src: [require("@/assets/1.jpg"),require("@/assets/5.jpg"),require("@/assets/6.jpg"),require("@/assets/7.jpg")], name: "spLG12", gia: 100 ,ttmh: "AMOLED",cpu: "Snapdragon 865",ram: "8 GB",cs: "64MP+13MP+16MP",ct: "20MP",bnt: "128 GB",sd: "Không",pin: "4.720 mAh",hdh: "Android 10",slItem:10},
        { id: 37, src: [require("@/assets/1.jpg"),require("@/assets/5.jpg"),require("@/assets/6.jpg"),require("@/assets/7.jpg")], name: "spSONY1", gia: 100 ,ttmh: "AMOLED",cpu: "Snapdragon 865",ram: "8 GB",cs: "64MP+13MP+16MP",ct: "20MP",bnt: "128 GB",sd: "Không",pin: "4.720 mAh",hdh: "Android 10",slItem:10},
        { id: 38, src: [require("@/assets/1.jpg"),require("@/assets/5.jpg"),require("@/assets/6.jpg"),require("@/assets/7.jpg")], name: "spSONY2", gia: 100 ,ttmh: "AMOLED",cpu: "Snapdragon 865",ram: "8 GB",cs: "64MP+13MP+16MP",ct: "20MP",bnt: "128 GB",sd: "Không",pin: "4.720 mAh",hdh: "Android 10",slItem:10},
        { id: 39, src: [require("@/assets/1.jpg"),require("@/assets/5.jpg"),require("@/assets/6.jpg"),require("@/assets/7.jpg")], name: "spSONY3", gia: 100 ,ttmh: "AMOLED",cpu: "Snapdragon 865",ram: "8 GB",cs: "64MP+13MP+16MP",ct: "20MP",bnt: "128 GB",sd: "Không",pin: "4.720 mAh",hdh: "Android 10",slItem:10},
        { id: 40, src: [require("@/assets/1.jpg"),require("@/assets/5.jpg"),require("@/assets/6.jpg"),require("@/assets/7.jpg")], name: "spSONY4", gia: 100 ,ttmh: "AMOLED",cpu: "Snapdragon 865",ram: "8 GB",cs: "64MP+13MP+16MP",ct: "20MP",bnt: "128 GB",sd: "Không",pin: "4.720 mAh",hdh: "Android 10",slItem:10},
        { id: 41, src: [require("@/assets/1.jpg"),require("@/assets/5.jpg"),require("@/assets/6.jpg"),require("@/assets/7.jpg")], name: "spSONY5", gia: 100 ,ttmh: "AMOLED",cpu: "Snapdragon 865",ram: "8 GB",cs: "64MP+13MP+16MP",ct: "20MP",bnt: "128 GB",sd: "Không",pin: "4.720 mAh",hdh: "Android 10",slItem:10},
        { id: 42, src: [require("@/assets/1.jpg"),require("@/assets/5.jpg"),require("@/assets/6.jpg"),require("@/assets/7.jpg")], name: "spSONY6", gia: 100 ,ttmh: "AMOLED",cpu: "Snapdragon 865",ram: "8 GB",cs: "64MP+13MP+16MP",ct: "20MP",bnt: "128 GB",sd: "Không",pin: "4.720 mAh",hdh: "Android 10",slItem:10},
        { id: 43, src: [require("@/assets/1.jpg"),require("@/assets/5.jpg"),require("@/assets/6.jpg"),require("@/assets/7.jpg")], name: "spSONY7", gia: 100 ,ttmh: "AMOLED",cpu: "Snapdragon 865",ram: "8 GB",cs: "64MP+13MP+16MP",ct: "20MP",bnt: "128 GB",sd: "Không",pin: "4.720 mAh",hdh: "Android 10",slItem:10},
        { id: 44, src: [require("@/assets/1.jpg"),require("@/assets/5.jpg"),require("@/assets/6.jpg"),require("@/assets/7.jpg")], name: "spSONY8", gia: 100 ,ttmh: "AMOLED",cpu: "Snapdragon 865",ram: "8 GB",cs: "64MP+13MP+16MP",ct: "20MP",bnt: "128 GB",sd: "Không",pin: "4.720 mAh",hdh: "Android 10",slItem:10},
        { id: 45, src: [require("@/assets/1.jpg"),require("@/assets/5.jpg"),require("@/assets/6.jpg"),require("@/assets/7.jpg")], name: "spSONY9", gia: 100 ,ttmh: "AMOLED",cpu: "Snapdragon 865",ram: "8 GB",cs: "64MP+13MP+16MP",ct: "20MP",bnt: "128 GB",sd: "Không",pin: "4.720 mAh",hdh: "Android 10",slItem:10},
        { id: 46, src: [require("@/assets/1.jpg"),require("@/assets/5.jpg"),require("@/assets/6.jpg"),require("@/assets/7.jpg")], name: "spSONY10", gia: 100 ,ttmh: "AMOLED",cpu: "Snapdragon 865",ram: "8 GB",cs: "64MP+13MP+16MP",ct: "20MP",bnt: "128 GB",sd: "Không",pin: "4.720 mAh",hdh: "Android 10",slItem:10},
        { id: 47, src: [require("@/assets/1.jpg"),require("@/assets/5.jpg"),require("@/assets/6.jpg"),require("@/assets/7.jpg")], name: "spSONY11", gia: 100 ,ttmh: "AMOLED",cpu: "Snapdragon 865",ram: "8 GB",cs: "64MP+13MP+16MP",ct: "20MP",bnt: "128 GB",sd: "Không",pin: "4.720 mAh",hdh: "Android 10",slItem:10},
        { id: 48, src: [require("@/assets/1.jpg"),require("@/assets/5.jpg"),require("@/assets/6.jpg"),require("@/assets/7.jpg")], name: "spSONY12", gia: 100 ,ttmh: "AMOLED",cpu: "Snapdragon 865",ram: "8 GB",cs: "64MP+13MP+16MP",ct: "20MP",bnt: "128 GB",sd: "Không",pin: "4.720 mAh",hdh: "Android 10",slItem:10},
        { id: 49, src: [require("@/assets/1.jpg"),require("@/assets/5.jpg"),require("@/assets/6.jpg"),require("@/assets/7.jpg")], name: "sp1", gia: 1000000000000,ttmh: "AMOLED",cpu: "Snapdragon 865",ram: "8 GB",cs: "64MP+13MP+16MP",ct: "20MP",bnt: "128 GB",sd: "Không",pin: "4.720 mAh",hdh: "Android 10",slItem:10},
        { id: 50, src: [require("@/assets/1.jpg"),require("@/assets/5.jpg"),require("@/assets/6.jpg"),require("@/assets/7.jpg")], name: "sp2", gia: 100 ,ttmh: "AMOLED",cpu: "Snapdragon 865",ram: "8 GB",cs: "64MP+13MP+16MP",ct: "20MP",bnt: "128 GB",sd: "Không",pin: "4.720 mAh",hdh: "Android 10",slItem:10},
        { id: 51, src: [require("@/assets/1.jpg"),require("@/assets/5.jpg"),require("@/assets/6.jpg"),require("@/assets/7.jpg")], name: "sp3", gia: 100 ,ttmh: "AMOLED",cpu: "Snapdragon 865",ram: "8 GB",cs: "64MP+13MP+16MP",ct: "20MP",bnt: "128 GB",sd: "Không",pin: "4.720 mAh",hdh: "Android 10",slItem:10},
        { id: 52, src: [require("@/assets/1.jpg"),require("@/assets/5.jpg"),require("@/assets/6.jpg"),require("@/assets/7.jpg")], name: "sp4", gia: 100 ,ttmh: "AMOLED",cpu: "Snapdragon 865",ram: "8 GB",cs: "64MP+13MP+16MP",ct: "20MP",bnt: "128 GB",sd: "Không",pin: "4.720 mAh",hdh: "Android 10",slItem:10},
        { id: 53, src: [require("@/assets/1.jpg"),require("@/assets/5.jpg"),require("@/assets/6.jpg"),require("@/assets/7.jpg")], name: "sp5", gia: 100 ,ttmh: "AMOLED",cpu: "Snapdragon 865",ram: "8 GB",cs: "64MP+13MP+16MP",ct: "20MP",bnt: "128 GB",sd: "Không",pin: "4.720 mAh",hdh: "Android 10",slItem:10},
        { id: 54, src: [require("@/assets/1.jpg"),require("@/assets/5.jpg"),require("@/assets/6.jpg"),require("@/assets/7.jpg")], name: "sp6", gia: 100 ,ttmh: "AMOLED",cpu: "Snapdragon 865",ram: "8 GB",cs: "64MP+13MP+16MP",ct: "20MP",bnt: "128 GB",sd: "Không",pin: "4.720 mAh",hdh: "Android 10",slItem:10}
      ],
      id: this.$route.params.name,
      src:"",
      isActive:0,
      x:0,
      y:0,
      t:-1,
    };
  },
  computed: {
    item() {
      return this.listitem.find(s => {
        return s.id == this.id;
      });
    },
    csrc(){
        if(this.src=="")
        return this.item.src[0]
        return this.src
    }
    
  },
  directives:{
    "mau":{
      bind(el,bind,vnode){
        el.style.background=bind.value
        el.style.borderRadius = 50 + "%"
        el.style.width = 20 + "px"
        el.style.height = 20 + "px"
        el.style.marginRight = 8 + "px"
      }
    }
  },
  methods: {
    format(number) {
      return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "VND"
      }).format(number);
    },
    left(){
      this.t--
    },
    right(){
      this.t++
    },
    zoom(e){
      var z = document.getElementById('zoom')
      var r = document.getElementById('re')
      var i=document.getElementById('image')
      r.style.backgroundImage = "url('" + this.csrc + "')"
      this.x = e.pageX - 164
      this.y = e.pageY - 182
      zoom.style.top=this.y + "px"
      zoom.style.left=this.x + "px"
      console.log(this.x)
      console.log(this.y)
      r.style.backgroundSize = (i.width * 200/30) + "px " + (i.height * 200/30) + "px"
      r.style.backgroundPosition = (-this.x * 200/30)+"px"+" "+(-this.y * 200/30)+"px"
      if(this.x > 0 && this.y > 0 && this.x < i.width-30 && this.y < i.height-30)
      {
         this.isActive=1
      }
      else{
        this.isActive=0
      }
      
    },
    ...mapActions(['buyitem'])
  },
  watch: {
    $route() {
      this.id = this.$route.params.name;
    },
  }
};
</script>

<style scoped>
.row {
  margin: 0;
}
img {
  width: 100%;
}
h5 {
  font-size: 15px;
  margin-left: 10px;
}
table,
tr,
td,
th {
  border: solid 0.5px #b9b7b7;
}
table {
  width: 100%;
}
th,
td {
  padding: 10px;
}
.swiper{
  margin-top: 20px;
  position: relative;
}
.swiper a{
  position: absolute;
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 2;
}
.swiper .l{
  left: -40px;
}
.swiper .r{
  right: -40px;
}
.item{
  padding: 3px 1px 3px 1px ;
}
.active{
  border: solid 0.5px red;
}
.mau{
  display: flex;
}
.zoom-parent{
  position: relative;
}
#zoom{
  width: 30px;
  height: 30px;
  border: solid 1px red;
  position: absolute;
  top: 0;
  left: 0;
  
}
#re{
  width: 200px;
  height: 200px;
  border: solid 1px #000;
  position: absolute;
  top:0;
  left:300px;
  z-index: 2;
  background-repeat: no-repeat;
}
/* #zoom::before{
  content: "";
  height: 20px;
  width: 1px;
  position: absolute;
  left: 9.5px;
  background: #fff;
}
#zoom::after{
  content: "";
  height: 1px;
  width: 20px;
  position: absolute;
  top:9.5px;
  background: #fff;
} */
</style>
