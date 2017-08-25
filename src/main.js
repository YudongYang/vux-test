// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/HelloFromVux'
import MyHelloworld from './view/MyHelloworld'
import SelectService from './view/select-service'
import axios from 'axios'

Vue.use(VueRouter)
Vue.prototype.$invoke = axios

const routes = [{
  path: '/',
  component: Home
}, {
  path: '/helloworld',
  component: MyHelloworld
}, {
  path: '/select-service',
  component: SelectService
}]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
