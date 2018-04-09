import Vue from 'vue'
import Router from 'vue-router'
import POS from '@/components/page/POS'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Params from '@/components/Params'
import Error from '@/components/Error'
import Count from '@/components/Count'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'POS',
      component: POS
    },{
      path:'/params/:newsId(\\d+)/:newsTitle',
      component: Params
    },{
      path: '/goHome',
      redirect: '/'
    },{
      path: '/goParams/:newsId(\\d+)/:newsTitle',
      redirect: '/params/:newsId(\\d+)/:newsTitle'
    },{
      path: '/hi1',
      component: Hi1,
      alias: '/jspang'
    },{
      path: '*',
      component: Error
    },{
      path: '/count',
      component: Count
    }
  ]
})
