<template>
    <div>
        <h1>Create Ticket </h1>
        <div>
            <form>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Hãng Bay</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    <!-- <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"> -->
                </div>
                <div class="form-group">
                     <label for="exampleFormControlSelect1">Loại Ghế</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Điểm đi</label>
                    <select class="form-control" id="exampleFormControlSelect1" >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Điểm đến</label>
                    <select class="form-control" id="exampleFormControlSelect1" >
                        <option v-for="airport of airports"  v-bind:key="airport.id" v-bind:value="airport[0]" >{{ airport[1] }}</option>
                    </select>
                    <!-- <span>Selected: {{ selected }}</span> -->
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">NGày giờ</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Số lượng ghế</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Password">
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Giá ghế</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
const urlAirport = `http://localhost:3000/airport`;

export default {
    data() {
        return {
        selected: '',
        airports: [],
        errors: [],
            };
    },
    mounted () {
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
}
</script>

<style scoped>
    
</style>