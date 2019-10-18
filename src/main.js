// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue'
import App from './App'
// eslint-disable-next-line no-unused-vars
import axios from 'axios'
// 导入路由组件
import router from './router'
// 导入element-ui组件
// eslint-disable-next-line no-unused-vars
import element from 'element-ui'
// 导入mint-ui组件
// eslint-disable-next-line no-unused-vars
import mintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// 注册element-ui,mintUI

import store from './store'
Vue.use(element)
Vue.use(mintUI)
Vue.prototype.axios = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 挂载路由组件
  router,
  store,
  render: h => h(App)
})
/* eslint-enable */
