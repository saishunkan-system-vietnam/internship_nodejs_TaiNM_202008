const state = {
    username:localStorage.getItem('username'),
    password:localStorage.getItem('password'),
};
const getters ={
    username:(s)=>{
        return s.username
    },
    password:(s)=>{
        return s.password
    }
};
const mutations = {
    setuser:(s,name)=>{
        s.username = name;
        localStorage.setItem('username',name)
    },
    setpass:(s,pass)=>{
        s.password = pass;
        localStorage.setItem('password',pass)
    }
};
const actions = {
    setuser:({commit},name)=>{
        commit('setuser',name)
    },
    setpass:({commit},pass)=>{
        commit('setpass',pass)
    }
};
export default{
    state,getters,mutations,actions
}