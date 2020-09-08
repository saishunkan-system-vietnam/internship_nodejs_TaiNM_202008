<template>
  <div>
    <div class="input-group mb-3">
      <input type="text" style="margin-right:12px;border-radius: 4px;" class="form-control" @keyup.13="search" placeholder="ID sản phẩm" v-model="id"/>
      <input type="text" style="margin-right:12px;border-radius: 4px;" class="form-control" @keyup.13="search" placeholder="Tên sản phẩm" v-model="name"/>
      <input type="text" style="margin-right:12px;border-radius: 4px;" class="form-control" @keyup.13="search" placeholder="Giá sản phẩm" v-model="price"/>
      <input type="text" style="margin-right:12px;border-radius: 4px;" class="form-control" @keyup.13="search" placeholder="Hệ điều hành" v-model="hdh"/>
    </div>
    <div id="bang">
      <table>
        <tr>
          <th style="width:3%">ID</th>
          <th style="width:15%">Tên sản phẩm</th>
          <th style="width:7%">Giá</th>
          <th style="width:20%">Ảnh</th>
          <th style="width:5%">Thông tin màn hình</th>
          <th style="width:5%">CPU</th>
          <th style="width:5%">RAM</th>
          <th style="width:5%">Camera sau</th>
          <th style="width:5%">Camera trước</th>
          <th style="width:5%">Bộ nhớ trong</th>
          <th style="width:5%">Thẻ nhớ ngoài</th>
          <th style="width:5%">Dung lượng pin</th>
          <th style="width:5%">Hệ điều hành</th>
          <th colspan="2" style="width:10%"></th>
        </tr>
        <tr v-for="i in list1" :key="i.id">
          <td>{{i.id}}</td>
          <td>{{i.name}}</td>
          <td><formatnumber :num="i.gia"></formatnumber></td>
          <td style="text-align: center;"><img :src="i.src" alt="" width="100px"></td>
          <td>{{i.ttmh}}</td>
          <td>{{i.cpu}}</td>
          <td>{{i.ram}}</td>
          <td>{{i.cs}}</td>
          <td>{{i.ct}}</td>
          <td>{{i.bnt}}</td>
          <td>{{i.sd}}</td>
          <td>{{i.pin}}</td>
          <td>{{i.hdh}}</td>
          <td style="text-align: center;cursor: pointer;" @click="xoa(i.id)">Xóa</td>
          <td
            data-toggle="modal"
            data-target="#myModal"
            style="text-align: center;cursor: pointer;"
            @click="suaa(i)"
          >Sửa</td>
        </tr>
      </table>
    </div>
    <br />
    Tổng {{page}} 
    <select v-model="numberitem" style="margin-right:10px;margin-left:15px">
      <option>5</option>
      <option>10</option>
      <option>30</option>
      <option>50</option>
      <option>100</option>
      <option>500</option>
    </select>
    <div class="btn-group" v-for="i in page" :key="i">
      <button
        type="button"
        class="btn btn-primary"
        style="margin-right:10px"
        @click="pagenumber=i"
      >{{i}}</button>
    </div>Đến trang
    <input
      type="number"
      :max="page"
      min="1"
      v-model="pagenumber"
      style="width:50px;text-align: center;"
    />
    <div class="modal fade" id="myModal" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Sửa</h4>
          </div>
          <div class="modal-body"><sua :item="getitem"></sua></div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import formatnumber from '../share/formatnumber'
