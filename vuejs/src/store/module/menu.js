const state = {
    menu:[
        {id:0,item:'Trang chủ',link:'/'},
        {id:1,item:'Điện thoại',link:'/phone'},
        {id:2,item:'Phụ kiện',link:'/phukien'},
        {id:3,item:'Chăm sóc khách hàng',link:'/cskh'},
        {id:4,item:'Liên hệ',link:'/lienhe'},
    ],
};
const getters ={
    menu:s=>{
        return s.menu
    }
};
const mutations ={
    
};
const actions = {
    
};
export default{
    state,getters,mutations,actions
}