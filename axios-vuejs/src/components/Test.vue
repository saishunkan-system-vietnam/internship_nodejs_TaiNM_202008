<template>
    <div>
        <div class="container">
    <br>
    <div class="form-inline" action="#">
    <input type="text" id="form-al" v-model="item.alCode" placeholder="Code" class="form-control"> 
    <input type="text" v-model="item.alName" placeholder="Name" class="form-control" v-on:keyup.enter="addItem">
    <button @click="addItem" class="btn btn-dark"><font-awesome-icon icon="user-secret" /></button>
      </div>
    <br><br>
    <table class="table table-striped table-bordered table-sm">
      <thead class="thead-light">
        <th>Code</th>
        <th>Name</th>
        <th class="col-2">Edit/Del</th>
      </thead>
      <tr v-for="(item, index) in items" :key="item.index">
        <td>
          <input v-if="item.edit" type="text" v-model="item.alCode"  v-on:keyup.enter="item.edit = !item.edit">
          <span v-else>{{item.alCode}} </span>
        </td>
        <td>
          <input v-if="item.edit" type="text" v-model="item.alName" v-on:keyup.enter="item.edit = !item.edit">
          <span v-else>{{item.alName}} </span>
        </td>
        <td><button @click="item.edit = !item.edit" class="btn btn-info"><i class="far fa-edit"></i></button>
          <button @click="removeItem(index)" class="btn btn-danger"><i class="far fa-trash-alt"></i></button></td>
      </tr>
    </table>
  </div>
    </div>
</template>

<script>
import DataService from "../services/DataService";
import $ from "jquery";
export default {
    data: function() {
    return {
      item: {edit: false},
      items: []
    }
  },
  created(){
        DataService.getAirline()
        .then((response) => {
        this.items = response.data.data;
          console.log(response.data.data);
        })
        .catch((e) => {
          console.log(e);
        });
  },
  methods:{
    addItem(){
      this.items.push({alCode:this.item.alCode, alName:this.item.alName, edit: false})
      this.item = [];
      $('#form-al').focus();
    },
    removeItem(index){
      this.items.splice(index, 1)
    }
  }
}
</script>