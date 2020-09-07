import Vue from 'vue'
import Router from 'vue-router'
import Users from '@/components/Users'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Users',
      components: {
        default: Users
      }
    }
  ]
})
