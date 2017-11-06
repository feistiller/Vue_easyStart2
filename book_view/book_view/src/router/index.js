import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: MovieIndex
    },
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    }
    ,    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    }
    ,{
      path: '/admin/', component: Admin,
      children: [
        {
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'profile',
          component: UserProfile
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'posts',
          component: UserPosts
        }
      ]
    }
  ]
})
