import Vue from 'vue'
import Router from 'vue-router'
import GetAirline from '@/components/GetAirline'
import Table from '@/components/Table'
import Test from '@/components/Test'
import UpdateAirline from '@/components/UpdateAirline'
import UpdateSeat from '@/components/UpdateSeat'
import Seat from '@/components/Seat'
import AddTypeOfSeat from '@/components/AddTypeOfSeat'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/airline',
      name: 'airline',
      component: Table
    },
    {
      path: '/updateAirline/:id',
      name: 'updateAirline',
      component: UpdateAirline
    },
    {
      path: '/seat',
      name: 'seat',
      component: Seat
    },
    {
      path: '/updateSeat/:id',
      name: 'updateSeat',
      component: UpdateSeat
    },
    {
      path: '/insertCategory',
      name: 'insertCategory',
      component: AddTypeOfSeat
    },

  ]
})
