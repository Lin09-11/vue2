//导入vue这个包，得到Vue构造函数
import Vue from 'vue'
//导入App.vue根组件，将来要把App.vue中的模板结构，渲染到HTML页面中
import App from './App.vue'
//导入自己的组件
import Test from './Test.vue'

Vue.config.productionTip = false

//创建Vue实例对象
new Vue({
  //将写的这个实例挂载到app上
  // el:'#app',
  // 把render函数指定的组件，渲染到HTML页面中
  render: h => h(Test),
}).$mount('#app')//跟上面的el:'#app'   效果一样

// Vue实例的$mount()方法，作用和el属性完全一样
