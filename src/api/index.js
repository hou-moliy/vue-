/*
与后台交互模块
包含n个接口请求函数的模块
最终函数的返回值还是：promise对象
*/
// # 接口文档
// ## 目录：
// [1、根据经纬度获取位置详情](#1 根据经纬度获取位置详情)<br/>
import ajax from './ajax'
// eslint-disable-next-line no-unused-vars
const BASE_URL = '/api'
export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)
// [2、获取食品分类列表](#2 获取食品分类列表)<br/>
export const reqFoodTypes = () => ajax(BASE_URL + `/index_category/`)
// [3、根据经纬度获取商铺列表](#3 根据经纬度获取商铺列表)<br/>
export const reqShops = (latitude, longitude) => ajax(BASE_URL + `/shops/`, {latitude, longitude})
// [4、根据经纬度和关键字搜索商铺列表](#4 根据经纬度和关键字搜索商铺列表)<br/>
export const reqSearchShops = (geohash, keyword) => ajax(BASE_URL +`/search_shops`, {geohash, keyword})
// [5、获取一次性验证码](#5 获取一次性验证码)<br/>
export const reqCaptcha = () => ajax(BASE_URL +`/captcha`)

// [6、用户名密码登陆](#6 用户名密码登陆)<br/>
export const reqPwdLogin = ({name, pwd, captcha}) => ajax(BASE_URL +`/login_pwd`, {name, pwd, captcha}, 'post')

// [7、发送短信验证码](#7 发送短信验证码)<br/>
export const reqSendCode = (phone) => ajax(BASE_URL+'/sendcode', {phone})

// [8、手机号验证码登陆](#8 手机号验证码登陆)<br/>
export const reqLoginSms = (phone, code) => ajax(BASE_URL +`/login_sms`, {phone, code}, 'post')

// [9、根据会话获取用户信息](#9 根据会话获取用户信息)<br/>
export const reqUserinfo = () => ajax(BASE_URL +`/userinfo`)

// [10、用户登出](#10 用户登出)<br/>
export const reqLogOut = () => ajax(BASE_URL +`/logout`)


//获取商家信息
export  const reqShopInfo =() =>ajax('/shopinfo')

//获取商家评价数组
export  const reqShopRatings =() =>ajax('/shopratings')

//获取商家信息
export  const reqShopGoods =() =>ajax('/shopgoods')
