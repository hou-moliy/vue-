// 操作state里面的数据
// 直接更新state的多个方法的对象

/* eslint-disable */

import {

  RECEIVE_ADDRESS,

  RECEIVE_FOODTYPES,

  RECEIVE_SHOPS,

  RECIVE_USERINFO,

  RESET_USERINFO,

  RECIVE_GOODS,

  RECIVE_INFO,

  RECIVE_RATINGS
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
  [RESET_USERINFO](state){
    state.userInfo={}
  },
   [RECIVE_INFO](state,{info}) {
     state.info = info
   } ,
   [RECIVE_RATINGS](state,{ratings}){
    state.ratings=ratings
  },
   [RECIVE_GOODS](state,{goods}){
    state.goods=goods
   }

}

/* eslint-enable */
