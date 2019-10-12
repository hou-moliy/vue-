// 操作state里面的数据
// 直接更新state的多个方法的对象

/* eslint-disable */





import {

  RECEIVE_ADDRESS,

  RECEIVE_FOODTYPES,

  RECEIVE_SHOPS
} from './mutation-types.js'

export  default {
  [RECEIVE_ADDRESS] (state,{address}){
    state.address=address
  },
  [RECEIVE_FOODTYPES] (state,{foodtypes}){
    state.foodtypes=foodtypes
  },
  [RECEIVE_SHOPS] (state,{shops}){
    state.shops=shops
  },

}










/* eslint-enable */
