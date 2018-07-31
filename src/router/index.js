import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home/Home'
import City from '@/page/City/City'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    }
  ]
})
