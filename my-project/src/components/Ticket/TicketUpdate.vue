<template>
  <div>
    <h1>Update ticket</h1>
    <div>
      <form v-on:submit="saveForm()">
        <div class="form-group">
          <label for="exampleFormControlSelect1">Hãng Bay</label>
          <select class="form-control" id="abcd" v-model="posts[1]">
            <option
              v-for="airline of airlines"
              v-bind:key="airline.id"
              v-bind:value="airline.alID"
              >{{ airline.alName }}
            </option>
             <option disabled="disabled">{{posts[1]}}</option>
          </select>
          <span>Selected: {{ posts[1] }}</span>
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Loại Ghế</label>
          <select
            class="form-control"
            id="exampleFormControlSelect1"
            v-model="posts[2]"
          >
            <option
              v-for="seat of seats"
              v-bind:key="seat.id"
              v-bind:value="seat.sID"
              >{{ seat.sName }}
            </option>
            <option disabled="disabled">{{posts[2]}}</option>
          </select>
          <span>Selected: {{ posts[2] }}</span>
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Điểm đi</label>
          <select
            class="form-control"
            id="exampleFormControlSelect1"
            v-model="posts[3]"
          >
            <option
              v-for="airport of airports"
              v-bind:key="airport.id"
              v-bind:value="airport[0]"
              >{{ airport[1] }}
            </option>
             <option disabled="disabled">{{posts[3]}}</option>
          </select>
          <span>Selected: {{ posts[3] }}</span>
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Điểm đến</label>
          <select
            class="form-control"
            id="exampleFormControlSelect1"
            v-model="posts[4]"
          >
            <option
              v-for="airport of airports"
              v-bind:key="airport.id"
              v-bind:value="airport[0]"
              >{{ airport[1] }}
            </option>
             <option disabled="disabled">{{posts[4]}}</option>
          </select>
          <span>Selected: {{ posts[4] }}</span>
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

import callAPI from '../../conf/axios';

export default {
  data() {
    return {
      posts: [],
      airports: [],
      airlines: [],
      seats: []
    };
  },
 
   async created() {
    const id = this.$route.params.id;
    console.log(id);
    axios
      .all([
        callAPI.get(`ticket/` + id),
        callAPI.get(`airport`),
        callAPI.get(`findAllAirline`),
        callAPI.get(`category/findAllSeat`)
      ])
      .then(
        axios.spread((responseOne, responseTwo, responseThree, responseFor) => {
          console.log("responseOne");
          console.log(responseOne.data.data[0]);
          console.log(responseTwo.data.data);
          console.log(responseThree.data.data[0]);
          console.log(responseFor.data.data);
          this.posts = responseOne.data.data[0];
          this.airports = responseTwo.data.data;
          this.airlines = responseThree.data.data;
          this.seats = responseFor.data.data;
        })
      )
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
      callAPI.put("ticket/" + id, data).then(res => {
        console.log(res.data);
        this.$router.push("/admin/ticket");
      });
    }
  }
};
</script>

<style scoped></style>