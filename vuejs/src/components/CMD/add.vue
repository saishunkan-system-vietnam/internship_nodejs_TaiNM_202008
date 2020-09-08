<template>
  <div>
    <table>
      <tr>
        <td class="left">Tên sản phẩm</td>
        <td class="right">
          <input type="text" id="ten" v-model="getten" />
        </td>
        <span v-if="c1" class="check">Sai dữ liệu</span>
      </tr>
      <tr>
        <td class="left">Giá</td>
        <td class="right">
          <input type="text" id="gia1" @input="formatnumber" />
        </td>
        <span v-if="c2" class="check">Sai dữ liệu</span>
      </tr>
      <tr>
        <td class="left">Ảnh</td>
        <td class="right">
          <input type="file" id="anh" />
        </td>
        <span v-if="c3" class="check">Sai dữ liệu</span>
      </tr>
      <tr>
        <td class="left">Thông tin màn hình</td>
        <td class="right">
          <input type="text" id="mh" v-model="getmh" />
        </td>
        <span v-if="c4" class="check">Sai dữ liệu</span>
      </tr>
      <tr>
        <td class="left">CPU</td>
        <td class="right">
          <input type="text" id="cpu" v-model="getcpu" />
        </td>
        <span v-if="c5" class="check">Sai dữ liệu</span>
      </tr>
      <tr>
        <td class="left">RAM</td>
        <td class="right">
          <select v-model="getram">
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
          <input type="text" id="cs" v-model="getcs" />
        </td>
        <span v-if="c7" class="check">Sai dữ liệu</span>
      </tr>
      <tr>
        <td class="left">Camera trước</td>
        <td class="right">
          <input type="text" id="ct" v-model="getct" />
        </td>
        <span v-if="c8" class="check">Sai dữ liệu</span>
      </tr>
      <tr>
        <td class="left">Bộ nhớ trong</td>
        <td class="right">
          <select v-model="getbnt">
            <option>16 G</option>
            <option>32 G</option>
            <option>64 G</option>
            <option>128 G</option>
            <option>256 GB</option>
          </select>
        </td>
      </tr>
      <tr>
        <td class="left">Thẻ nhớ ngoài</td>
        <td class="right">
          <input type="checkbox" id v-model="getsd" />
        </td>
      </tr>
      <tr>
        <td class="left">Dung lượng pin</td>
        <td class="right">
          <input type="text" id="pin" v-model="getpin" />
        </td>
        <span v-if="c11" class="check">Sai dữ liệu</span>
      </tr>
      <tr>
        <td class="left">Hệ điều hành</td>
        <td class="right">
          <input type="text" id="hdh" v-model="gethdh" />
        </td>
        <span v-if="c12" class="check">Sai dữ liệu</span>
      </tr>
    </table>
    <button type="button" class="btn btn-primary" @click="add">Thêm</button>
    <formatnumber :num="getgia"></formatnumber>
  </div>
</template>

<script>
import formatnumber from '../share/formatnumber'
export default {
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
      getten: '',
      getgia: '',
      getanh: '',
      getmh: '',
      getcpu: '',
      getram: '512 MB',
      getcs: '',
      getct: '',
      getbnt: '16 G',
      getsd: true,
      getpin: '',
      gethdh: '',
    }
  },
  watch: {
    getgia: (a) => {
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
        this.getgia = gia1.value.split(',').join('')
        gia1.value = new Intl.NumberFormat('ja-JP').format(this.getgia)
      }

    },
    getgia1() {
      this.getgia = gia1.value
    },
    add() {
      this.c1 = false
      this.c2 = false
      this.c3 = false
      this.c4 = false
      this.c5 = false
      this.c7 = false
      this.c8 = false
      this.c11 = false
      this.c12 = false
      this.getanh = anh.value
      var cten, cgia, canh, cmh, ccpu, ccs, cct, cpin, chdh
      cten = /^[\w\sáàảãạăắằẳẵặâấầẩẫậđéèẻẽẹêếềểễệíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵÁÀẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬĐÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴ]{1,20}$/
      cgia = /^[1-9][\d\,]{4,25}$/
      canh = /^.+\.(jpg|png)$/i
      cmh = /^[\w\s\;\,\+\.]{1,40}$/
      ccpu = /^[\w\s\;\,\(\)\&\.\®]{1,200}$/
      ccs = /^[\w\s\;\,\(\)\&\.\+]{1,100}$/
      cct = /^[\w\s\;\,\(\)\&\.\+]{1,100}$/
      cpin = /^[\w\s\,]{1,30}$/
      chdh = /^[\w\s\.\,\+\™\(\)]{1,40}$/
      if (!cten.test(ten.value)) {
        this.c1 = true
      }
      if (!cgia.test(gia1.value)) {
        this.c2 = true
      }
      if (!canh.test(anh.value)) {
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
      if (!this.c1 && !this.c2 && !this.c4 && !this.c5 && !this.c7 && !this.c8 && !this.c11 && !this.c12) {
        alert("ok")
      }
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
}
</style>