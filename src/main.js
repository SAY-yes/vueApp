// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fetchJsonp from 'fetch-jsonp'
import store from "@/routes/store"
import axios from 'axios'
import swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

import Header from "@/components/Header.vue"
import Content from "@/components/Content.vue"
import ProductList from "@/components/ProductList.vue"
import TabBar from "@/components/TabBar.vue"

// 通过原型，给Vue的所有组件提供公用的方法
Vue.prototype.fetchJsonp = fetchJsonp
Vue.prototype.axios = axios
Vue.prototype.swiper = swiper
// 全局导入公用组件，全局注册
Vue.component("v-header",Header)
Vue.component("v-content",Content)
Vue.component("v-product-list",ProductList)
Vue.component("v-tab-bar",TabBar)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
