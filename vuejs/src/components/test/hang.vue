<template>
  <div>
      <table>
          <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
          </tr>
          <tr v-for="i in list" :key="i.id">
              <td>{{i.id}}</td>
              <td>{{i.name}}</td>
              <!-- <td v-for="s in status1" :key="s.id" v-if="i.status==s.id">
                  <tthai :tname="s.name" :textcolor="s.textcolor"></tthai>
              </td> -->
              <td v-tthai="i.status"></td>
          </tr>
      </table>
      <hr>
  </div>
</template>

<script>
import tthai from './tthai'
export default {
    data(){
        return{
            list:[
                {id:0,name:'a1',status:1},
                {id:1,name:'a2',status:2},
                {id:2,name:'a3',status:3},
                {id:3,name:'a4',status:4},
                {id:4,name:'a5',status:5},
                {id:5,name:'a6',status:6},
                {id:6,name:'a7',status:1},
                {id:7,name:'a8',status:4},
                {id:8,name:'a9',status:5},
                {id:9,name:'a10',status:6},
            ],
            status1:[
                {id:1,name:"Mới",textcolor:"#000"},
                {id:2,name:"Vận Chuyển",textcolor:"#eefd05"},
                {id:3,name:"Tới Nơi",textcolor:"#1ff305"},
                {id:4,name:"Thiếu Hàng",textcolor:"#0564f3"},
                {id:5,name:"Đến Chậm",textcolor:"#f39405"},
                {id:6,name:"Thiếu Hàng Đến Chậm",textcolor:"#f30505"},
            ],
        }
    },
    components:{
        tthai,
    },
    directives:{
        "tthai":{
            bind(el,bind,vnode){
                switch(bind.value){
                    case 1:{
                        el.style.color="#000"
                        el.innerHTML="Mới"
                        break
                    }
                    case 2:{
                        el.style.color="#eefd05"
                        el.innerHTML="Vận Chuyển"
                        break
                    }
                    case 3:{
                        el.style.color="#1ff305"
                        el.innerHTML="Tới Nơi"
                        break
                    }
                    case 4:{
                        el.style.color="#0564f3"
                        el.innerHTML="Thiếu Hàng"
                        break
                    }
                    case 5:{
                        el.style.color="#f39405"
                        el.innerHTML="Đến Chậm"
                        break
                    }
                    case 6:{
                        el.style.color="#f30505"
                        el.innerHTML="Thiếu Hàng Đến Chậm"
                        break
                    }
                }
                
            }
        }
    }
}
</script>

<style scoped>
    table,tr,td,th{
       border: solid 0.5px rgb(66, 62, 62);
   }
   table{
       min-width: 500px;
   }
   th,td{
       padding: 5px;
       text-align: center;
   }
   
</style>