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
      path: '*',
      name: '/404',
      components: {
        default: Error
      },
    },
  ]
})
