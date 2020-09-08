<template>
  <div>
    <table>
      <tr>
        <td class="left">Tên sản phẩm</td>
        <td class="right">
          <input type="text" id="ten" :value="item.name" />
        </td>
      </tr>
      <tr>
        <td></td>
        <td v-if="c1" class="check">Sai dữ liệu</td>
      </tr>
      <tr>
        <td class="left">Giá</td>
        <td class="right">
          <input type="text" id="gia1" :value="getgia1()" @input="formatnumber" />
        </td>
      </tr>
      <tr>
        <td></td>
        <td v-if="c2" class="check">Sai dữ liệu</td>
      </tr>
      <tr>
        <td class="left">Ảnh</td>
        <td class="right">
          <img :src="item.src" alt="" width="100px" @click="choose">
          <input type="file" ref="change" accept="image/*" id="anh" @change="changeimage" />
        </td>
      </tr>
      <tr>
        <td></td>
        <td v-if="c3" class="check">Sai dữ liệu</td>
      </tr>
      <tr>
        <td class="left">Thông tin màn hình</td>
        <td class="right">
          <input type="text" id="mh" :value="item.ttmh" />
        </td>
      </tr>
      <tr>
        <td></td>
        <td v-if="c4" class="check">Sai dữ liệu</td>
      </tr>
      <tr>
        <td class="left">CPU</td>
        <td class="right">
          <input type="text" id="cpu" :value="item.cpu" />
        </td>
      </tr>
      <tr>
        <td></td>
        <td v-if="c5" class="check">Sai dữ liệu</td>
      </tr>
      <tr>
        <td class="left">RAM</td>
        <td class="right">
          <select id="ram" :value="item.ram">
            <option>512 MB</option>
            <option>1 GB</option>
            <option>2 GB</option>
            <option>4 GB</option>
            <option>6 GB</option>
            <option>8 GB</option>
            <option>16 GB</option>
            <option>32 GB</option>
          </select>
        </td>
      </tr>
      <tr>
        <td class="left">Camera sau</td>
        <td class="right">
          <input type="text" id="cs" :value="item.cs" />
        </td>
      </tr>
      <tr>
        <td></td>
        <td v-if="c7" class="check">Sai dữ liệu</td>
      </tr>
      <tr>
        <td class="left">Camera trước</td>
        <td class="right">
          <input type="text" id="ct" :value="item.ct" />
        </td>
      </tr>
      <tr>
        <td></td>
        <td v-if="c8" class="check">Sai dữ liệu</td>
      </tr>
      <tr>
        <td class="left">Bộ nhớ trong</td>
        <td class="right">
          <select id="bnt" :value="item.bnt">
            <option>16 GB</option>
            <option>32 GB</option>
            <option>64 GB</option>
            <option>128 GB</option>
            <option>256 GB</option>
          </select>
        </td>
      </tr>
      <tr>
        <td class="left">Thẻ nhớ ngoài</td>
        <td class="right">
          <input type="checkbox" id="sd" :value="item.sd=='không'? false : true" />
        </td>
      </tr>
      <tr>
        <td class="left">Dung lượng pin</td>
        <td class="right">
          <input type="text" id="pin" :value="item.pin" />
        </td>
      </tr>
      <tr>
        <td></td>
        <td v-if="c11" class="check">Sai dữ liệu</td>
      </tr>
      <tr>
        <td class="left">Hệ điều hành</td>
        <td class="right">
          <input type="text" id="hdh" :value="item.hdh" />
        </td>
      </tr>
      <tr>
        <td></td>
        <td v-if="c12" class="check">Sai dữ liệu</td>
      </tr>
    </table>
    <button type="button" class="btn btn-primary" @click="add">Sửa</button>
    <button type="button" class="btn btn-primary" @click="reset">Reset</button>
    <formatnumber :num="item.gia"></formatnumber>
  </div>
</template>

