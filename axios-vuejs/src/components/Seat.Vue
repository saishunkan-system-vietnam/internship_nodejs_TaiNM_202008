<template>
<div>
    <div>
        <form>
      <div class="form-row">
        <div class="form-group col-md-12">
          <label for="sName">Airline Code</label>
          <input type="text" class="form-control" id="sName" placeholder="Type of Seat" v-model="sName">
        </div>
      </div>
      <button type="submit" class="btn btn-primary" @click="insertSeat(sName)">Create Seat</button>
      <br><br>
    </form>
    </div>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Type of Seat</th>
      <th scope="col">Edit</th>
        <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="seat in seats" :key="seat.sID">
      <th scope="row">{{seat.sID}}</th>
      <td>{{seat.sName}}</td>
        <td><a href="" class="btn waves-effect waves-light red darken-2" @click="updateSeat(seat.sID)"><font-awesome-icon icon="user-secret" /></a></td>
         <td><a href="" class="btn waves-effect waves-light red darken-2" @click="deleteSeat(seat.sID)"><font-awesome-icon icon="user-secret" /></a></td>
    </tr>
  </tbody>
</table>
</div>
</template>

<script>
import DataService from "../services/DataService";

export default {
  data() {
    return {
        sName: "",
        seats: [],
    };
  },

  created() {
    DataService.getSeat()
     .then((response) => {
          this.seats = response.data.data;
          console.log(response.data.data);
        })
        .catch((e) => {
          console.log(e);
        });
  },
  methods: {
    getSeatbyID(id){
         DataService.getSeatbyID(id)
        .then((response) => {
          this.seats = response.data.data;
          console.log(response.data.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    deleteSeat(id) {
        DataService.deleteSeat(id)
            .then(response => console.log('success'))
            .catch(e => console.log(e))
      },
      updateSeat(id) {
           this.$router.push(`/updateSeat/${id}`)
      },
    insertSeat(data) {
            DataService.insertSeat(data)
            .then(response => console.log('success'))
            .catch(e => console.log(e))
      },
  },
};
</script>