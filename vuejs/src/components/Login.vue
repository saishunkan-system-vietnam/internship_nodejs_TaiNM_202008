<template>
  <div class="lg">
    <h2>Đăng nhập</h2>
    <hr>
  <form >
  <div class="form-group">
    <label>User Name</label>
    <input type="text" class="form-control" id="name" placeholder="Username" v-model="username">
    <div id="namecheck"></div>
  </div>
  <div class="form-group">
    <label>Password</label>
    <input type="password" class="form-control" id="pass" placeholder="Password" v-model="password">
    <div id="passcheck"></div>
  </div>
  <button type="submit" @click="login" class="btn btn-primary login">Login</button>
  <button type="button" @click="cancel" class="btn btn-primary login">Cancel</button>
</form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  mounted(){
    if(this.$store.getters.username)
    this.username = this.$store.getters.username
    if(this.$store.getters.password)
    this.password = this.$store.getters.password
  },
    data(){
        return{
            username:"",
            password:""
        }
    },
    methods:{
      cancel(){
        this.$router.push('/')
      },
      login(){
        var namecheck=document.getElementById('namecheck');
        var passcheck=document.getElementById('passcheck');
        namecheck.innerHTML="";
        passcheck.innerHTML="";
        console.log(this.username+" "+this.password);
        var checkname= /.{1,30}/;
        var checkpass=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{4,})");
        console.log(checkname.test(this.username));
        console.log(checkpass.test(this.password));
        
        if(!checkname.test(this.username)){
          namecheck.innerHTML="tên không hợp lệ"
        }
        if(!checkpass.test(this.password)){
          passcheck.innerHTML="mật khẩu không hợp lệ"
        }
        if(checkname.test(this.username) && checkpass.test(this.password)){
          this.$router.push('/cpaner1')
          this.$store.dispatch("setuser",this.username)
          this.$store.dispatch('setpass',this.password)
        }
        //
      }
    }
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