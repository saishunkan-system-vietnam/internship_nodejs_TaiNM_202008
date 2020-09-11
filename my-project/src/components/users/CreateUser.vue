<template>
  <div>
    <div class="container">
    <h1>Create User</h1>
        <div v-if="errors.length">
           <div class="alert alert-danger" role="alert">
             {{ errors[0] }}
          </div>
        </div>
    <form @submit="addUser">    
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputEmail4">Email</label>
          <input type="email" class="form-control" id="inputEmail4" placeholder="Email" v-model="email">
        </div>
        <div class="form-group col-md-6">
          <label for="inputPassword4">Password</label>
          <input type="password" class="form-control" id="inputPassword4" placeholder="Password" v-model="password">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" placeholder="Họ và Tên" v-model="name">
        </div>
        <div class="form-group col-md-6">
          <label for="phone">Phone</label>
          <input type="number" class="form-control" id="phone" placeholder="Số điện thoại" v-model="phone">
        </div>
      </div>
      <div class="form-group">
        <label for="inputAddress">Address</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="Số nhà, ..." v-model="address">
      </div>
      <div class="form-row">
        <div class="form-group col-md-2">
          <label for="level">Level</label>
          <select id="level" class="form-control" v-model="level">
            <option disabled>Choose...</option>
            <option value="1">Admin</option>
            <option value="2">Member</option>
          </select>
        </div>
      </div>
      <button type="submit" @click="addUser" class="btn btn-primary">Add User</button>
    </form>
    </div>
  </div>
</template>

<script>
  import callAPI from '../../conf/axios';
  import VueCookies from 'vue-cookies';
  export default {
      data() {
          return {
              email: "",
              password: "",
              name: "",
              phone:"",
              address: "",
              level: "Choose...",
              errors: []
          }
      },

      methods: {
          addUser: async function(e) {
            if (!this.name || !this.email || !this.password || !this.phone || !this.address || !this.level) {
              this.errors.push("Dữ liệu nhập vào không hợp lệ !");
            }
              var url = this;
              var errors = this.errors;
                let user = callAPI.post('users', {
                    headers: {
                        'Access-Control-Allow-Origin' : 'http://127.0.0.1:3000',
                        'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                    },
                    "email": this.email,
                    "password": this.password,
                    "phone": this.phone,
                    "name": this.name,
                    "address": this.address,
                    "level": this.level
                }).then(function (response) {
                    // console.log(response.data);
                    // response.data.mess === 'success' ? url.$router.push('/admin/users') : url.$router.push('/login') 
                    if (response.data.mess === 'success') {
                        url.$router.push('/admin/users')
                    }
                });
                e.preventDefault();
          }
      }
  }

</script>

<style scoped>
  table {
    margin-bottom: 40px;
  }

  .check {
    margin-left: 10px;
    font-size: 12px;
    color: red;
  }

</style>
