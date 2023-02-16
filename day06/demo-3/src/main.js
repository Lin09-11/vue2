import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'
Vue.config.productionTip = false

// 全局配置 axios 的请求根路径
axios.defaults.baseURL = 'http://www.liulongbin.top:3006'

// 将axios属性挂载在Vue的原型上
// Vue.prototype.axios = axios
Vue.prototype.$http = axios

// 今后，在每个 .vue 组件中要发起请求，直接调用 this.$http.xxx
// 但是，把 axios 挂载到 Vue 原型上，有一个缺点：不利于 API 接口的复用！！！

new Vue({
  render: (h) => h(App)
}).$mount('#app')
