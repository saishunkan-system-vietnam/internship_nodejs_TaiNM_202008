<template>
  <div>
      <div class="container">
          <div class="row">
              <h3 class="col-12">Pin sạc dự phòng</h3>
              <div class="col-lg-3 col-md-4" v-for="i in list1" :key="i.id">
                  <router-link
                  tag="div"
                  :to="{name:'item2',params:{name:i.name}}"><item1
                  :src="i.src"
                  :name="i.name"
                  :gia="i.gia"></item1></router-link>
              </div>
          </div>
          <div class="row">
              <h3 class="col-12">Tai nghe</h3>
              <div class="col-lg-3 col-md-4" v-for="i in list2" :key="i.id">
                  <router-link
                  tag="div"
                  :to="{name:'item2',params:{name:i.name}}"><item1
                  :src="i.src"
                  :name="i.name"
                  :gia="i.gia"></item1></router-link>
              </div>
          </div>
          <div class="row">
              <h3 class="col-12">Loa</h3>
              <div class="col-lg-3 col-md-4" v-for="i in list3" :key="i.id">
                  <router-link
                  tag="div"
                  :to="{name:'item2',params:{name:i.name}}"><item1
                  :src="i.src"
                  :name="i.name"
                  :gia="i.gia"></item1></router-link>
              </div>
          </div>
          <div class="row">
              <h3 class="col-12">Thẻ nhớ</h3>
              <div class="col-lg-3 col-md-4" v-for="i in list4" :key="i.id">
                  <router-link
                  tag="div"
                  :to="{name:'item2',params:{name:i.name}}"><item1
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
            list1:[
                {id:0,src:require('@/assets/5.jpg'),name:'Pin dự phòng MiPow Power Cube X3 1000 Lightning',gia:900000},
                {id:1,src:require('@/assets/5.jpg'),name:'Pin dự phòng MiPow Power Cube X3 1000 Lightning',gia:900000},
                {id:2,src:require('@/assets/5.jpg'),name:'Pin dự phòng MiPow Power Cube X3 1000 Lightning',gia:900000},
                {id:3,src:require('@/assets/5.jpg'),name:'Pin dự phòng MiPow Power Cube X3 1000 Lightning',gia:900000},
                {id:4,src:require('@/assets/5.jpg'),name:'Pin dự phòng MiPow Power Cube X3 1000 Lightning',gia:900000},
                {id:5,src:require('@/assets/5.jpg'),name:'Pin dự phòng MiPow Power Cube X3 1000 Lightning',gia:900000},
                {id:6,src:require('@/assets/5.jpg'),name:'Pin dự phòng MiPow Power Cube X3 1000 Lightning',gia:900000},
            ],
            list2:[
                {id:0,src:require('@/assets/6.jpg'),name:'Tai nghe AKG Samsung Galaxy S10/S10 Plus/S10e',gia:900000},
                {id:1,src:require('@/assets/6.jpg'),name:'Tai nghe AKG Samsung Galaxy S10/S10 Plus/S10e',gia:900000},
                {id:2,src:require('@/assets/6.jpg'),name:'Tai nghe AKG Samsung Galaxy S10/S10 Plus/S10e',gia:900000},
                {id:3,src:require('@/assets/6.jpg'),name:'Tai nghe AKG Samsung Galaxy S10/S10 Plus/S10e',gia:900000},
                {id:4,src:require('@/assets/6.jpg'),name:'Tai nghe AKG Samsung Galaxy S10/S10 Plus/S10e',gia:900000},
                {id:5,src:require('@/assets/6.jpg'),name:'Tai nghe AKG Samsung Galaxy S10/S10 Plus/S10e',gia:900000},
                {id:6,src:require('@/assets/6.jpg'),name:'Tai nghe AKG Samsung Galaxy S10/S10 Plus/S10e',gia:900000},
            ],
            list3:[
                {id:0,src:require('@/assets/7.jpg'),name:'Loa Anker SoundCore Mini',gia:900000},
                {id:1,src:require('@/assets/7.jpg'),name:'Loa Anker SoundCore Mini',gia:900000},
                {id:2,src:require('@/assets/7.jpg'),name:'Loa Anker SoundCore Mini',gia:900000},
                {id:3,src:require('@/assets/7.jpg'),name:'Loa Anker SoundCore Mini',gia:900000},
                {id:4,src:require('@/assets/7.jpg'),name:'Loa Anker SoundCore Mini',gia:900000},
                {id:5,src:require('@/assets/7.jpg'),name:'Loa Anker SoundCore Mini',gia:900000},
                {id:6,src:require('@/assets/7.jpg'),name:'Loa Anker SoundCore Mini',gia:900000},
            ],
            list4:[
                {id:0,src:require('@/assets/8.jpg'),name:'Thẻ nhớ Remax 32GB',gia:900000},
                {id:1,src:require('@/assets/8.jpg'),name:'Thẻ nhớ Remax 32GB',gia:900000},
                {id:2,src:require('@/assets/8.jpg'),name:'Thẻ nhớ Remax 32GB',gia:900000},
                {id:3,src:require('@/assets/8.jpg'),name:'Thẻ nhớ Remax 32GB',gia:900000},
                {id:4,src:require('@/assets/8.jpg'),name:'Thẻ nhớ Remax 32GB',gia:900000},
                {id:5,src:require('@/assets/8.jpg'),name:'Thẻ nhớ Remax 32GB',gia:900000},
                {id:6,src:require('@/assets/8.jpg'),name:'Thẻ nhớ Remax 32GB',gia:900000},
            ],
        }
    },
    components:{
        item1
    }
}
</script>

<style>

</style>