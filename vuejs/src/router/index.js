import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/share/Header'
import Footer from '@/components/share/Footer'
import Banner from '@/components/share/Banner'
import Home from '@/components/Home'
import Phone from '@/components/Phone'
import Hang from '@/components/Dienthoai/Hang'
import Ds from '@/components/CMD/dssanpham'
import Add from '@/components/CMD/add'
import Change from '@/components/CMD/change'
import Sony from '@/components/Dienthoai/Sony'
import Error from '@/components/Error'
import Phukien from '@/components/Phukien'
import Cskh from '@/components/Cskh'
import Lienhe from '@/components/Lienhe'
import Login from '@/components/Login'
import Cpaner from '@/components/Cpaner'
import item2 from '@/components/item/item2'
import Cpaner1 from '@/components/test/cpaner'
import Avatar1 from '@/components/test/avatar'
import Dh1 from '@/components/test/dh'
import Hang1 from '@/components/test/hang'
import add from '@/components/test/add'
import Tim from '@/components/Tim'

//
import testHeader from '@/components/share/testHeader'
import Ticket from '@/components/Ticket/Ticket'
import TicketCreate from '@/components/Ticket/TicketCreate'
import TicketUpdate from '@/components/Ticket/TicketUpdate'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default:Home,Banner
      }
    },
    {
      path: '/ticket',
      name: 'ticket',
      components: {
        default:Ticket,Footer,Banner,
      }
    },
    {
      path: '/ticketCreate',
      name: 'TicketCreate',
      components: {
        default:TicketCreate,testHeader,Footer,Banner,
      }
    },
    {
      path: '/ticketUpdate/:id',
      name: 'TicketUpdate',
      components: {
        default:TicketUpdate,testHeader,Footer,Banner,
      }
    },
    {
      path: '/phone',
      name: 'phone',
      components: {
        default:Phone,testHeader,Footer,Banner,
      }
    },
    {
      path:'/phone/:name',
      name:'hang',
      components: {
        default:Hang,Header,Footer,Banner,
      }
    },
    {
      path: '/phukien',
      name: 'phukien',
      components: {
        default:Phukien,Header,Footer,Banner
      }
    },
    {
      path: '/cskh',
      name: 'cskh',
      components: {
        default:Cskh,Header,Footer
      }
    },
    {
      path: '/lienhe',
      name: 'lienhe',
      components: {
        default:Lienhe,Header,Footer
      }
    },
    {
      path:"/tim/:key",
      name:"tim",
      components:{
        default:Tim,Header,Footer
      }
    },
    {
      path: '/item/:name',
      name: 'item2',
      components: {
        default:item2,Header,Footer
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/cpaner',
      name: 'cpaner',
      component: Cpaner,children:[
        {path:'ds',name:'ds',component:Ds},
        {path:'add',name:'add',component:Add},
        {path:'change/:id',name:'change',component:Change}
      ]
    },
    {
      path: '/cpaner1',
      name: 'cpaner1',
      component:Cpaner1,children:[
        {path:'dh',name:'dh',component:Dh1},
        {path:"avatar",name:'avatar',component:Avatar1},
        {path:"hang",name:'hang',component:Hang1},
        {path:"add",name:"add",component:add}
      ]
    },
    {
      path:'/error',
      name:'error',
      component:Error
    },
    {
      path:'*',
      redirect:'/error'
    }
  ]
})
