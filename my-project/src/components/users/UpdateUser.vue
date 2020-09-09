<template>
  <div>
    <h1>Update User</h1>
    <form @submit="updateUser">
      <div class="form-row">
        <div class="form-group col-md-12">
          <label for="inputEmail4">Email</label>
          <input type="email" class="form-control" id="inputEmail4" placeholder="Email" v-model="user.email">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" placeholder="Họ và Tên" v-model="user.name">
        </div>
        <div class="form-group col-md-6">
          <label for="phone">Phone</label>
          <input type="number" class="form-control" id="phone" placeholder="Số điện thoại" v-model="user.phone">
        </div>
      </div>
      <div class="form-group">
        <label for="inputAddress">Address</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="Số nhà, ..." v-model="user.address">
      </div>
      <div class="form-row">
        <div class="form-group col-md-2">
          <label for="level">Level</label>
          <select id="level" class="form-control" v-model="user.level">
            <option disabled>Choose...</option>
            <option value="1">Admin</option>
            <option value="2">Member</option>
          </select>
        </div>
      </div>
      <button type="submit" @click="updateUser" class="btn btn-primary">Update User</button>
    </form>
  </div>
</template>

<script>
import callAPI from '../../conf/axios';
  export default {
      data() {
          return {
              user: []
          }
      },
    created() {
        let id = this.$route.params.id;
        callAPI.get('users/' + id).then(response => {
        // console.log(response.data.data[0]);
        this.user = response.data.data[0];
        // response.data.mess === "error"? this.$router.push('/login') : this.$router.push('/users');
      })
    },
      methods: {
          updateUser: async function(e) {
              var url = this;
              let id = this.$route.params.id;
              callAPI.put('users/'+id, {
                    headers: {
                        'Access-Control-Allow-Origin' : 'http://127.0.0.1:3000',
                        'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                    },
                    "data": this.user
                    
                }).then(function (response) {
                    // console.log(response.data.mess);
                    response.data.mess == 'success' ? url.$router.push('/users') : url.$router.push('/login') 
                    // url.$router.push('/') 
                });
                e.preventDefault();
          }
      },
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
