const state = {
    anhthe:{src:require('@/assets/a1.jpg'),name:'a1'},
};
const getters ={
    anhthe:s=>{
        return s.anhthe
    }
};
const mutations = {
//   mchange: (s, e) => {
//     s.anhthe.src = require(e);
//   }
};
const actions = {
//   mchange: ({ commit }, e) => {
//     commit("mchange", e);
//   }
};
export default{
    state,getters,mutations,actions
}