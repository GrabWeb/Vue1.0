/**
 * 入口JS
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import '../node_modules/mint-ui/lib/style.css'
import Mint from 'mint-ui';
Vue.use(Mint);

new Vue({
    el: '#app',
    render: h => h(App),
    router
})
