import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入需要的组件
import Login from '@/components/MyLogin.vue'
import Home from '@/components/MyHome.vue'

import Users from '@/components/menus/MyUsers.vue'
import Rights from '@/components/menus/MyRights.vue'
import Goods from '@/components/menus/MyGoods.vue'
import Orders from '@/components/menus/MyOrders.vue'
import Settings from '@/components/menus/MySettings.vue'

// 详情页
import UserDetail from '@/components/user/MyUserDetail.vue'


// 将插件装上
Vue.use(VueRouter)

const router=new VueRouter({
  // 路由规则，建立hash地址与组件的对应关系
  routes:[
    // 当进入/地址的时候强制跳转到login页面
    {path:'/',redirect:'/login'},
    {path:'/login',component:Login},
    // 后台主页的路由规则
    {path:'/home',
    component:Home,
    // 添加重定向，强制从登录页面一进来直接进入/home/users页面
    redirect:'/home/users',
    children:[
      // children中的path路径中不能加“/”
      { path: 'users', component: Users },
      { path: 'rights', component: Rights },
      { path: 'goods', component: Goods },
      { path: 'orders', component: Orders },
      { path: 'settings', component: Settings },
      // 用户详情页的路由规则
      {path:'userinfo/:id',component:UserDetail,props:true}
    ]}
  ]
})

// 全局前置守卫
router.beforeEach(function(to,from,next){
  const pathArr=['/home','/home/users','.home/rights']
  if(pathArr.indexOf(to.path)!==-1){
    // 如果要访问的页面是home，则先进行判断是否已经登录
    const token=localStorage.getItem('token')
    if(token){
      next()
    }else{
      next('/login')
    }
  }else{
    next()
  }
})

export default router