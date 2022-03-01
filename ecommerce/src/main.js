import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

import VueAwesomeSwiper from 'vue-awesome-swiper'

import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)