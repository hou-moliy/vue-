// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 导入路由组件
import router from './router'
// 导入element-ui组件
// eslint-disable-next-line no-unused-vars
import element from 'element-ui'
// 导入mint-ui组件
// eslint-disable-next-line no-unused-vars
import mintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// 注册element-ui,intUI
Vue.use(element)
Vue.use(mintUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 挂载路由组件
  router,
  render: h => h(App)
})