<script>
import formatnumber from '../share/formatnumber'
export default {
  
  props:{
    item:{
      type:Object,
      default:{ id: "0", name: '', gia: '0', src: '', ttmh: '', cpu: '', ram: '1 GB', cs: '', ct: '', bnt: '16 GB', sd: 'không', pin: '', hdh: '' },
    }
    
  },
  data() {
    return {
      c1: false,
      c2: false,
      c3: false,
      c4: false,
      c5: false,
      c7: false,
      c8: false,
      c11: false,
      c12: false,
      src:""
    }
  },
  computed:{
    csrc(){
      return this.src
    }
  },
  watch:{
    item(n){
      this.src=n.src
      this.delalert()
      
     }
  },
  components: {
    formatnumber
  },
  methods: {
    formatnumber() {
      var t = new RegExp("^NaN.$")
      if (t.test(gia1.value)) {
        gia1.value = "0"
      }
      else {
        this.item.gia = gia1.value.split(',').join('')
        gia1.value = new Intl.NumberFormat('ja-JP').format(this.item.gia)
      }

    },
    choose(){
      this.$refs.change.click()
    },
    changeimage(){
      this.item.src = require("@/assets/"+anh.value.substr(12))
    },
    getgia1() {
      return new Intl.NumberFormat('ja-JP').format(this.item.gia)
    },
    delalert(){
      this.c1 = false
      this.c2 = false
      this.c3 = false
      this.c4 = false
      this.c5 = false
      this.c7 = false
      this.c8 = false
      this.c11 = false
      this.c12 = false
    },
    add() {
      this.delalert()
      var cten, cgia, canh, cmh, ccpu, ccs, cct, cpin, chdh
      cten = /^[\w\sáàảãạăắằẳẵặâấầẩẫậđéèẻẽẹêếềểễệíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵÁÀẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬĐÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴ]{1,20}$/
      cgia = /^[1-9][\d\,]{4,25}$/
      canh = /^.+\.(jpg|png)$/i
      cmh = /^[\w\s\;\,\+\.]{1,40}$/
      ccpu = /^[\w\s\;\,\(\)\&\.\®]{1,200}$/
      ccs = /^[\w\s\;\,\(\)\&\.\+]{1,100}$/
      cct = /^[\w\s\;\,\(\)\&\.\+]{1,100}$/
      cpin = /^[\w\s\,\.]{1,30}$/
      chdh = /^[\w\s\.\,\+\™\(\)]{1,40}$/
      if (!cten.test(ten.value)) {
        this.c1 = true
      }
      if (!cgia.test(gia1.value)) {
        this.c2 = true
      }
      if (!(canh.test(anh.value) || anh.value == "")) {
        this.c3 = true;
      }
      
      if (!cmh.test(mh.value)) {
        this.c4 = true
      }
      if (!ccpu.test(cpu.value)) {
        this.c5 = true
      }
      if (!ccs.test(cs.value)) {
        this.c7 = true
      }
      if (!cct.test(ct.value)) {
        this.c8 = true
      }
      if (!cpin.test(pin.value)) {
        this.c11 = true
      }
      if (!chdh.test(hdh.value)) {
        this.c12 = true
      }
      if (!this.c1 && !this.c2 && !this.c3 && !this.c4 && !this.c5 && !this.c7 && !this.c8 && !this.c11 && !this.c12) {
        alert("ok")
      }
    },
    reset(){
      ten.value=this.item.name
      gia1.value=this.item.gia
      this.item.src=this.src
      mh.value=this.item.ttmh
      cpu.value=this.item.cpu
      ram.value=this.item.ram
      cs.value=this.item.cs
      ct.value=this.item.ct
      bnt.value=this.item.bnt
      sd.checked = !(this.item.sd == "Không")
      pin.value=this.item.pin
      hdh.value=this.item.hdh

    }
  }
}
</script>

<style scoped>
table {
  margin-bottom: 40px;
}
.check {
  margin-left: 10px;
  font-size: 12px;
  color: red;
  padding-top: 0;
}
td{
  padding: 10px 10px 0 10px;
}
#anh{
  display: none;
}
</style>