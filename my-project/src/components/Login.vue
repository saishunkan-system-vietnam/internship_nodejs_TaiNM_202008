<template>
  <div class="lg">
    <h2>Đăng nhập</h2>
    <hr>
    <form  @submit="login" >
        <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" id="email" placeholder="Email" v-model="email">
        </div>
        <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" id="password" placeholder="Password" v-model="password">
        </div>
        <button type="submit" @click="login" class="btn btn-primary login">Login</button>
        <button type="button" @click="cancel" class="btn btn-primary login">Cancel</button>
    </form>
  </div>
</template>

<script>
import callAPI from '../conf/axios';
    export default {
        data(){
            return{
                email:"",
                password:""
            }
        },
        methods: {
            cancel(){
               this.$router.push('/');
            },
            login: async function(e) {
                var url = this;
                let logger = callAPI.post('users/login', {
                    headers: {
                        'Access-Control-Allow-Origin' : 'http://127.0.0.1:3000',
                        'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                    },
                    "email": this.email,
                    "password": this.password,
                    // withCredentials: true
                }).then(function (response) {
                    console.log(response.data);
                    response.data.mess === 'success' ? url.$router.push('/') : url.$router.push('/login') 
                });
                e.preventDefault();
            }
        },
    }
</script>

<style>
.lg{
    width: 50%;
    text-align: left;
    margin: auto;
    margin-top: 100px;
    border: solid 0.5px #000;
    padding: 10px;
}
.login{
    color: #ffffff;
}
.login:hover{
    color: #000000;
    text-decoration: none;
}
#namecheck,#passcheck{
  color: red;
  font-size: 12px;
}
</style>