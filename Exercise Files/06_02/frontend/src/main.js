import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import store from './store.js'
import Vuetify from 'vuetify'
import vueRouter from 'vue-router'

import Messages from './components/Messages'
import VueRouter from 'vue-router';

Vue.use(Vuetify)
Vue.use(vueRouter)

const routes = [
  { path: "/", component: Messages}
]

const router = new VueRouter({routes})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
