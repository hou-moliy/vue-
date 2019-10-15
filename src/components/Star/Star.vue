<template>
  <div class="star" :class="'star-'+size">
<!--    <span class="star-item on"></span>-->
    <span class="star-item " v-for="(sc, index) in starClasses" :key="index" :class="sc"></span>
  </div>
</template>
<script>
  //定义类名常量
  const CLASS_ON = 'on'
  const CLASS_HALF = 'half'
  const CLASS_OFF = 'off'
  export default {
    props: {
      score: Number,//分数
      size: Number,//大小
    },
    computed: {
      starClasses () {
        /*
        * 3.2 ：3+0+2
        * 3.5：3+1+1
        * */
        const {score} = this
        const scs = []
        //总个数是5
        //像scs数组中添加n个on，CLASS_ON全星
        const scoreInteger = Math.floor(score)
        for (let i = 0; i < scoreInteger; i++) {
          scs.push(CLASS_ON)
        }
        //像scs数组中添加0或1个half，CLASS_HALF半星
        const scoreFloat = (score - scoreInteger)* 10
        if (scoreFloat >= 5) {
          scs.push(CLASS_HALF)
        }
        //像scs数组中添加n个on，CLASS_OFF
        while (scs.length<5){
          scs.push(CLASS_OFF)
        }
        return scs
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .star //2x图 3x图
    float left
    font-size 0

    .star-item
      display inline-block
      background-repeat no-repeat

    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px

        &:last-child
          margin-right: 0

        &.on
          bg-image('./images/star48_on')

        &.half
          bg-image('./images/star48_half')

        &.off
          bg-image('./images/star48_off')

    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px

        &:last-child
          margin-right 0

        &.on
          bg-image('./images/star36_on')

        &.half
          bg-image('./images/star36_half')

        &.off
          bg-image('./images/star36_off')

    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px

        &:last-child
          margin-right 0

        &.on
          bg-image('./images/star24_on')

        &.half
          bg-image('./images/star24_half')

        &.off
          bg-image('./images/star24_off')
</style>
