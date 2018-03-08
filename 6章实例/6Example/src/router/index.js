import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import User from '@/components/User'
import NoVIP from '@/components/NoVIP'
import VIP from '@/components/VIP'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/user/:id',
      component: User,
      children:[
        {
          path:'vip',
          component:VIP
        },
        {
          path:'novip',
          component:NoVIP
        }
      ]
    }
  ]
})
