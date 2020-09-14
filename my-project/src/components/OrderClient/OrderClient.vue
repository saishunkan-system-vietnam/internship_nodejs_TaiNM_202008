<template>
  <div class="container">
    <h1>
      Client Ticket(Đặt Vé)
    </h1>
    <div>
      <form class="formticket">
        <div class="form-group">
          <label for="exampleFormControlSelect1">Hãng Bay</label>
          <select
            class="form-control"
            id="exampleFormControlSelect1"
            v-model="ticket.airline"
          >
            <option value="">Choose...</option>
            <option
              v-for="airline of airlines"
              v-bind:key="airline.id"
              v-bind:value="airline.alName"
              >{{ airline.alName }}
            </option>
          </select>
          <span>Selected: {{ ticket.airline }}</span>
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Điểm đi</label>
          <select
            class="form-control"
            id="exampleFormControlSelect1"
            v-model="ticket.start"
          >
            <option value="">Choose...</option>
            <option
              v-for="airport of airports"
              v-bind:key="airport.id"
              v-bind:value="airport[1]"
              >{{ airport[1] }}
            </option>
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
            <option value="">Choose...</option>
            <option
              v-for="airport of airports"
              v-bind:key="airport.id"
              v-bind:value="airport[1]"
              >{{ airport[1] }}
            </option>
          </select>
          <span>Selected: {{ ticket.end }}</span>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">NGày giờ</label>
          <input
            type="date"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Date"
            v-model="ticket.date"
          />
        </div>
        <button  class="btn btn-primary" v-on:click.prevent="saveForm">
          Submit
        </button>
        <button class="btn btn-primary" type="reset">Reset</button>
      </form>
        <br>
      <table
        class="table"
      >
        <thead style="text-align: center">
          <tr>
            <th>id</th>
            <th>Hãng Bay</th>
            <th>Loại Ghế</th>
            <th>Điểm đi</th>
            <th>Điểm đến</th>
            <th>Ngày giờ</th>
            <th>Số lượng vé</th>
            <th>Giá vé</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody style="text-align: center">
          <tr v-for="post in posts" :key="post.id">
            <!-- <td>{{index}}</td> -->
            <td>{{ post[0] }}</td>
            <td>{{ post[1] }}</td>
            <td>{{ post[2] }}</td>
            <td>{{ post[3] }}</td>
            <td>{{ post[4] }}</td>
            <td>{{ Intl.DateTimeFormat('vi-VN',{  year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false, timeZone: 'UTC'}).format(post[5]) }}</td>
            <td>{{ post[6] }}</td>
            <td>{{ post[7] }}</td>
            <td>
              <a
                href=""
                class="btn waves-effect waves-light yellow darken-2"
                @click.prevent="orderClient(post[0],post[1],post[2],post[3],post[4],post[5],post[7])"
                ><i class="fas fa-pen-square">Đặt vé</i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import callAPI from "../../conf/axios";
export default {
  data() {
    return {
      posts: [],
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
        callAPI.get(`ticket`),
        callAPI.get(`airport`),
        callAPI.get(`category/findAllAirline`),
        callAPI.get(`category/findAllSeat`)
      ])
      .then(
        axios.spread((responseOne, responseTwo, responseThree, responseFor) => {
          this.posts = responseOne.data.data;
          this.airports = responseTwo.data.data;
          this.airlines = responseThree.data.data;
          this.seats = responseFor.data.data;
        })
      );
  },
  methods: {
     saveForm() {
      const data = {
        airline: this.ticket.airline,
        seat: this.ticket.seat,
        start: this.ticket.start,
        end: this.ticket.end,
        date: this.ticket.date,
        price: this.ticket.price
        };
        callAPI.get("ticket",{
          params: data
          }).then(response => {
          console.log("aa" + response.data);
          this.posts = response.data.data;
        });
      },
    orderClient(id,hang,loaiGhe,start,end,date,price){
      callAPI.post('orders',{
        'id_ticket': id,
        'hang': hang,
        'loaiGhe': loaiGhe,
        'start': start,
        'end': end,
        'date': date,
        'price':price
      });
    }
  }
};
</script>
