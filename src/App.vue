<template>
  <div id="app">
   <router-view></router-view>
    <FooterGuide v-show="$route.meta.ShowFooter"></FooterGuide>
  </div>
</template>

<script>
/* eslint-disable */
// 导入路由组件
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
//导入辅助函数
import {mapActions}from 'vuex'

export default {
  mounted () {
    // this.$store.dispatch('getAddress')
    this.getAddress()
    this.getFoodTypes()
    this.getShops()
    this.getUserInfo()
  },
  methods:{
    ...mapActions(['getAddress','getFoodTypes','getShops','getUserInfo'])
  },
  components: {
    FooterGuide
  }

}
/* eslint-enable */
</script>

<style lang="stylus" scoped rel="stylesheet">
  #app
    width: 100%;
    height: 100%;
    background #f5f5f5;

</style>
