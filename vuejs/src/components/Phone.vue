<template>
  <div>
    <router-link
    tag="h4"
    to="/phone/apple">APPLE</router-link>
      <div class="container">
        <div class="row">
          <div v-for="i in appleitem" :key="i.id" class="col-xl-2 col-lg-3 col-md-4">
            <router-link
            tag="div"
            :to="{name:'item2',params:{name:i.id}}"><item1
            :src="i.src"
            :name="i.name"
            :gia="i.gia"></item1></router-link>  
          </div>
        </div>
      </div>
      <router-link
      tag="h4"
      to="/phone/samsung">SAMSUNG</router-link>
      <div class="container">
        <div class="row">
          <div v-for="i in samsungitem" :key="i.id" class="col-lg-2 col-md-3">
            <router-link
            tag="div"
            :to="{name:'item2',params:{name:i.id}}"><item1
            :src="i.src"
            :name="i.name"
            :gia="i.gia"></item1></router-link> 
          </div>
        </div>
      </div>
      <router-link
      tag="h4"
      to="/phone/lg">LG</router-link>
      <div class="container">
        <div class="row">
          <div v-for="i in lgitem" :key="i.id" class="col-lg-2 col-md-3">
            <router-link
            tag="div"
            :to="{name:'item2',params:{name:i.id}}"><item1
            :src="i.src"
            :name="i.name"
            :gia="i.gia"></item1></router-link> 
          </div>
        </div>
      </div>
      <router-link
      tag="h4"
      to="/phone/sony">SONY</router-link>
      <div class="container">
        <div class="row">
          <div v-for="i in sonyitem" :key="i.id" class="col-lg-2 col-md-3">
            <router-link
            tag="div"
            :to="{name:'item2',params:{name:i.id}}"><item1
            :src="i.src"
            :name="i.name"
            :gia="i.gia"></item1></router-link> 
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import item1 from './item/item1'
export default {
  data(){
    return{
      appleitem:[
                {id:1,src:require('@/assets/1.jpg'),name:'spAPPLE1',gia:100},
                {id:2,src:require('@/assets/1.jpg'),name:'spAPPLE2',gia:100},
                {id:3,src:require('@/assets/1.jpg'),name:'spAPPLE3',gia:100},
                {id:4,src:require('@/assets/1.jpg'),name:'spAPPLE4',gia:100},
                {id:5,src:require('@/assets/1.jpg'),name:'spAPPLE5',gia:100},
                {id:6,src:require('@/assets/1.jpg'),name:'spAPPLE6',gia:100},
                {id:7,src:require('@/assets/1.jpg'),name:'spAPPLE7',gia:100},
                {id:8,src:require('@/assets/1.jpg'),name:'spAPPLE8',gia:100},
                {id:9,src:require('@/assets/1.jpg'),name:'spAPPLE9',gia:100},
                {id:10,src:require('@/assets/1.jpg'),name:'spAPPLE10',gia:100},
                {id:11,src:require('@/assets/1.jpg'),name:'spAPPLE11',gia:100},
                {id:12,src:require('@/assets/1.jpg'),name:'spAPPLE12',gia:100},
            ],
            samsungitem:[
                {id:13,src:require('@/assets/1.jpg'),name:'spSAMSUNG1',gia:100},
                {id:14,src:require('@/assets/1.jpg'),name:'spSAMSUNG2',gia:100},
                {id:15,src:require('@/assets/1.jpg'),name:'spSAMSUNG3',gia:100},
                {id:16,src:require('@/assets/1.jpg'),name:'spSAMSUNG4',gia:100},
                {id:17,src:require('@/assets/1.jpg'),name:'spSAMSUNG5',gia:100},
                {id:18,src:require('@/assets/1.jpg'),name:'spSAMSUNG6',gia:100},
                {id:19,src:require('@/assets/1.jpg'),name:'spSAMSUNG7',gia:100},
                {id:20,src:require('@/assets/1.jpg'),name:'spSAMSUNG8',gia:100},
                {id:21,src:require('@/assets/1.jpg'),name:'spSAMSUNG9',gia:100},
                {id:22,src:require('@/assets/1.jpg'),name:'spSAMSUNG10',gia:100},
                {id:23,src:require('@/assets/1.jpg'),name:'spSAMSUNG11',gia:100},
                {id:24,src:require('@/assets/1.jpg'),name:'spSAMSUNG12',gia:100},
            ],
            lgitem:[
                {id:25,src:require('@/assets/1.jpg'),name:'spLG1',gia:100},
                {id:26,src:require('@/assets/1.jpg'),name:'spLG2',gia:100},
                {id:27,src:require('@/assets/1.jpg'),name:'spLG3',gia:100},
                {id:28,src:require('@/assets/1.jpg'),name:'spLG4',gia:100},
                {id:29,src:require('@/assets/1.jpg'),name:'spLG5',gia:100},
                {id:30,src:require('@/assets/1.jpg'),name:'spLG6',gia:100},
                {id:31,src:require('@/assets/1.jpg'),name:'spLG7',gia:100},
                {id:32,src:require('@/assets/1.jpg'),name:'spLG8',gia:100},
                {id:33,src:require('@/assets/1.jpg'),name:'spLG9',gia:100},
                {id:34,src:require('@/assets/1.jpg'),name:'spLG10',gia:100},
                {id:35,src:require('@/assets/1.jpg'),name:'spLG11',gia:100},
                {id:36,src:require('@/assets/1.jpg'),name:'spLG12',gia:100},
            ],
            sonyitem:[
                {id:37,src:require('@/assets/1.jpg'),name:'spSONY1',gia:100},
                {id:38,src:require('@/assets/1.jpg'),name:'spSONY2',gia:100},
                {id:39,src:require('@/assets/1.jpg'),name:'spSONY3',gia:100},
                {id:40,src:require('@/assets/1.jpg'),name:'spSONY4',gia:100},
                {id:41,src:require('@/assets/1.jpg'),name:'spSONY5',gia:100},
                {id:42,src:require('@/assets/1.jpg'),name:'spSONY6',gia:100},
                {id:43,src:require('@/assets/1.jpg'),name:'spSONY7',gia:100},
                {id:44,src:require('@/assets/1.jpg'),name:'spSONY8',gia:100},
                {id:45,src:require('@/assets/1.jpg'),name:'spSONY9',gia:100},
                {id:46,src:require('@/assets/1.jpg'),name:'spSONY10',gia:100},
                {id:47,src:require('@/assets/1.jpg'),name:'spSONY11',gia:100},
                {id:48,src:require('@/assets/1.jpg'),name:'spSONY12',gia:100},
            ],
            hang:[
                {id:0,name:"APPLE"},
                {id:1,name:"SAMSUNG"},
                {id:2,name:"LG"},
                {id:3,name:"SONY"}
            ],
    }
  },
  components:{
    item1
  }
}
</script>

<style scoped>
  h4{
    background: red;
    width: 100%;
    max-width: 140px;
    margin-left: 20px;
  }
  @media(max-width: 576px){
    h4{
      font-size: 18px;
      max-width: 100px;
    }
  }
</style>