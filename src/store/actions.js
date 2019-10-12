// 操作mutations的数据
// 通过mutations间接更新state的多个方法的对象
/* eslint-disable */

//引入mutation的type常量
import {

  RECEIVE_ADDRESS,

  RECEIVE_FOODTYPES,

  RECEIVE_SHOPS
} from './mutation-types.js'

//导入对应的api接口函数
import {
  reqAddress,
  reqFoodTypes,
  reqShops

} from '../api'

export default {
  //异步获取地址
  async getAddress ({commit, state}) {
    //发送异步ajax请求
    //首先要从state里面取出数据
    const geohash =state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)

    //提交一个mutation
    if (result.code===0){
      const address= result.data
      commit(RECEIVE_ADDRESS,{address})
    }
  },
  //异步获取食品分类列表
  async getFoodTypes ({commit, state}) {
    //发送异步ajax请求
    //首先要从state里面取出数据
    const result = await reqFoodTypes()

    //提交一个mutation
    if (result.code===0){
      const foodtypes= result.data
      commit(RECEIVE_FOODTYPES,{foodtypes})
    }
  },

  //异步获取商家商铺列表

  async getShops ({commit, state}) {
    //发送异步ajax请求
    //首先要从state里面取出数据
    const {longitude, latitude} = state
    const result = await reqShops(longitude, latitude)

    //提交一个mutation
    if (result.code===0){
      const shops= result.data
      commit(RECEIVE_SHOPS,{shops})
    }
  }
}

/* eslint-enable */
