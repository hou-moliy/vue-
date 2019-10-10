<template>
  <div>
    <header class="header">
      <slot name="left"></slot>
      <div @click="goBack" style="color: #ffffff ; display:flex; margin-top: 5px" v-show="flag">
        <i class="iconfont icon-jiantou-px-"></i>
        <el-page-header >
        </el-page-header>
      </div>
      <span class="header_title">
            <span class="header_title_text ellipsis">{{title}}</span>
          </span>
      <slot name="right"></slot>
    </header>
  </div>
</template>
<script>
export default {
  props: {
    title: String
  },
  created () {
    this.flag = this.$route.path !== '/miste'
  },
  methods: {
    goBack () {
      // eslint-disable-next-line no-undef
      this.$router.go(-1)
    }
  },
  watch: {// 监听
    '$route.path': function (newVal) {
      if (newVal === '/miste') { // 判断是否回到外卖页，首页
        this.flag = false
      } else {
        this.flag = true
      }
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus.css">
  .header
    background-color #02a774
    position fixed
    z-index 100
    left 0
    top 0
    width 100%
    height 45px

    .header_search
      position absolute
      left 15px
      top 50%
      transform translateY(-50%)
      width 10%
      height 50%

      .icon-sousuo
        font-size 25px
        color #fff

    .header_title
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      width 50%
      color #fff
      text-align center

      .header_title_text
        font-size 20px
        color #fff
        display block

    .header_login
      font-size 14px
      color #fff
      position absolute
      right 15px
      top 50%
      transform translateY(-50%)

      .header_login_text
        color #fff

</style>
