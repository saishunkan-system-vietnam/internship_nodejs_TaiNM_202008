import Vue from 'vue'
import Router from 'vue-router'
import Users from '@/components/users/Users'
import CreateUser from '@/components/users/CreateUser'
import UpdateUser from '@/components/users/UpdateUser'
import Statistic from '@/components/statistic/Statistic'
import Login from '@/components/Login'
// import Header from '@/components/master/Header'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [ 
    {
      path: '/',
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
      path: '/users',
      name: 'users',
      components: {
        default: Users
      },
      meta: {
        plainLayout: true,
      },
    },
    {
      path: '/users/create',
      name: 'CreateUser',
      components: {
        default: CreateUser
      },
      meta: {
        plainLayout: true,
      },
    },
    {
      path: '/users/update/:id',
      name: 'UpdateUser',
      components: {
        default: UpdateUser
      },
      meta: {
        plainLayout: true,
      },
    }
  ]
})
