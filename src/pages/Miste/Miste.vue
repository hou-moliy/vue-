<template>
  <!--首页外卖-->
  <section class="msite">
    <!--首页头部-->
    <HeaderTop :title="address.name">
      <router-link class="header_search" slot="left" to="/search">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
      <router-link class="header_login" slot="right" :to="userInfo._id ? 'userinfo':'/login'">
        <span class="header_login_text" v-if="!userInfo._id">
          登陆|注册
        </span>
        <span class="header_login_text" v-else>
           <i class="iconfont icon-ren"></i>
        </span>
      </router-link>
    </HeaderTop>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container" v-if="foodtypes.length>0">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(types,index) in foodtypesArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(type,index) in types" :key="index">
              <div class="food_container">
                <img :src="baseImageUrl+type.image_url">
              </div>
              <span>{{foodtypes.title}}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <img src="./images/msite_back.svg" alt="" v-else="">
    </nav>
    <!--首页附近商家-->
    <ShopList></ShopList>
  </section>
</template>
<script>
  /* eslint-disable */
  import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
  import Swiper from 'swiper'
  import 'swiper/css/swiper.min.css'
  // 导入ShopList组件
  import ShopList from '../../components/ShopList/ShopList.vue'
  //引入辅助函数
  import {mapState} from 'vuex'

  export default {
    data () {
      return {
        baseImageUrl: 'https://fuss10.elemecdn.com'
      }
    },
    mounted () {
    },
    components: {
      HeaderTop,
      ShopList
    },
    computed: {
      ...mapState(['address', 'foodtypes','userInfo']),

      //根据foodtypes一维数组生成一个二维数组
      // （里面的小数组，元素最大个数是8）
      foodtypesArr () {
        const {foodtypes} = this
        //准备一个空的二维数组
        const arr = []
        //准备一个小数组，最大长度为8
        let minArr = []
        //遍历foodtypes
        foodtypes.forEach(c => {

          //如果当前小数组已经满了，就创建一个新的小数组
          if (minArr.length === 8) {
            minArr = []
          }
          if (minArr.length === 0) {
            //若果小数组长度为0，就把小数组放到大数组里面去
            arr.push(minArr)
          }
          //最终，把当前分类放到小数组中去
          // （前提保证小数组放到了大数组中去了，而且小数组没有满）
          minArr.push(c)
        })
        return arr
      }
    },
    watch: {
      //监听
      foodtypes (newVal) { //这个函数说明foodtypes数组有数据了，可以轮播了
        //在异步更新界面之前执行了,那怎么办呢？
        //使用timeout可以实现效果，但是不是很好
        //希望可以实现，数据变了，然后页面更新
        setTimeout(() => {
          // // 创建一个Swiper实例对象，来实现轮播
          // // eslint-disable-next-line no-new
          // new Swiper('.swiper-container', {
          //   loop: true,
          //   // 如果需要分页器
          //   pagination: {
          //     el: '.swiper-pagination'
          //   }
          // })
        },100)

        //页面一更新就立即创建Swiper对象
        //数据更新了，但是界面还没有更新
        //此条语句要写在数据更新之后
        this.$nextTick(()=>{ //一旦完成页面更新，就立即调用
          // 创建一个Swiper实例对象，来实现轮播
          // eslint-disable-next-line no-new
          new Swiper('.swiper-container', {
            loop: true,
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination'
            }
          })
        })
      }
    }
  }
  /* eslint-enable */
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite //首页
    width 100%

    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff

      .swiper-container
        width 100%
        height 100%

        .swiper-wrapper
          width 100%
          height 100%

          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap

            .link_to_food
              width 25%

              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0

                img
                  display inline-block
                  width 50px
                  height 50px

              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666

        .swiper-pagination
          > span.swiper-pagination-bullet-active
            background #02a774

</style>
