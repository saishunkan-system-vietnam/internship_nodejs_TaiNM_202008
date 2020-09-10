<template>
  <div>
    <h1>Update ticket</h1>
    <div>
      <form v-on:submit="saveForm()">
        <div class="form-group">
          <label for="exampleFormControlSelect1">Hãng Bay</label>
          <select class="form-control" id="abcd" v-model="posts[1]">
            <option>1</option>
            <option>Vietnam Airlines</option>
            <option>Vietjet Airlines</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Loại Ghế</label>
          <select
            class="form-control"
            id="exampleFormControlSelect1"
            v-model="posts[2]"
          >
            <option>1</option>
            <option>Business Class</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Điểm đi</label>
          <select
            class="form-control"
            id="exampleFormControlSelect1"
            v-model="posts[3]"
          >
            <option disabled="disabled">{{posts[3]}}</option>
            <option
              v-for="airport of airports"
              v-bind:key="airport.id"
              v-bind:value="airport[0]"
              >{{ airport[1] }}
            </option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Điểm đến</label>
          <select
            class="form-control"
            id="exampleFormControlSelect1"
            v-model="posts[4]"
          >
            <option disabled="disabled">{{posts[4]}}</option>
            <option
              v-for="airport of airports"
              v-bind:key="airport.id"
              v-bind:value="airport[0]"
              >{{ airport[1] }}
            </option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">NGày giờ</label>
          <input
            type="datetime-local"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Date"
            v-model="posts[5]"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Số lượng ghế</label>
          <input
            type="number"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Number_seat"
            v-model="posts[6]"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Giá ghế</label>
          <input
            type="number"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Price"
            v-model="posts[7]"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
let url = `http://localhost:3000/ticket/`;
const urlAirport = `http://localhost:3000/airport`;

export default {
  data() {
    return {
      posts: [],
      airports: []
    };
  },
  async created() {
    const id = this.$route.params.id;
    console.log(id);
    axios
      .all([
        axios.get(`http://localhost:3000/ticket/` + id),
        axios.get(`http://localhost:3000/airport`)
      ])
      .then(
        axios.spread((responseOne, responseTwo) => {
          console.log("responseOne");
          console.log(responseOne.data.data[0]);
          //  console.log(responseOne)
          console.log(responseTwo.data.data);
          this.posts = responseOne.data.data[0];
          this.airports = responseTwo.data.data;
        })
      )
      .catch(errors => {
        console.log("abc");
      });
  },
  methods: {
    saveForm() {
      event.preventDefault();
      const id = this.$route.params.id;
      const data = {
        airline_id: this.posts[1],
        seat_id: this.posts[2],
        start: this.posts[3],
        end: this.posts[4],
        date: this.posts[5],
        number_seat: this.posts[6],
        price: this.posts[7]
      };
      console.log(data);
      axios.put("http://localhost:3000/ticket/" + id, data).then(res => {
        console.log(res.data);
        this.$router.push("/ticket");
      });
    }
  }
};
</script>

<style scoped></style>