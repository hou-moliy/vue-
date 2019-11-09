<template>
  <div>

    <div class="goods">
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <li class="menu-item " :class="{current:index===currentIndex}"
              v-for="(good,index) in goods" :key="index"
              @click="clickMenuItem(index)"
          >
             <span class="text bottom-border-1px">
                <img class="icon" :src="good.icon" v-if="good.icon">
              {{good.name}}
            </span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper" ref="foodsWrapper">
        <ul ref="foodsUL">
          <p class="drop-down" v-if="dropDown">释放立即刷新...</p>
          <li class="food-list-hook" v-for="(good,index) in goods" :key="index">
            <h1 class="title">{{good.name}}</h1>
            <ul>
              <li class="food-item bottom-border-1px"
                  v-for="(food,index) in good.foods" :key="index"
                  @click="ShowFood(food)"
              >
                <div class="icon">
                  <img width="57" height="57"
                       :src="food.icon">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}} 份</span>
                    <span>好评率 {{food.rating}}%</span></div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span>
                    <span class="old" v-if="food.oldPrice">￥{{food.oldPrice}}</span>
                  </div>
                  <div class="cartcontrol-wrapper">
                    <CartControl :food="food"></CartControl>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <p class="drop-down" v-if="UpLoad">上拉加载更多...</p>
        </ul>
      </div>
      <ShopCart></ShopCart>
    </div>
    <transition name="fade">
      <Food :food="food" ref="FOOD"></Food>
    </transition>

  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import CartControl from '../../../components/CartControl/CartControl.vue'
  import Food from '../../../components/Food/Food.vue'
  import ShopCart from '../../../components/ShopCart/ShopCart.vue'

  export default {
    data () {
      return {
        scrollY: 0,//右侧滚动的y轴坐标；（滑动过程时，实时变化）
        tops: [],//所有右侧分类li的top组成的数组；（列表第一次显示后就不再变化）
        food: {},//需要显示的food
        dropDown: false,//下拉刷新显示
        UpLoad:false,//上拉加载更多
      }
    },
    mounted () {
      this.$store.dispatch('getShopGoods', () => {
        this.$nextTick(() => {
          //这个函数在数据更新后执行
          this._initScroll()
          this._initTops()
        })

      })

    },
    computed: {
      ...mapState(['goods']),

      //计算得到当前分类的下标
      currentIndex () { //初始和相关数据发生变化的时候执行
        //得到条件数据
        const {scrollY, tops} = this
        //根据条件计算产生一个结果
        const index = tops.findIndex((top, index) => {
          //scrollY>=当前top$$scroll<下一个top值
          return scrollY >= top && scrollY < tops[index + 1]
        })
        //返回结果
        return index
      }
    },
    methods: {
      //初始化滚动条
      _initScroll () {
        //在列表显示之后才可以创建
        new BScroll('.menu-wrapper', {
          click: true,
        })
        this.foodsScroll = new BScroll('.foods-wrapper', {
          probeType: 2,//手指离开后，不会触发，因为惯性的滑动不会触发
          click: true
        })
        //给右侧列表绑定scroll监听
        this.foodsScroll.on('scroll', ({x, y}) => {
          this.scrollY = Math.abs(y)
          //如果下拉超过50px,就显示下拉刷新的文字
          if (y > 50) {
            this.dropDown = true
          } else {
            this.dropDown = false
          }
        })
        //给右侧列表绑定scroll结束的监听
        this.foodsScroll.on('scrollEnd', ({x, y}) => {
          console.log('scrollEnd', x, y)
          //下拉动作结束
          if (y < 50) {
            this.dropDown = false
            console.log('下拉刷新成功！')
            console.log(this.dropDown)
          }
          console.log(this.dropDown)
          this.scrollY = Math.abs(y)
          //上拉加载，总高度>下拉的高度+10,触发加载更多
          if (this.scrollY > scrollY+10 ){
            console.log("加载更多")
            //使用refresh方法来更新scroll 解决无法滚动的问题
            this.UpLoad = true
          }else {
            this.UpLoad  =  false
          }
        })

      },
      //初始化tops
      _initTops () {
        //1.初始化tops
        const tops = []
        let top = 0
        tops.push(top)
        //2.收集
        // 找到所有分类的li
        const lis = this.$refs.foodsUL.children
        //把伪数组变成真数组
        Array.prototype.slice.call(lis).forEach(li => {
          top += li.clientHeight
          tops.push(top)
        })
        //3.更新状态
        this.tops = tops
      },
      clickMenuItem (index) {
        // console.log(index)
        //使用测列表滑动到指定的位置
        //得到目标位置的scrollY---》this.tops[index]
        //立即更新scrollY(点击的分类项右侧，成为当前分类)
        this.scrollY = this.tops[index]
        //平滑滑动右侧列表
        this.foodsScroll.scrollTo(0, -this.tops[index], 300)
      },
      //显示点击的food---Food
      ShowFood (food) {
        //设置food
        this.food = food
        //显示Food组件
        this.$refs.FOOD.toggleFoodShow()
      },
    },
    components: {
      CartControl,
      Food,
      ShopCart
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .drop-down
    font-size 13px
    text-align center

  .goods
    display: flex
    position: absolute
    top: 195px
    bottom: 46px
    width: 100%
    background: #fff
    overflow: hidden

    .menu-wrapper
      flex: 0 0 80px
      width: 80px
      background: #f3f5f7

      .menu-item
        display: table
        height: 54px
        width: 56px
        padding: 0 12px
        line-height: 14px

        &.current
          position: relative
          z-index: 10
          margin-top: -1px
          background: #fff
          color: $green
          font-weight: 700

          .text
            border-none()

        .icon
          display: inline-block
          vertical-align: top
          width: 12px
          height: 12px
          margin-right: 2px
          background-size: 12px 12px
          background-repeat: no-repeat

        .text
          display: table-cell
          width: 56px
          vertical-align: middle
          bottom-border-1px(rgba(7, 17, 27, 0.1))
          font-size: 12px


    .foods-wrapper
      flex: 1

      .title
        padding-left: 14px
        height: 26px
        line-height: 26px
        border-left: 2px solid #d9dde1
        font-size: 12px
        color: rgb(147, 153, 159)
        background: #f3f5f7

      .food-item
        display: flex
        margin: 18px
        padding-bottom: 18px
        bottom-border-1px(rgba(7, 17, 27, 0.1))

        &:last-child
          border-none()
          margin-bottom: 0

        .icon
          flex: 0 0 57px
          margin-right: 10px

        .content
          flex: 1

          .name
            margin: 2px 0 8px 0
            height: 14px
            line-height: 14px
            font-size: 14px
            color: rgb(7, 17, 27)

          .desc, .extra
            line-height: 10px
            font-size: 10px
            color: rgb(147, 153, 159)

          .desc
            line-height: 12px
            margin-bottom: 8px

          .extra
            .count
              margin-right: 12px

          .price
            font-weight: 700
            line-height: 24px

            .now
              margin-right: 8px
              font-size: 14px
              color: rgb(240, 20, 20)

            .old
              text-decoration: line-through
              font-size: 10px
              color: rgb(147, 153, 159)

          .cartcontrol-wrapper
            position: absolute
            right: 0
            bottom: 12px

  &.fade-enter-active &.fade-leave-active
    transition all 2s
    opacity 0.5

  &.fade-enter &.fade-leave-to
    transform rotate(180deg)
    opacity 1
</style>
