<template>
  <div>
    <div>
      <form>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="alCode">Airline Code</label>
            <input
              type="text"
              class="form-control"
              id="alCode"
              placeholder="Airline Code"
              v-model="input.alCode"
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="alName">Airline Name</label>
            <input
              type="text"
              class="form-control"
              id="alName"
              placeholder="Airmine Name"
              v-model="input.alName"
            />
          </div>
        </div>
        <div>
          Selected:
          <strong>{{ selected }}</strong>
        </div>
        <button type="submit" class="btn btn-primary" @click="insertAirline(input)">Create Airline</button>
      </form>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Airline Code</th>
          <th scope="col">Airline Name</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="airline in airlines" :key="airline.alID">
          <th scope="row">{{airline.alID}}</th>
          <td>{{airline.alCode}}</td>
          <td>{{airline.alName}}</td>
          <td>
            <a
              href
              class="btn waves-effect waves-light red darken-2"
              @click="updateAirline(airline.alID)"
            >
              <font-awesome-icon icon="user-secret" />
            </a>
          </td>
          <td>
            <a
              href
              class="btn waves-effect waves-light red darken-2"
              @click="deleteAirline(airline.alID)"
            >
              <font-awesome-icon icon="user-secret" />
            </a>
          </td>
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
      input: { alCode: "", alName: "" },
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
    getAirlinebyID(id) {
      DataService.getAirlineByID(id)
        .then((response) => {
          this.airlines = response.data.data;
          // console.log(response.data.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    deleteAirline(id) {
      DataService.deteleAirline(id)
        .then((response) => console.log("success"))
        .catch((e) => console.log(e));
    },
    updateAirline(id) {
      this.$router.push(`/updateAirline/${id}`);
    },
    insertAirline(data) {
      DataService.insertAirline(data)
        .then((response) => console.log("success"))
        .catch((e) => console.log(e));
      this.$router.push('/insertCategory')
    },
    insertCategory(data) {
      for (let i = 0; i < this.seats.length; i++) {
        DataService.insertCategory(data)
          .then((response) => console.log("success"))
          .catch((e) => console.log(e));
      }
      // DataService.insertCategory(data)
      //   .then((response) => console.log("success"))
      //   .catch((e) => console.log(e));
    },
  },
};
</script>