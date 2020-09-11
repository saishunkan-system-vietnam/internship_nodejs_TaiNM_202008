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
import VueCookies from 'vue-cookies'
    export default {
        data(){
            return{
                email:"",
                password:""
            }
        },
        created () {
            var cookie = $cookies;
            if (cookie.isKey('login')) {
                this.$router.push('/');
            } else {
                this.$router.push('/login');
            }
        },
        methods: {
            cancel(){
               this.$router.push('/');
            },
            login: async function(e) {
                var url = this;
                var cookie = $cookies;
                var email = this.email;
                let logger = callAPI.post('users/login', {
                    headers: {
                        'Access-Control-Allow-Origin' : 'http://127.0.0.1:3000',
                        'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                    },
                    "email": this.email,
                    "password": this.password,
                    // withCredentials: true
                }).then(function (response) {
                    console.log(response.data.data.user.level);
                    if (response.data.mess == 'success' && response.data.data.user.level == 1) {
                        cookie.set('login',email);
                        url.$router.push('/admin');
                    }else if (response.data.mess == 'success' && response.data.data.user.level == 2) {
                        cookie.set('login',email);
                        url.$router.push('/');
                    }else {
                        url.$router.push('/login');
                    }
                    // console.log(cookie.get('login')); 
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