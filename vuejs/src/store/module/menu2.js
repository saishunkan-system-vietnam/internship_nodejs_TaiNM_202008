const state = {
    menu2:[
        {id:0,item:'Trang chủ',link:'/'},
        {id:1,item:'Apple',link:'/phone/apple'},
        {id:2,item:'Điện thoại',link:'/phone'},
        {id:3,item:'Samsung',link:'/phone/samsung'},
        {id:4,item:'Phụ kiện',link:'/phukien'},
        {id:5,item:'LG',link:'/phone/lg'},
        {id:6,item:'Chăm sóc khách hàng',link:'/cskh'},
        {id:7,item:'Sony',link:'/phone/sony'},
        {id:8,item:'Liên hệ',link:'/lienhe'},
    ],
};
const getters ={
    menu2:s=>{
        return s.menu2
    }
};
const mutations ={
    
};
const actions = {
    
};
export default{
    state,getters,mutations,actions
}