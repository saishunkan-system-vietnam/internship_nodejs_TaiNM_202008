import Vue from 'vue';
import Vuex from 'vuex';
import menu from './module/menu';
import menu2 from './module/menu2';
import anh from './module/anh'
import cart from './module/cart'
import user from './module/user'
Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        token:'a',
    },
    getters:{
        token:s=>{
            return s.token;
        }
    },
    mutations:{
        
    },
    actions:{
        
    },
    modules:{
        menu,menu2,anh,cart,user
    }
});