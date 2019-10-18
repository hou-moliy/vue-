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

import Shop from '../pages/Shop/Shop.vue'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'

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
    },
    {//商家
      path: '/shop',
      name: 'shop',
      component: Shop,
      children: [
        {//商家下的食物列表
          path: '/shop/shopgoods',
          component: ShopGoods
        },
        {//商家下的评价
          path: '/shop/shopratings',
          component: ShopRatings
        },
        {//商家下的商家信息
          path: '/shop/shopinfo',
          component: ShopInfo
        },
        { // 商家页面重定向
          path: '',//表示已经请求到了shop
          redirect: '/shopgoods'
        }
      ]

    }
  ],
  linkActiveClass: 'on'// 这是覆盖默认的路由高亮的类，默认的类叫做router-link-active
})
