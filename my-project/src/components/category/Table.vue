<template>
  <div class="container">
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
          <div class="form-group col-md-6">
            <label for="alName">Airline Name</label>
            <input
              type="text"
              class="form-control"
              id="alName"
              placeholder="Airline Name"
              v-model="input.alName"
            />
          </div>
        </div>
        <button type="submit" class="btn btn-primary" @click="insertAirline(input)">Create Airline</button>
        <br />
        <br />
      </form>
    </div>

    <form class="form-inline">
      <input type="text" class="form-control" placeholder="Search by Airline Name" v-model="search" />
    </form>
    <br />

    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">
            Airline Code
            <i @click="sortInc" class="fas fa-long-arrow-alt-up"></i>
            <i @click="sortDec" class="fas fa-long-arrow-alt-down"></i>
          </th>
          <th scope="col">Airline Name</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="airline in pageOfItems" :key="airline.alID">
          <th scope="row">{{airline.alID}}</th>
          <td>{{airline.alCode}}</td>
          <td>{{airline.alName}}</td>
          <td>
            <a
              href
              class="btn waves-effect waves-light red darken-2"
              @click="updateAirline(airline.alID)"
            >
              <i style="color:green" class="fas fa-pen"></i>
            </a>
          </td>
          <td>
            <a
              href
              class="btn waves-effect waves-light red darken-2"
              @click="deleteAirline(airline.alID)"
            >
              <i style="color: red" class="fas fa-trash-alt"></i>
            </a>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="card-footer pb-0 pt-3">
      <jw-pagination :items="filteredItems" :pageSize="5" @changePage="onChangePage"></jw-pagination>
    </div>
  </div>
</template>

<script>
import DataService from "../../services/DataService";

export default {
  data() {
    return {
      input: { alCode: "", alName: "" },
      selected: [],
      airlines: [],
      pageOfItems: [],
      seats: [],
      search: "",
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
      this.$router.push(`/admin/updateAirline/${id}`);
    },
    insertAirline(data) {
      DataService.insertAirline(data)
        .then((response) => console.log("success"))
        .catch((e) => console.log(e));
      this.$router.push("/admin/insertCategory");
      this.$router.go();
    },
    onChangePage(filteredItems) {
      // update page of items
      this.pageOfItems = filteredItems;
      // console.log(pageOfItems)
    },
    sortDec() {
      return this.airlines.sort((a, b) =>
        a.alCode.toLowerCase() > b.alCode.toLowerCase() ? 1 : -1
      );
      //       return this.airlines.sort(function(a, b) {
      //    return a.alCode.toLowerCase().localeCompare(b.alCode.toLowerCase());
      // });
    },

    sortInc() {
      return this.airlines.sort((a, b) =>
        a.alCode.toLowerCase() < b.alCode.toLowerCase() ? 1 : -1
      );
    },
  },
  computed: {
    filteredItems() {
      return this.airlines.filter((airline) => {
        return (
          airline.alName.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        );
      });
    },
  },
};
</script>