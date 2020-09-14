<template>
  <div>
    <h1>Update Airline</h1>
    <form @submit="updateAirline">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="alCode">Airline Code</label>
          <input type="text" class="form-control" id="alCode" placeholder="Airline Code" v-model="airline.alCode">
        </div>
         <div class="form-group col-md-6">
          <label for="alName">Airline Name</label>
          <input type="text" class="form-control" id="alName" placeholder="Airline Name" v-model="airline.alName">
        </div>
      </div>
      <button type="submit" @click="updateAirline" class="btn btn-primary">Update Airline</button>
    </form>
  </div>
</template>

<script>
import DataService from "../services/DataService";

export default {
  data() {
    return {
      airline: []
    }
  },

  created() {
      DataService.getAirlineByID(this.$route.params.id)
        .then((response) => {
          this.airline = response.data.data[0];
        //   console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
  },
  methods: {
    updateAirline(e) {
        DataService.updateAirline(this.$route.params.id, this.airline)
        .then(() =>this.$router.push('/airline'))
        e.preventDefault();
    }
  },
};
</script>

<style scoped>
</style>
