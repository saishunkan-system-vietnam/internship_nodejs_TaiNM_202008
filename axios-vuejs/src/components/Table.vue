<template>
  <div>
    <div>
      <form @submit.prevent="submit">
        <div class="form-row">
          <div class="form-group col-md-6" :class="{ 'form-group--error': $v.inputAlCode.$error }">
            <label class="form__input" for="alCode">Airline Code</label>
            <input
              type="text"
              class="form-control"
              id="alCode"
              placeholder="Airline Code"
              v-model.trim="$v.inputAlCode.$model"
            />
            <div
              style="color:red"
              class="error"
              v-if="!$v.inputAlCode.required"
            >Airline Code is required</div>
            <div
              style="color:red"
              class="error"
              v-if="!$v.inputAlCode.minLength"
            >Airline Code must have at least {{$v.inputAlCode.$params.minLength.min}} letters.</div>
            <div
              style="color:red"
              class="error"
              v-if="!$v.inputAlCode.maxLength"
            >Airline Code should have at most {{$v.inputAlCode.$params.maxLength.max}} letters.</div>
          </div>

          <div class="form-group col-md-6" :class="{ 'form-group--error': $v.inputAlName.$error }">
            <label class="form__label" for="alName">Airline Name</label>
            <input
              type="text"
              class="form-control"
              id="alName"
              placeholder="Airline Name"
              v-model.trim="$v.inputAlName.$model"
            />
            <div
              style="color:red"
              class="error"
              v-if="!$v.inputAlName.required"
            >Airline Name is required</div>
          </div>
        </div>
        <button
          type="submit"
          class="btn btn-primary"
          @click="insertAirline({alCode: inputAlCode, alName: inputAlName})"
          :disabled="submitStatus === 'PENDING'"
        >Create Airline</button>
        <p class="typo__p" v-if="submitStatus === 'OK'">NEW AIRLINE CREATED!</p>
        <p style="color:red" class="typo__p" v-if="submitStatus === 'ERROR'">
          <br />Please fill the form correctly.
        </p>
        <p class="typo__p" v-if="submitStatus === 'PENDING'">Creating...</p>
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
          <th scope="col">Airline Code</th>
          <th scope="col">Airline Name</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="airline in filteredItems" :key="airline.alID">
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

    <div class="card-footer pb-0 pt-3">
      <jw-pagination :items="airlines" :pageSize="5" @changePage="onChangePage"></jw-pagination>
    </div>
  </div>
</template>

<script>
import DataService from "../services/DataService";
import {
  required,
  minLength,
  min,
  maxLength,
  max,
} from "vuelidate/lib/validators";

export default {
  data() {
    return {
      inputAlCode: "",
      inputAlName: "",
      selected: [],
      airlines: [],
      pageOfItems: [],
      seats: [],
      search: "",
      submitStatus: null,
    };
  },

  validations: {
    inputAlCode: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(15),
    },
    inputAlName: {
      required,
    },
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
      this.$router.push(`/updateAirline/${id}`);
    },
    insertAirline(data) {
      DataService.insertAirline(data)
        .then((response) => console.log("success"))
        .catch((e) => console.log(e));
         this.$router.push("/insertCategory");
      // if (this.submitStatus === "OK") {
      //   this.$router.push("/insertCategory");
      // }
    },
    onChangePage(pageOfItems) {
      // update page of items
      this.pageOfItems = pageOfItems;
      // console.log(pageOfItems)
    },
    submit() {
      console.log("submit!");
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        // do your submit logic here
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
      }
    },
  },
  computed: {
    filteredItems() {
      return this.pageOfItems.filter((pageOfItem) => {
        return (
          pageOfItem.alName.toLowerCase().indexOf(this.search.toLowerCase()) >
          -1
        );
      });
    },
  },
};
</script>