<template>
    <div>
        <h1>
            Mananager Ticket(Đặt Vé)
        </h1>
        <div>
      <form v-on:submit="saveForm()" class="formticket">
        <div class="form-group">
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
          <span>Selected: {{ ticket.airline }}</span>
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Loại Ghế</label>
          <!-- <select
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
          <span>Selected: {{ ticket.seat }}</span> -->
        </div>
        <div class="form-group">
          <!-- <label for="exampleFormControlSelect1">Điểm đi</label>
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
          <span>Selected: {{ ticket.start }}</span> -->
        </div>
        <div class="form-group">
          <!-- <label for="exampleFormControlSelect1">Điểm đến</label>
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
          <span>Selected: {{ ticket.end }}</span> -->
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">NGày giờ</label>
          <!-- <input
            type="datetime-local"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Date"
            v-model="ticket.date"
          /> -->
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Số lượng ghế</label>
          <!-- <input
            type="number"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Number_seat"
            v-model="ticket.number_seat"
          /> -->
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Giá ghế</label>
          <!-- <input
            type="number"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Price"
            v-model="ticket.price"
          /> -->
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>

      <table class="table table-responsive bordered highlight centered hoverable z-depth-2">
                <thead>
                    <tr class="table-primary abc">
                        <th>id</th>
                        <th>Hãng Bay</th>
                        <th>Loại Ghế</th>
                        <th>Điểm đi</th>
                        <th>Điểm đến</th>
                        <th>NGày giờ</th>
                        <th>Số lượng ghế</th>
                        <th>Giá ghế</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="table-light abc" v-for="post in posts" :key="post.id">
                        <!-- <td>{{index}}</td> -->
                        <td>{{ post[0] }}</td>
                        <td>{{ post[1] }}</td>
                        <td>{{ post[2] }}</td>
                        <td>{{ post[3] }}</td>
                        <td>{{ post[4] }}</td>
                        <td>{{ Date(post[5]) }}</td>
                        <td>{{ post[6] }}</td>
                        <td>{{ post[7] }}</td>
                        <td style="width: 18%;">
                            <a href="" class="btn waves-effect waves-light yellow darken-2" @click="updateTutorial(post[0])"><i class="fas fa-pen-square">edit</i>
                            </a>
                            <a href="" class="btn waves-effect waves-light red darken-2" @click="deleteTutorial(post[0])"><i class="fas fa-trash">delete</i>
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
    </div>
    </div>
</template>
<script>
import Axios from 'axios';
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
      Axios.get(`http://localhost:5000/category/findAllAirline`).then(response => {
        console.log(response.data.data);
        this.airlines = response.data.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
      Axios.get(`http://localhost:3000/ticket`).then(response => {
        console.log(response.data.data);
        console.log(response.data.data);
        this.posts = response.data.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
}
</script>
<style scoped>
    .formticket{
        border: 2px solid;
        /* background: blue; */
    }
</style>