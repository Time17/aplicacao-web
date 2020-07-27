import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$api_url =  'https://api-datas.herokuapp.com'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
