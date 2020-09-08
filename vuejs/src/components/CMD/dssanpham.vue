<template>
  <div>
      <div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="Search">
    <div class="input-group-append">
      <button class="btn btn-primary" type="submit"><i class="fas fa-search"></i></button>  
     </div>
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
          <tr v-for="i in list" :key="i.id">
              <td>{{i.id}}</td>
              <td>{{i.name}}</td>
              <td>{{i.gia}}</td>
              <td style="word-break: break-all;">{{i.src}}</td>
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
              <td data-toggle="modal" data-target="#myModal" style="text-align: center;cursor: pointer;" @click="sua(i.id)">Sửa</td>
          </tr>
      </table>
      </div>
      <div class="modal fade" id="myModal" role="dialog">
      <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Sửa</h4>
        </div>
        <div class="modal-body">
          <change></change>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
        </div>
      </div>
      
    </div>
  </div>
  </div>
</template>

<script>
import change from './change'
export default {
    data(){
        return{
            list:[
                {id:0,name:'sp1',gia:'1000',src:'aaaassssssssssssssssssssssssssaaaaa/aaaaaaa/aaaaaa/aaaa.jpg',ttmh:'AMOLED',cpu:'Snapdragon 865',ram:'8 GB',cs:'64MP+13MP+16MP',ct:'20MP',bnt:'128 GB',sd:'Không',pin:'4.720 mAh',hdh:'Android 10'},
                {id:1,name:'sp2',gia:'1000',src:'aaaaaaaaa',ttmh:'AMOLED',cpu:'Snapdragon 865',ram:'8 GB',cs:'64MP+13MP+16MP',ct:'20MP',bnt:'128 GB',sd:'Không',pin:'4.720 mAh',hdh:'Android 10'},
                {id:2,name:'sp3',gia:'1000',src:'aaaaaaaaa',ttmh:'AMOLED',cpu:'Snapdragon 865',ram:'8 GB',cs:'64MP+13MP+16MP',ct:'20MP',bnt:'128 GB',sd:'Không',pin:'4.720 mAh',hdh:'Android 10'},
                {id:3,name:'sp4',gia:'1000',src:'aaaaaaaaa',ttmh:'AMOLED',cpu:'Snapdragon 865',ram:'8 GB',cs:'64MP+13MP+16MP',ct:'20MP',bnt:'128 GB',sd:'Không',pin:'4.720 mAh',hdh:'Android 10'},
                {id:4,name:'sp5',gia:'1000',src:'aaaaaaaaa',ttmh:'AMOLED',cpu:'Snapdragon 865',ram:'8 GB',cs:'64MP+13MP+16MP',ct:'20MP',bnt:'128 GB',sd:'Không',pin:'4.720 mAh',hdh:'Android 10'},
                {id:5,name:'sp6',gia:'1000',src:'aaaaaaaaa',ttmh:'AMOLED',cpu:'Snapdragon 865',ram:'8 GB',cs:'64MP+13MP+16MP',ct:'20MP',bnt:'128 GB',sd:'Không',pin:'4.720 mAh',hdh:'Android 10'},
                {id:6,name:'sp7',gia:'1000',src:'aaaaaaaaa',ttmh:'AMOLED',cpu:'Snapdragon 865',ram:'8 GB',cs:'64MP+13MP+16MP',ct:'20MP',bnt:'128 GB',sd:'Không',pin:'4.720 mAh',hdh:'Android 10'},
                {id:7,name:'sp8',gia:'1000',src:'aaaaaaaaa',ttmh:'AMOLED',cpu:'Snapdragon 865',ram:'8 GB',cs:'64MP+13MP+16MP',ct:'20MP',bnt:'128 GB',sd:'Không',pin:'4.720 mAh',hdh:'Android 10'},
                {id:8,name:'sp9',gia:'1000',src:'aaaaaaaaa',ttmh:'AMOLED',cpu:'Snapdragon 865',ram:'8 GB',cs:'64MP+13MP+16MP',ct:'20MP',bnt:'128 GB',sd:'Không',pin:'4.720 mAh',hdh:'Android 10'},
                {id:9,name:'sp10',gia:'1000',src:'aaaaaaaaa',ttmh:'AMOLED',cpu:'Snapdragon 865',ram:'8 GB',cs:'64MP+13MP+16MP',ct:'20MP',bnt:'128 GB',sd:'Không',pin:'4.720 mAh',hdh:'Android 10'},
                {id:10,name:'sp11',gia:'1000',src:'aaaaaaaaa',ttmh:'AMOLED',cpu:'Snapdragon 865',ram:'8 GB',cs:'64MP+13MP+16MP',ct:'20MP',bnt:'128 GB',sd:'Không',pin:'4.720 mAh',hdh:'Android 10'},
                {id:11,name:'sp12',gia:'1000',src:'aaaaaaaaa',ttmh:'AMOLED',cpu:'Snapdragon 865',ram:'8 GB',cs:'64MP+13MP+16MP',ct:'20MP',bnt:'128 GB',sd:'Không',pin:'4.720 mAh',hdh:'Android 10'},
                {id:12,name:'sp13',gia:'1000',src:'aaaaaaaaa',ttmh:'AMOLED',cpu:'Snapdragon 865',ram:'8 GB',cs:'64MP+13MP+16MP',ct:'20MP',bnt:'128 GB',sd:'Không',pin:'4.720 mAh',hdh:'Android 10'},
                {id:13,name:'sp14',gia:'1000',src:'aaaaaaaaa',ttmh:'AMOLED',cpu:'Snapdragon 865',ram:'8 GB',cs:'64MP+13MP+16MP',ct:'20MP',bnt:'128 GB',sd:'Không',pin:'4.720 mAh',hdh:'Android 10'},
                {id:14,name:'sp15',gia:'1000',src:'aaaaaaaaa',ttmh:'AMOLED',cpu:'Snapdragon 865',ram:'8 GB',cs:'64MP+13MP+16MP',ct:'20MP',bnt:'128 GB',sd:'Không',pin:'4.720 mAh',hdh:'Android 10'},
                {id:15,name:'sp16',gia:'1000',src:'aaaaaaaaa',ttmh:'AMOLED',cpu:'Snapdragon 865',ram:'8 GB',cs:'64MP+13MP+16MP',ct:'20MP',bnt:'128 GB',sd:'Không',pin:'4.720 mAh',hdh:'Android 10'},
                {id:16,name:'sp17',gia:'1000',src:'aaaaaaaaa',ttmh:'AMOLED',cpu:'Snapdragon 865',ram:'8 GB',cs:'64MP+13MP+16MP',ct:'20MP',bnt:'128 GB',sd:'Không',pin:'4.720 mAh',hdh:'Android 10'},
                {id:17,name:'sp18',gia:'1000',src:'aaaaaaaaa',ttmh:'AMOLED',cpu:'Snapdragon 865',ram:'8 GB',cs:'64MP+13MP+16MP',ct:'20MP',bnt:'128 GB',sd:'Không',pin:'4.720 mAh',hdh:'Android 10'},
                {id:18,name:'sp19',gia:'1000',src:'aaaaaaaaa',ttmh:'AMOLED',cpu:'Snapdragon 865',ram:'8 GB',cs:'64MP+13MP+16MP',ct:'20MP',bnt:'128 GB',sd:'Không',pin:'4.720 mAh',hdh:'Android 10'},
            ]
        }
    },
    methods:{
        xoa(id){
            alert(id)
        },
        sua(id){
            
        },
    },
    components:{
        change
    }
}
</script>

<style scoped>
    table,tr,td,th{
        border: solid 1px #000;
    }
    table{
        min-width: 1400px;
    }
    
    td{
        word-break: hyphenate;
    }
    th{
        text-align: center;
    }
    #search{
    }

    .row{
        margin: 0 0 10px 0;
    }
    #myModal{
        z-index: 99999;
    }
    .modal-header{
        display: inline;
    }
    #bang{
        overflow-x: auto;
    }
</style>