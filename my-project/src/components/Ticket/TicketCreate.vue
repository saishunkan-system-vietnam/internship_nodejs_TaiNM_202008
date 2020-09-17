<template>
  <div class="container">
    <h1>Create Ticket</h1>
    <div>
      <form v-on:submit="saveForm()">
        <div class="form-group" @click="findAllSeat">
          <label for="exampleFormControlSelect1">Hãng Bay</label>
          <select
            class="form-control"
            id="exampleFormControlSelect1"
            v-model="ticket.airline"
          >
            <option
              v-for="airline of airlines"
              v-bind:key="airline.id"
              v-bind:value="airline.alID"
              >{{ airline.alName }}
            </option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Loại Ghế</label>
          <select
            class="form-control"
            id="exampleFormControlSelect1"
            v-model="ticket.seat"
          >
            <option
              v-for="seat of seats"
              v-bind:key="seat.id"
              v-bind:value="seat.sID"
              >{{ seat.sName }}
            </option>
          </select>
          <!-- <span>Selected: {{ ticket.seat }}</span> -->
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Điểm đi</label>
          <select
            class="form-control"
            id="exampleFormControlSelect1"
            v-model="ticket.start">
            <option
              v-for="airport of airports"
              v-bind:key="airport.id"
              v-bind:value="airport[0]"
              >{{ airport[1] }}
            </option > 
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Điểm đến</label>
          <select
            class="form-control"
            id="exampleFormControlSelect1"
            v-model="ticket.end"
            >
            <option
              v-for="airport of airports"
              v-bind:key="airport.id"
              v-bind:value="airport[0]"
              >{{ airport[1] }}
            </option> 
          </select>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Ngày giờ</label>
          <input
            type="datetime-local"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Date"
            v-model="ticket.date"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Số lượng ghế</label>
          <input
            type="number"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Number_seat"
            v-model="ticket.number_seat"
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
            v-model="ticket.price"
          />
        </div>
        <button type="submit" class="btn btn-primary" style="float: right;">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import callAPI from '../../conf/axios';
export default {
  data() {
    return {
      airports: [],
      airlines: [],
      seats: [],
      ticket: {
        airline: null,
        seat: null,
        start: null,
        end: null,
        date: null,
        number_seat: null,
        price: null
      },
      errors: []
    };
  },
  mounted() {

     axios
      .all([
        callAPI.get(`airport`),
        callAPI.get(`category/findAllAirline`),
        // callAPI.get(`category/findAllSeat`)
      ])
      .then(
        axios.spread((responseOne, responseTwo) => {
          this.airports = responseOne.data.data;
          this.airlines = responseTwo.data.data;
          // this.seats = responseThree.data.data;
        })
      )
  },
  methods: {
    findAllSeat() {
      let airline_id = this.ticket.airline;
      console.log(airline_id);
      callAPI.get(`category/findSeatByAirline/`+ airline_id).then(Response => {
        console.log(Response.data.data);
        this.seats = Response.data.data;
      });
    },
    saveForm() {
      event.preventDefault();
      const data = {
        airline_id: this.ticket.airline,
        seat_id: this.ticket.seat,
        start: this.ticket.start,
        end: this.ticket.end,
        date: this.ticket.date,
        number_seat: this.ticket.number_seat,
        price: this.ticket.price
      };
      console.log(data);
      callAPI
        .post("ticket",data)
        .then(res => {
            console.log(res.data);
            this.$router.push('/admin/ticket');
        });
    }
  }
};
</script>

<style scoped></style>