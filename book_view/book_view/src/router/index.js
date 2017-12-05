import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import MovieDetail from '../pages/movieDetail.vue'
import NewDetail from '../pages/newDetail.vue'
import MovieList from '../pages/MoviesList.vue'
import LoginPage from '../pages/LoginPage.vue'
import UserInfo from '../pages/UserInfo.vue'
// import Home from '../pages/index'
Vue.use(Router)
Vue.use(VueResource)
Vue.http.options.emulateJSON = true
const routes = [
  {
    path: '/',
    component: resolve => require(['../pages/index'], resolve),
    meta: {
      title: 'home'
    }
  },
  {
    path:'/movieDetail',
    component:MovieDetail
  },
  {
    path:'/newDetail',
    component:NewDetail
  },
  {
    path:'/movieList',
    component:MovieList
  },
  {
    path:'/loginPage',
    component:LoginPage
  },
  {
    path:'/userInfo',
    component:UserInfo
  }
]
const router = new Router({routes})
// router.beforeEach((to, from, next) => {
//
// })
export default router
