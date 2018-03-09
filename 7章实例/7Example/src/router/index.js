import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ShowText from '@/components/ShowText'
import ShowHTML from '@/components/ShowHTML'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // 字符串显示
    {
      path: '/ShowText',
      component: ShowText
    },
    // HTML显示
    {
      path: '/ShowHTML',
      component: ShowHTML
    }
  ]
})
