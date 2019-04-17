import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout'
import Home from '@/components/home'
import LayoutMessage from '@/components/layoutMessage'
import Calender from '@/components/calender'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/calender',
      name: 'Calender',
      component: Calender,
    },
    {
      path: '/layout/:dataname?',
      name: 'Layout',
      component: Layout,
      
      // children: [
      //     {
      //       path: '/layout/xinliceshi',
      //       name: 'Xinliceshi',
      //       component: Xinliceshi
      //     },
      //   ]
    },

    {
      path: '/layout/:dataname?/:messagename?',
      name: 'LayoutMessage',
      component: LayoutMessage
    },
    
  ]
})  
