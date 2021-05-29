import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss/reset.scss'
import ElementUI from 'element-ui'
import scroll from 'vue-seamless-scroll'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(scroll)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
