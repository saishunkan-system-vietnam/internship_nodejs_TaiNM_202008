<template>
  <div>
    <b-card bg-variant="dark" text-variant="white" title="Add tpye of seat for current Airline">
      <b-card-text>Pls select the avaiable type of seat for {{this.airlines[this.airlines.length-1].alName}} </b-card-text>
      <b-form-group>
        <b-form-checkbox-group
          id="checkbox-group-2"
          v-model="selected"
          name="flavour-2"
          v-for="seat in seats"
          :key="seat.sID"
        >
          <b-form-checkbox v-bind:value="seat.sID">{{seat.sName}}</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
      <b-button variant="primary" @click="insertCategory()">Finish</b-button>
    </b-card>
  </div>
</template>

<script>
import DataService from "../services/DataService";
export default {
  data() {
    return {
      selected: [],
      airlines: [],
      seats: [],
    };
  },

  created() {
    DataService.getAirline()
      .then((response) => {
        this.airlines = response.data.data;
        // console.log(response.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
    DataService.getSeat()
      .then((response) => {
        this.seats = response.data.data;
        // console.log(seats[0].sName);
        console.log(response.data.data[0].sName);
      })
      .catch((e) => {
        console.log(e);
      });
  },
  methods: {
    insertCategory() {
      for (let i = 0; i < this.selected.length; i++) {
        DataService.insertCategory(this.airlines[this.airlines.length-1].alID, this.selected[i])
          .then((response) => console.log("success"))
          .catch((e) => console.log(e));
      }
      this.$router.push('/airline')
      // DataService.insertCategory(data)
      //   .then((response) => console.log("success"))
      //   .catch((e) => console.log(e));
    },
  },
};
</script>