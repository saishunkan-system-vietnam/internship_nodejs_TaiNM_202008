<template>
  <div>
    <h1>Create Ticket</h1>
    <div>
      <form v-on:submit="saveForm()">
        <div class="form-group">
          <label for="exampleFormControlSelect1">Hãng Bay</label>
          <select
            class="form-control"
            id="exampleFormControlSelect1"
            v-model="ticket.airline"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Loại Ghế</label>
          <select
            class="form-control"
            id="exampleFormControlSelect1"
            v-model="ticket.seat"
          >
            <option>1</option>
            <option>2</option>
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
            v-model="ticket.start">
            <option
              v-for="airport of airports"
              v-bind:key="airport.id"
              v-bind:value="airport[0]"
              >{{ airport[1] }}
            </option > 
          </select>
          <span>Selected: {{ ticket.start }}</span>
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
          <label for="exampleInputEmail1">NGày giờ</label>
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
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1"
            >Check me out</label
          >
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
const urlAirport = `http://localhost:3000/airport`;

export default {
  data() {
    return {
      selected: null,
      airports: [],
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
      .get(urlAirport)
      .then(response => {
        console.log(response.data.data);
        this.airports = response.data.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  },
  methods: {
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
      axios
        .post("http://localhost:3000/ticket", data)
        .then(res => {
            console.log(res.data);
            this.$router.push('/ticket');
        });
    }
  }
};
</script>

<style scoped></style>