<template>
  <div>
    <h3 style="margin:25px">Tìm kiếm với : {{$route.params.key}}</h3>
    <div v-if="list1.length != 0" class="row">
      <div v-for="i in list1" :key="i.id" class="col-lg-2 col-md-3">
        <router-link tag="div" :to="{name:'item2',params:{name:i.id}}">
          <item1 :src="i.src" :name="i.name" :gia="i.gia"></item1>
        </router-link>
      </div>
    </div>
    <div v-else style="text-align: center;">Không tìm thấy kết quả của <b>{{$route.params.key}}</b></div>
  </div>
</template>

<script>
import item1 from './item/item1'
export default {
  data() {
    return {
      listitem: [
        {
          id: 1,
          src: require("@/assets/1.jpg"),
          name: "spAPPLE1",
          gia: 1000000000
        },
        { id: 2, src: require("@/assets/1.jpg"), name: "spAPPLE2", gia: 100 },
        { id: 3, src: require("@/assets/1.jpg"), name: "spAPPLE3", gia: 100 },
        { id: 4, src: require("@/assets/1.jpg"), name: "spAPPLE4", gia: 100 },
        { id: 5, src: require("@/assets/1.jpg"), name: "spAPPLE5", gia: 100 },
        { id: 6, src: require("@/assets/1.jpg"), name: "spAPPLE6", gia: 100 },
        { id: 7, src: require("@/assets/1.jpg"), name: "spAPPLE7", gia: 100 },
        { id: 8, src: require("@/assets/1.jpg"), name: "spAPPLE8", gia: 100 },
        { id: 9, src: require("@/assets/1.jpg"), name: "spAPPLE9", gia: 100 },
        { id: 10, src: require("@/assets/1.jpg"), name: "spAPPLE10", gia: 100 },
        { id: 11, src: require("@/assets/1.jpg"), name: "spAPPLE11", gia: 100 },
        { id: 12, src: require("@/assets/1.jpg"), name: "spAPPLE12", gia: 100 },
        {
          id: 13,
          src: require("@/assets/1.jpg"),
          name: "spSAMSUNG1",
          gia: 100
        },
        {
          id: 14,
          src: require("@/assets/1.jpg"),
          name: "spSAMSUNG2",
          gia: 100
        },
        {
          id: 15,
          src: require("@/assets/1.jpg"),
          name: "spSAMSUNG3",
          gia: 100
        },
        {
          id: 16,
          src: require("@/assets/1.jpg"),
          name: "spSAMSUNG4",
          gia: 100
        },
        {
          id: 17,
          src: require("@/assets/1.jpg"),
          name: "spSAMSUNG5",
          gia: 100
        },
        {
          id: 18,
          src: require("@/assets/1.jpg"),
          name: "spSAMSUNG6",
          gia: 100
        },
        {
          id: 19,
          src: require("@/assets/1.jpg"),
          name: "spSAMSUNG7",
          gia: 100
        },
        {
          id: 20,
          src: require("@/assets/1.jpg"),
          name: "spSAMSUNG8",
          gia: 100
        },
        {
          id: 21,
          src: require("@/assets/1.jpg"),
          name: "spSAMSUNG9",
          gia: 100
        },
        {
          id: 22,
          src: require("@/assets/1.jpg"),
          name: "spSAMSUNG10",
          gia: 100
        },
        {
          id: 23,
          src: require("@/assets/1.jpg"),
          name: "spSAMSUNG11",
          gia: 100
        },
        {
          id: 24,
          src: require("@/assets/1.jpg"),
          name: "spSAMSUNG12",
          gia: 100
        },
        { id: 25, src: require("@/assets/1.jpg"), name: "spLG1", gia: 100 },
        { id: 26, src: require("@/assets/1.jpg"), name: "spLG2", gia: 100 },
        { id: 27, src: require("@/assets/1.jpg"), name: "spLG3", gia: 100 },
        { id: 28, src: require("@/assets/1.jpg"), name: "spLG4", gia: 100 },
        { id: 29, src: require("@/assets/1.jpg"), name: "spLG5", gia: 100 },
        { id: 30, src: require("@/assets/1.jpg"), name: "spLG6", gia: 100 },
        { id: 31, src: require("@/assets/1.jpg"), name: "spLG7", gia: 100 },
        { id: 32, src: require("@/assets/1.jpg"), name: "spLG8", gia: 100 },
        { id: 33, src: require("@/assets/1.jpg"), name: "spLG9", gia: 100 },
        { id: 34, src: require("@/assets/1.jpg"), name: "spLG10", gia: 100 },
        { id: 35, src: require("@/assets/1.jpg"), name: "spLG11", gia: 100 },
        { id: 36, src: require("@/assets/1.jpg"), name: "spLG12", gia: 100 },
        { id: 37, src: require("@/assets/1.jpg"), name: "spSONY1", gia: 100 },
        { id: 38, src: require("@/assets/1.jpg"), name: "spSONY2", gia: 100 },
        { id: 39, src: require("@/assets/1.jpg"), name: "spSONY3", gia: 100 },
        { id: 40, src: require("@/assets/1.jpg"), name: "spSONY4", gia: 100 },
        { id: 41, src: require("@/assets/1.jpg"), name: "spSONY5", gia: 100 },
        { id: 42, src: require("@/assets/1.jpg"), name: "spSONY6", gia: 100 },
        { id: 43, src: require("@/assets/1.jpg"), name: "spSONY7", gia: 100 },
        { id: 44, src: require("@/assets/1.jpg"), name: "spSONY8", gia: 100 },
        { id: 45, src: require("@/assets/1.jpg"), name: "spSONY9", gia: 100 },
        { id: 46, src: require("@/assets/1.jpg"), name: "spSONY10", gia: 100 },
        { id: 47, src: require("@/assets/1.jpg"), name: "spSONY11", gia: 100 },
        { id: 48, src: require("@/assets/1.jpg"), name: "spSONY12", gia: 100 },
        {
          id: 49,
          src: require("@/assets/1.jpg"),
          name: "sp1",
          gia: 1000000000000
        },
        { id: 50, src: require("@/assets/1.jpg"), name: "sp2", gia: 100 },
        { id: 51, src: require("@/assets/1.jpg"), name: "sp3", gia: 100 },
        { id: 52, src: require("@/assets/1.jpg"), name: "sp4", gia: 100 },
        { id: 53, src: require("@/assets/1.jpg"), name: "sp5", gia: 100 },
        { id: 54, src: require("@/assets/1.jpg"), name: "sp6", gia: 100 }
      ]
    };
  },
  computed: {
    list1() {
      return this.listitem.filter((e) => {
        return e.name.toLowerCase().toString().match(this.$route.params.key.toLowerCase())
      })
    }
  },
  components: {
    item1
  }
};
</script>

<style scoped>
.row{
  margin: 0;
}
</style>
