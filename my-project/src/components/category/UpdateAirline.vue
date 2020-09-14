<template>
  <div class="container">
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
        <!-- <div>
                <b-form-group label="Using options array:">
      <b-form-checkbox-group
        id="checkbox-group-1"
        v-model="selected"
        :options="options"
        name="flavour-1"
      ></b-form-checkbox-group>
    </b-form-group>
        </div>
        <div>Selected: <strong>{{ selected }}</strong></div> -->
      <button type="submit" @click="updateAirline" class="btn btn-primary">Update Airline</button>
    </form>
  </div>
</template>

<script>
import DataService from "../../services/DataService";

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
    getAirlinebyID(id){
         DataService.getAirlineByID(id)
        .then((response) => {
          this.airlines = response.data.data;
        //   console.log(response.data.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    updateAirline(e) {
        DataService.updateAirline(this.$route.params.id, this.airline)
        .then(() =>this.$router.push('/admin/airline'))
        e.preventDefault();
    }
  },
};
</script>

<style scoped>
</style>