import sua from './sua'
export default {
  mounted(){
    this.list2=this.list
  },
  data() {
    return {
      list: [
        { id: "0", name: 'sp1', gia: '1000', src: require("@/assets/1.jpg"), ttmh: 'AMOLED', cpu: 'Snapdragon 865', ram: '8 GB', cs: '64MP+13MP+16MP', ct: '20MP', bnt: '128 GB', sd: 'Không', pin: '4.720 mAh', hdh: 'Android 10' },
        { id: "1", name: 'sp2', gia: '2000', src: require("@/assets/5.jpg"), ttmh: 'AMOLED', cpu: 'Snapdragon 865', ram: '8 GB', cs: '64MP+13MP+16MP', ct: '20MP', bnt: '128 GB', sd: 'Không', pin: '4.720 mAh', hdh: 'Android 10' },
        { id: "2", name: 'sp3', gia: '3000', src: require("@/assets/1.jpg"), ttmh: 'AMOLED', cpu: 'Snapdragon 865', ram: '8 GB', cs: '64MP+13MP+16MP', ct: '20MP', bnt: '128 GB', sd: 'Không', pin: '4.720 mAh', hdh: 'Android 10' },
        { id: "3", name: 'sp4', gia: '4000', src: require("@/assets/1.jpg"), ttmh: 'AMOLED', cpu: 'Snapdragon 865', ram: '8 GB', cs: '64MP+13MP+16MP', ct: '20MP', bnt: '128 GB', sd: 'Không', pin: '4.720 mAh', hdh: 'Android 10' },
        { id: "4", name: 'sp5', gia: '5000', src: require("@/assets/1.jpg"), ttmh: 'AMOLED', cpu: 'Snapdragon 865', ram: '8 GB', cs: '64MP+13MP+16MP', ct: '20MP', bnt: '128 GB', sd: 'Không', pin: '4.720 mAh', hdh: 'Android 10' },
        { id: "5", name: 'sp6', gia: '7000', src: require("@/assets/1.jpg"), ttmh: 'AMOLED', cpu: 'Snapdragon 865', ram: '8 GB', cs: '64MP+13MP+16MP', ct: '20MP', bnt: '128 GB', sd: 'Không', pin: '4.720 mAh', hdh: 'Android 9' },
        { id: "6", name: 'sp7', gia: '18000', src: require("@/assets/1.jpg"), ttmh: 'AMOLED', cpu: 'Snapdragon 865', ram: '8 GB', cs: '64MP+13MP+16MP', ct: '20MP', bnt: '128 GB', sd: 'Không', pin: '4.720 mAh', hdh: 'Android 9' },
        { id: "7", name: 'sp8', gia: '10500', src: require("@/assets/1.jpg"), ttmh: 'AMOLED', cpu: 'Snapdragon 865', ram: '8 GB', cs: '64MP+13MP+16MP', ct: '20MP', bnt: '128 GB', sd: 'Không', pin: '4.720 mAh', hdh: 'Android 9' },
        { id: "8", name: 'sp9', gia: '17000', src: require("@/assets/1.jpg"), ttmh: 'AMOLED', cpu: 'Snapdragon 865', ram: '8 GB', cs: '64MP+13MP+16MP', ct: '20MP', bnt: '128 GB', sd: 'Không', pin: '4.720 mAh', hdh: 'Android 9' },
        { id: "9", name: 'sp10', gia: '10500', src: require("@/assets/1.jpg"), ttmh: 'AMOLED', cpu: 'Snapdragon 865', ram: '8 GB', cs: '64MP+13MP+16MP', ct: '20MP', bnt: '128 GB', sd: 'Không', pin: '4.720 mAh', hdh: 'Android 9' },
        { id: "10", name: 'sp11', gia: '18000', src: require("@/assets/1.jpg"), ttmh: 'AMOLED', cpu: 'Snapdragon 865', ram: '8 GB', cs: '64MP+13MP+16MP', ct: '20MP', bnt: '128 GB', sd: 'Không', pin: '4.720 mAh', hdh: 'Ưindow' },
        { id: "11", name: 'sp12', gia: '10600', src: require("@/assets/1.jpg"), ttmh: 'AMOLED', cpu: 'Snapdragon 865', ram: '8 GB', cs: '64MP+13MP+16MP', ct: '20MP', bnt: '128 GB', sd: 'Không', pin: '4.720 mAh', hdh: 'Ưindow' },
        { id: "12", name: 'sp13', gia: '10500', src: require("@/assets/1.jpg"), ttmh: 'AMOLED', cpu: 'Snapdragon 865', ram: '8 GB', cs: '64MP+13MP+16MP', ct: '20MP', bnt: '128 GB', sd: 'Không', pin: '4.720 mAh', hdh: 'Ưindow' },
        { id: "13", name: 'sp14', gia: '10800', src: require("@/assets/1.jpg"), ttmh: 'AMOLED', cpu: 'Snapdragon 865', ram: '8 GB', cs: '64MP+13MP+16MP', ct: '20MP', bnt: '128 GB', sd: 'Không', pin: '4.720 mAh', hdh: 'Ưindow' },
        { id: "14", name: 'sp15', gia: '10200', src: require("@/assets/1.jpg"), ttmh: 'AMOLED', cpu: 'Snapdragon 865', ram: '8 GB', cs: '64MP+13MP+16MP', ct: '20MP', bnt: '128 GB', sd: 'Không', pin: '4.720 mAh', hdh: 'Ưindow' },
        { id: "15", name: 'sp16', gia: '10800', src: require("@/assets/1.jpg"), ttmh: 'AMOLED', cpu: 'Snapdragon 865', ram: '8 GB', cs: '64MP+13MP+16MP', ct: '20MP', bnt: '128 GB', sd: 'Không', pin: '4.720 mAh', hdh: 'Ưindow' },
        { id: "16", name: 'sp17', gia: '10500', src: require("@/assets/1.jpg"), ttmh: 'AMOLED', cpu: 'Snapdragon 865', ram: '8 GB', cs: '64MP+13MP+16MP', ct: '20MP', bnt: '128 GB', sd: 'Không', pin: '4.720 mAh', hdh: 'Ưindow' },
        { id: "17", name: 'sp18', gia: '10800', src: require("@/assets/1.jpg"), ttmh: 'AMOLED', cpu: 'Snapdragon 865', ram: '8 GB', cs: '64MP+13MP+16MP', ct: '20MP', bnt: '128 GB', sd: 'Không', pin: '4.720 mAh', hdh: 'IOS' },
        { id: "18", name: 'sp19', gia: '10300', src: require("@/assets/1.jpg"), ttmh: 'AMOLED', cpu: 'Snapdragon 865', ram: '8 GB', cs: '64MP+13MP+16MP', ct: '20MP', bnt: '128 GB', sd: 'Không', pin: '4.720 mAh', hdh: 'IOS' },
        { id: "19", name: 'sp1', gia: '10900', src: require("@/assets/1.jpg"), ttmh: 'AMOLED', cpu: 'Snapdragon 865', ram: '8 GB', cs: '64MP+13MP+16MP', ct: '20MP', bnt: '128 GB', sd: 'Không', pin: '4.720 mAh', hdh: 'Android 10' },
        { id: "20", name: 'sp2', gia: '10070', src: require("@/assets/1.jpg"), ttmh: 'AMOLED', cpu: 'Snapdragon 865', ram: '8 GB', cs: '64MP+13MP+16MP', ct: '20MP', bnt: '128 GB', sd: 'Không', pin: '4.720 mAh', hdh: 'IOS' },
        { id: "21", name: 'sp3', gia: '10800', src: require("@/assets/1.jpg"), ttmh: 'AMOLED', cpu: 'Snapdragon 865', ram: '8 GB', cs: '64MP+13MP+16MP', ct: '20MP', bnt: '128 GB', sd: 'Không', pin: '4.720 mAh', hdh: 'IOS' },
        { id: "22", name: 'sp4', gia: '10600', src: require("@/assets/1.jpg"), ttmh: 'AMOLED', cpu: 'Snapdragon 865', ram: '8 GB', cs: '64MP+13MP+16MP', ct: '20MP', bnt: '128 GB', sd: 'Không', pin: '4.720 mAh', hdh: 'IOS' },
        { id: "23", name: 'sp5', gia: '17000', src: require("@/assets/1.jpg"), ttmh: 'AMOLED', cpu: 'Snapdragon 865', ram: '8 GB', cs: '64MP+13MP+16MP', ct: '20MP', bnt: '128 GB', sd: 'Không', pin: '4.720 mAh', hdh: 'IOS' },
        { id: "24", name: 'sp6', gia: '1000', src: require("@/assets/1.jpg"), ttmh: 'AMOLED', cpu: 'Snapdragon 865', ram: '8 GB', cs: '64MP+13MP+16MP', ct: '20MP', bnt: '128 GB', sd: 'Không', pin: '4.720 mAh', hdh: 'IOS' },
        { id: "25", name: 'sp7', gia: '10080', src: require("@/assets/1.jpg"), ttmh: 'AMOLED', cpu: 'Snapdragon 865', ram: '8 GB', cs: '64MP+13MP+16MP', ct: '20MP', bnt: '128 GB', sd: 'Không', pin: '4.720 mAh', hdh: 'IOS' },
        { id: "26", name: 'sp8', gia: '10900', src: require("@/assets/1.jpg"), ttmh: 'AMOLED', cpu: 'Snapdragon 865', ram: '8 GB', cs: '64MP+13MP+16MP', ct: '20MP', bnt: '128 GB', sd: 'Không', pin: '4.720 mAh', hdh: 'IOS' },
        { id: "27", name: 'sp9', gia: '10700', src: require("@/assets/1.jpg"), ttmh: 'AMOLED', cpu: 'Snapdragon 865', ram: '8 GB', cs: '64MP+13MP+16MP', ct: '20MP', bnt: '128 GB', sd: 'Không', pin: '4.720 mAh', hdh: 'IOS' },
        { id: "28", name: 'sp10', gia: '10800', src: require("@/assets/1.jpg"), ttmh: 'AMOLED', cpu: 'Snapdragon 865', ram: '8 GB', cs: '64MP+13MP+16MP', ct: '20MP', bnt: '128 GB', sd: 'Không', pin: '4.720 mAh', hdh: 'IOS' },
        { id: "29", name: 'sp11', gia: '10900', src: require("@/assets/1.jpg"), ttmh: 'AMOLED', cpu: 'Snapdragon 865', ram: '8 GB', cs: '64MP+13MP+16MP', ct: '20MP', bnt: '128 GB', sd: 'Không', pin: '4.720 mAh', hdh: 'Android 7' },
        { id: "30", name: 'sp12', gia: '10700', src: require("@/assets/1.jpg"), ttmh: 'AMOLED', cpu: 'Snapdragon 865', ram: '8 GB', cs: '64MP+13MP+16MP', ct: '20MP', bnt: '128 GB', sd: 'Không', pin: '4.720 mAh', hdh: 'Android 7' },
        { id: "31", name: 'sp13', gia: '17000', src: require("@/assets/1.jpg"), ttmh: 'AMOLED', cpu: 'Snapdragon 865', ram: '8 GB', cs: '64MP+13MP+16MP', ct: '20MP', bnt: '128 GB', sd: 'Không', pin: '4.720 mAh', hdh: 'Android 7' },
        { id: "32", name: 'sp14', gia: '10800', src: require("@/assets/1.jpg"), ttmh: 'AMOLED', cpu: 'Snapdragon 865', ram: '8 GB', cs: '64MP+13MP+16MP', ct: '20MP', bnt: '128 GB', sd: 'Không', pin: '4.720 mAh', hdh: 'Android 7' },
        { id: "33", name: 'sp15', gia: '10900', src: require("@/assets/1.jpg"), ttmh: 'AMOLED', cpu: 'Snapdragon 865', ram: '8 GB', cs: '64MP+13MP+16MP', ct: '20MP', bnt: '128 GB', sd: 'Không', pin: '4.720 mAh', hdh: 'Android 7' },
        { id: "34", name: 'sp16', gia: '10001', src: require("@/assets/1.jpg"), ttmh: 'AMOLED', cpu: 'Snapdragon 865', ram: '8 GB', cs: '64MP+13MP+16MP', ct: '20MP', bnt: '128 GB', sd: 'Không', pin: '4.720 mAh', hdh: 'Android 7' },
        { id: "35", name: 'sp17', gia: '10010', src: require("@/assets/1.jpg"), ttmh: 'AMOLED', cpu: 'Snapdragon 865', ram: '8 GB', cs: '64MP+13MP+16MP', ct: '20MP', bnt: '128 GB', sd: 'Không', pin: '4.720 mAh', hdh: 'Android 7' },
        { id: "36", name: 'sp18', gia: '10100', src: require("@/assets/1.jpg"), ttmh: 'AMOLED', cpu: 'Snapdragon 865', ram: '8 GB', cs: '64MP+13MP+16MP', ct: '20MP', bnt: '128 GB', sd: 'Không', pin: '4.720 mAh', hdh: 'Android 7' },
        { id: "37", name: 'sp19', gia: '11000', src: require("@/assets/1.jpg"), ttmh: 'AMOLED', cpu: 'Snapdragon 865', ram: '8 GB', cs: '64MP+13MP+16MP', ct: '20MP', bnt: '128 GB', sd: 'Không', pin: '4.720 mAh', hdh: 'Android 7' },
      ],
      pagenumber: 1,
      numberitem: 5,
      id:'',
      name:'',
      price:'',
      hdh:'',
      list2:[],
      getitem:{},
    }
  },
  computed: {
    list1() {
       return this.list2.slice((this.pagenumber - 1) * this.numberitem, this.pagenumber * this.numberitem)
    },
    page() {
      return Math.ceil(this.list2.length / this.numberitem)
    }
  },
  methods: {
    xoa(id) {
      alert(id)
    },
    search(){
      this.list2 = this.list.filter((e)=>{
          return e.id.toString().match(this.id) && e.name.match(this.name) && e.gia.toString().match(this.price) && e.hdh.match(this.hdh)
      })
    },
    suaa(item) {
       //this.getitem = Object.assign({},item)
       this.getitem = {...item}
    },
  },
  components:{
    formatnumber,sua
  }
}
</script>

<style scoped>
table,
tr {
  border: solid 1px #dfe6ec;
}
table {
  min-width: 1500px;
  padding-right: 5px;
}
tr:nth-child(even) {
  background-color: #e8f4ff;
}
td {
  word-break: hyphenate;
  padding-left: 15px;
  padding-right: 15px;
}
th {
  text-align: center;
}
#search {
}

.row {
  margin: 0 0 10px 0;
}
#myModal {
  z-index: 99999;
}
.modal-header {
  display: inline;
}
#bang {
  overflow-x: auto;
}
</style>