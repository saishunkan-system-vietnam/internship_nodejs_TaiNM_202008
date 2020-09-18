<template>
  <div class="container">
    <h1>Update Seat</h1>
    <form @submit="updateSeat">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="sName">Airline Code</label>
          <input type="text" class="form-control" id="sName" placeholder="Type of Seat" v-model="seat.sName">
        </div>
      </div>
      <button type="submit" @click="updateSeat" class="btn btn-primary">Update Seat</button>
    </form>
  </div>
</template>

<script>
import DataService from "../../services/DataService";

export default {
  data() {
    return {
      seat: []
    }
  },

  beforeCreate() {
      DataService.getSeatbyID(this.$route.params.id)
        .then((response) => {
          this.seat = response.data.data[0]
          console.log(this.seat)
        })
        .catch((e) => {
          console.log(e);
        });
  },
  methods: {
    updateSeat(e) {
        DataService.updateSeat(this.$route.params.id, this.seat)
        .then(() =>this.$router.push('/admin/seat'))
        e.preventDefault();
    }
  },
};
</script>

<style scoped>
</style>