import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/css/font-awesome.min.css"
import "./assets/css/weui.css"
import "./assets/css/swiper.css"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
import 'bootstrap/dist/css/bootstrap.min.css'

import * as uiv from 'uiv'

Vue.use(uiv)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
