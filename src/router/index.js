import Vue from 'vue'
import Router from 'vue-router'
// 导入首页的路由组件
// eslint-disable-next-line no-unused-vars
import Miste from '../pages/Miste/Miste.vue'
// eslint-disable-next-line no-unused-vars
import Order from '../pages/Order/Order.vue'
// eslint-disable-next-line no-unused-vars
import Profile from '../pages/Profile/Profile.vue'
// eslint-disable-next-line no-unused-vars
import Search from '../pages/Search/Search.vue'
// eslint-disable-next-line no-unused-vars
import Login from '../pages/Login/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { // 首页重定向
      path: '/',
      redirect: '/miste'
    },
    {// 外卖
      path: '/miste',
      component: Miste,
      meta: {
        ShowFooter: true
      }
    },
    {// 预定
      path: '/order',
      component: Order,
      meta: {
        ShowFooter: true
      }
    },
    {// 个人
      path: '/profile',
      component: Profile,
      meta: {
        ShowFooter: true
      }
    },
    {// 搜索
      path: '/search',
      component: Search,
      meta: {
        ShowFooter: true
      }
    },
    {// 登陆
      path: '/login',
      name: 'login',
      component: Login
    }
  ],
  linkActiveClass: 'on'// 这是覆盖默认的路由高亮的类，默认的类叫做router-link-active
})
