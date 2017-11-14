import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import MovieDetail from '../pages/movieDetail'
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
  }
]
export default new Router({
  routes
})
