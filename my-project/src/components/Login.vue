<template>
  <div class="lg">
    <h2>Đăng nhập</h2>
    <hr>
    <form  @submit="login" >
        <div class="form-group" :class="{ 'form-group--error': $v.email.$error }">
            <label>Email</label>
            <input type="email" class="form-control" id="email" placeholder="Email" v-model.trim="email">
             <div class="alert alert-danger" v-if="!$v.email.minLength">
                <strong>Email</strong> phải lớn hơn 10 ký tự !!!
            </div>
             <div class="alert alert-danger" v-if="!$v.email.email">
                <strong>Email</strong> không đúng định dạng !!!
            </div>
        </div>
        <div class="form-group" :class="{ 'form-group--error': $v.password.$error }">
            <label>Password</label>
            <input type="password" class="form-control" id="password" placeholder="Password" v-model="password">
             <div class="alert alert-danger" v-if="!$v.password.minLength">
                <strong>Password</strong> phải lớn hơn 6 ký tự !!!
            </div>
        </div>
        <button type="submit" @click="login" class="btn btn-primary login">Login</button>
        <button type="button" @click="cancel" class="btn btn-primary login">Cancel</button>
    </form>
  </div>
</template>

<script>
import callAPI from '../conf/axios';
import VueCookies from 'vue-cookies'
import { required, minLength, email } from 'vuelidate/lib/validators';
    export default {
        data(){
            return{
                email:"",
                password:""
            }
        },
        beforeCreate () {
            if ($cookies.isKey('login')) {
                this.$router.push('/admin');
            }else{
                console.log('pls login!')
            }
        },
        validations: {
            email:{
                required,
                email,
                minLength: minLength(10)
            },
            password:{
                required,
                minLength: minLength(6)
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
                    // headers: {
                    //     'Access-Control-Allow-Origin' : 'http://127.0.0.1:3000',
                    //     'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                    // },
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
                        url.$router.push('/order');
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