import Vue from 'vue'
import App from './App.vue'
// 导入路由模块
import router from '@/router/index.js'


// 导入样式
import './assets/css/bootstrap.css'
import './index.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
