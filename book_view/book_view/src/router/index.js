import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
// import Home from '../pages/index'
Vue.use(Router)
Vue.use(VueResource)
const routes = [
  {
    path: '/',
    component: resolve => require(['../pages/index'], resolve),
    meta: {
      title: 'home'
    }
  }
]
export default new Router({
  routes
})
