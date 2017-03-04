// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import index from './components/index/index.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)

/* eslint-disable no-unused-vars */
const routes = [
  {
    path: '/',
    components: index
  }
]

let router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  template: '<App/>',
  components: { App }
}).$mount('#app')
