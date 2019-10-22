// 操作state里面的数据
// 直接更新state的多个方法的对象

/* eslint-disable */
import Vue from 'vue'
import {

  RECEIVE_ADDRESS,

  RECEIVE_FOODTYPES,

  RECEIVE_SHOPS,

  RECIVE_USERINFO,

  RESET_USERINFO,

  RECIVE_GOODS,

  RECIVE_INFO,

  RECIVE_RATINGS,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
} from './mutation-types.js'

export default {
  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address
  },
  [RECEIVE_FOODTYPES] (state, {foodtypes}) {
    state.foodtypes = foodtypes
  },
  [RECEIVE_SHOPS] (state, {shops}) {
    state.shops = shops
  },
  [RECIVE_USERINFO] (state, {userInfo}) {
    state.userInfo = userInfo
  },
  [RESET_USERINFO] (state) {
    state.userInfo = {}
  },
  [RECIVE_INFO] (state, {info}) {
    state.info = info
  },
  [RECIVE_RATINGS] (state, {ratings}) {
    state.ratings = ratings
  },
  [RECIVE_GOODS] (state, {goods}) {
    state.goods = goods
  },
  [INCREMENT_FOOD_COUNT] (state, {food}) {
    //先判断food.count有没有
    if (!food.count) {//这是第一次增加
      // food.count = 1 //新增属性，没有数据绑定的
      //对象，属性名(这里要写成一个字符串那样，不然那就是一个变量)，属性值
      Vue.set(food,'count',1) //让新增的属性也有数据绑定
     //只有第一次添加才把food添加到carFoods中
      state.cartFoods.push(food)
    } else {
      food.count++
    }

  },
  [DECREMENT_FOOD_COUNT] (state, {food}) {
    if (food.count) {//只有大于0才减
       food.count--
      if (food.count===0){
        //将food从cartFoods中移除
        state.cartFoods.splice(state.cartFoods.indexOf(food),1)
      }
    }
  },

}

/* eslint-enable */
