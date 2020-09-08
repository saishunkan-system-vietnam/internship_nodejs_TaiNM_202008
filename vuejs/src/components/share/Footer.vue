<template>
  <div>
      <div class="row fo-4">
        <img class="col-12" src="img/01_Homepages_v1_71.png" alt="">
    </div>
    <div class="footer container">
        <div class="row fo-1">
            <div class="col-md-4">
                <div class="fo-11">
                    <div class="fo-111">SHOp</div>
                </div>
                <div style="text-align: left;" v-html="fo1"></div>
                <div>
                    <i v-for="i in listf1" :key="i.id" :class="i.icon"></i>
                </div>

            </div>
            <div class="col-md-4 fo-2">
                <div class="fo-21">Useful Links</div>
                <div class="row">
                    <div v-for="i in menu2" :key="i.id" class="col-sm-6 fo-22">
                        <router-link
                        class="fo-222"
                        :to="i.link">{{i.item}}</router-link>
                    </div>
                </div>
            </div>
            <div class="col-md-4 fo-3">
                <div class="fo-31">Contact Us</div>
                <div v-for="i in listf3" :key="i.id" class="fo-32">
                    <div class="fo-321"><i :class="i.icon"></i></div>
                    <div class="fo-322">{{i.text}}</div>
                </div>
                
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name:"cfooter",
    data(){
        return{
            fo1:`Web pages can be created and modified by using professional HTML editors.<br>

                However, for learning HTML we recommend a simple text editor like Notepad (PC) or TextEdit (Mac).<br>

                We believe using a simple text editor is a good way to learn HTML.<br>

                Follow the steps below to create your first web page with Notepad or TextEdit.`,
            listf1:[
                {id:0,icon:"fab fa-facebook"},
                {id:1,icon:"fab fa-google-plus"},
                {id:2,icon:"fab fa-facebook"},
                {id:3,icon:"fab fa-twitter"},
            ],
            listf3:[
                {id:0,icon:"fas fa-map",text:"622 Dixie Path, South Tobinchester, UT 98336"},
                {id:1,icon:"fas fa-phone-alt",text:"+1 49-845-9498"},
                {id:2,icon:"fas fa-envelope",text:"example@email.com"},
            ]
        }
    },
    computed:{
        ...mapGetters(['menu2'])
    }
}
</script>

<style>
.footer .fo-1 .fo-11 { display: inline-flex; }

.footer .fo-1 .fo-11 .fo-111 { font-weight: bolder; font-size: 35px; }

.footer .fo-1 .fo-11 .fo-112 { width: 15px; height: 42px; position: relative; }

.footer .fo-1 .fo-11 .fo-112 .fo-1121 { width: 8px; height: 8px; border-radius: 50%; background-color: red; position: absolute; bottom: 0; right: 0; }

.footer .fo-2 .fo-21 { margin-top: 15px; font-size: 22px; font-weight: bold; }

.footer .fo-2 .fo-22 { margin-top: 5px; text-align: left;}

.footer .fo-2 .fo-222{color: #000000;}

.footer .fo-3{display: grid;}

.footer .fo-3 .fo-31 { margin-top: 15px; font-size: 22px; font-weight: bold; }

.footer .fo-3 .fo-32 { display: inline-flex; text-align: left;; margin-top: 13px; }

.footer .fo-3 .fo-32 .fo-321 { margin-right: 10px; }

.fo-4 { margin-top: 90px; margin-left: 0 !important; margin-right: 0 !important; }

.fo-4 img { padding: 0; }
</style>