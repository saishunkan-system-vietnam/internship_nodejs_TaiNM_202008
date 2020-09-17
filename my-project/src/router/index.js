import Vue from 'vue'
import Router from 'vue-router'
import Users from '@/components/users/Users'
import CreateUser from '@/components/users/CreateUser'
import UpdateUser from '@/components/users/UpdateUser'
import Statistic from '@/components/statistic/Statistic'
import Orders from '@/components/orders/Orders'
import Login from '@/components/Login'
import Index from '@/components/index/Index'
import Error from '@/components/page/Error'
import Ticket from '@/components/Ticket/Ticket'
import TicketCreate from '@/components/Ticket/TicketCreate'
import TicketUpdate from '@/components/Ticket/TicketUpdate'
import Table from '@/components/category/Table'
import UpdateAirline from '@/components/category/UpdateAirline'
import UpdateSeat from '@/components/category/UpdateSeat'
import Seat from '@/components/category/Seat'
import AddTypeOfSeat from '@/components/category/AddTypeOfSeat'
import Category from '@/components/category/Category'
import OrderClient from '@/components/OrderClient/OrderClient'
import Management from '@/components/OrderClient/Management'
import Cart from '@/components/OrderClient/Cart'
// import Header from '@/components/master/Header'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [ 
    {
      path: '/',
      name: 'index',
      components: {
        default: Index
      }
    },
    {
      path: '/order',
      name: 'OrderClient',
      components: {
        default: OrderClient
      },
      meta: {
        client: true,
      },
    },
    {
      path: '/order/management',
      name: 'Management',
      components: {
        default: Management
      },
      meta: {
        client: true,
      },
    },
    {
      path: '/admin',
      name: 'home',
      components: {
        default: Statistic
      },
      meta: {
        plainLayout: true,
      },
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/admin/users',
      name: 'Users',
      components: {
        default: Users
      },
      meta: {
        plainLayout: true,
      },
    },
    {
      path: '/admin/users/create',
      name: 'CreateUser',
      components: {
        default: CreateUser
      },
      meta: {
        plainLayout: true,
      },
    },
    {
      path: '/admin/users/update/:id',
      name: 'UpdateUser',
      components: {
        default: UpdateUser
      },
      meta: {
        plainLayout: true,
      },
    },
    {
      path: '/admin/orders',
      name: 'Orders',
      components: {
        default: Orders
      },
      meta: {
        plainLayout: true,
      },
    },
    {
      path: '/admin/ticket',
      name: 'ticket',
      components: {
        default:Ticket
      },
      meta: {
        plainLayout: true,
      },
    },
    {
      path: '/admin/ticketCreate',
      name: 'TicketCreate',
      components: {
        default:TicketCreate
      },
      meta: {
        plainLayout: true,
      },
    },
    {
      path: '/admin/ticketUpdate/:id',
      name: 'TicketUpdate',
      components: {
        default:TicketUpdate
      },
      meta: {
        plainLayout: true,
      },
    },
    {
      path: '/admin/airline',
      name: 'airline',
      component: Table,
      meta: {
        plainLayout: true,
      },
    },
    {
      path: '/admin/updateAirline/:id',
      name: 'updateAirline',
      component: UpdateAirline,
      meta: {
        plainLayout: true,
      },
    },
    {
      path: '/admin/seat',
      name: 'seat',
      component: Seat,
      meta: {
        plainLayout: true,
      },
    },
    {
      path: '/admin/updateSeat/:id',
      name: 'updateSeat',
      component: UpdateSeat,
      meta: {
        plainLayout: true,
      },
    },
    {
      path: '/admin/insertCategory',
      name: 'insertCategory',
      component: AddTypeOfSeat,
      meta: {
        plainLayout: true,
      },
    },
    {
      path: '/admin/category',
      name: 'getCategory',
      component: Category,
      meta: {
        plainLayout: true,
      },
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
      meta: {
        client: true,
      },
    },
    {
      path: '*',
      name: '/404',
      components: {
        default: Error
      },
    },
  ]
})
