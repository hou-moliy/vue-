<template>
  <div class="cartcontrol">
    <transition name="fade">
       <div class="iconfont icon-remove1" v-if="food.count" @click.stop="updateFoodCount(false)"></div>
    </transition>
    <div class="cart-count">{{food.count}}</div>
    <div class="iconfont icon-hebingxingzhuang" @click.stop="updateFoodCount(true)"></div>
  </div>
</template>
<script>
  export  default {
      props:{
         food :Object
      },
    methods:{
        updateFoodCount(isAdd){
            this.$store.dispatch('updateFoodCount',{isAdd,food: this.food})
        }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
 .cartcontrol
    font-size: 0
    .icon-remove1
          display: inline-block
          padding 6px
          line-height 24px
          font-size 22px
          color $green
          border-radius 50%
           &.fade-enter-active, &.fade-leave-active
              transition  all 3s
           &.fade-leave-to, &.fade-enter
              opacity 0
             transform translateX(15px) rotate(90deg)
    .cart-count
          display: inline-block
          vertical-align: top
          width: 12px
          padding-top: 6px
          line-height: 24px
          text-align: center
          font-size: 10px
          color: rgb(147, 153, 159)
      .icon-hebingxingzhuang
          display: inline-block
          padding: 6px
          line-height: 24px
          font-size: 22px
          color $green
</style>
