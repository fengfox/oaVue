import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/index'
import Ticket from '@/components/ticket'
import AirLine from '@/components/airLine'
import AirLineSearch from '@/components/airLineSearch'
import AirLineResult from '@/components/airLineResult'
import AirLineAdd from '@/components/airLineAdd'
Vue.use(Router)

export default new Router({
  routes: [
    
	{
		path:'/',
		name:'Index',
		component:Index
	},
  {
    path:'/ticket',
    name:'Ticket',
    component:Ticket
  },
  {
    path:'/airLine',
    name:'AirLine',
    component:AirLine
  },
  {
    path:'/airLineSearch',
    name:'AirLineSearch',
    component:AirLineSearch
  },
  {
    path:'/airLineResult',
    name:'AirLineResult',
    component:AirLineResult
  },
  {
    path:'/airLineAdd',
    name:'AirLineAdd',
    component:AirLineAdd
  }
  ]
})
