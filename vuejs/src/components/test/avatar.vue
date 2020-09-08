<template>
  <div>
      <button @click="choose" id="change">Choose Avatar</button>
      {{anhthe.src}}
      <input ref="changeimg" type="file" id="f" @change="change"> <br>
      <!-- <button @click="change">Change</button> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    data(){
        return {

        }
    },
    computed:{
        ...mapGetters(["anhthe"])
    },
    methods:{
        choose(e){
            console.log(this.$refs.changeimg.click());
            
        },
        change(){
            if(document.getElementById('f').value!=''){   
                var demo=document.getElementById('f').value;
                this.anhthe.src= require("@/assets/"+demo.substr(12))
            }
        },
    },
    watch:{
        de:(e)=>{
            console.log("aa");
            
        }
    }
}
</script>

<style scoped>
    #change{
        padding: 15px;
        background: #000;
        color: #ffffff;
        text-align: center;
        transition: all 0.5s;
    }
    #change:hover{
        background: pink;
        color: rgb(59, 3, 59);
    }
    #f{
        display: none;
    }
</style>