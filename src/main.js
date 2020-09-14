import Vue from 'vue'
import App from './App.vue'
import ajax from './ajax/index'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import routes from './router'
const router = new VueRouter(routes)

import './assets/css/reset.css'

Vue.prototype.$ajax = ajax

import videoPage from './components/videoPage'
Vue.component('videoPage', videoPage)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
