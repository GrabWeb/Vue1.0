/**
 * 路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

//声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  //所有路由
  routes: [
    {path: '/', redirect: '/MSite', meta: {show: true}},
    {path: '/MSite', component: MSite, meta: {show: true}},
    {path: '/Search', component: Search, meta: {show: true}},
    {path: '/Order', component: Order, meta: {show: true}},
    {path: '/Profile', component: Profile, meta: {show: true}},
    {path: '/Login', component: Login, meta: {show: false}}
  ],
  linkActiveClass: 'mui-active'
})
