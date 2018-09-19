import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant'
import 'vant/lib/vant-css/index.css'
import { router } from './router'

Vue.use(Vant)
Vue.config.productionTip = false

// 定义全局alert提醒
Vue.prototype.remind = function () {
  alert(1)
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
