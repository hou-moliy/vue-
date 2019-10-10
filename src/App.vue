<template>
  <div id="app">
   <router-view></router-view>
    <FooterGuide v-show="$route.meta.ShowFooter"></FooterGuide>
  </div>
</template>

<script>
// 导入路由组件
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  components: {
    // eslint-disable-next-line no-undef
    FooterGuide
  }
}
</script>

<style lang="stylus" scoped rel="stylesheet">
  #app
    width: 100%;
    height: 100%;
    background #f5f5f5;

</style>
