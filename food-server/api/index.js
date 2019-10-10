/*
包含n个接口请求函数的模块
最终函数的返回值还是：promise对象
*/
// # 接口文档
// ## 目录：
// [1、根据经纬度获取位置详情](#1 根据经纬度获取位置详情)<br/>
import ajax from './ajax'

export const reqAdress = (geohash) => ajax(`/position/${geohash}`)
// [2、获取食品分类列表](#2 获取食品分类列表)<br/>
export const reqFoodTypes = () => ajax(`/index_category/`)
// [3、根据经纬度获取商铺列表](#3 根据经纬度获取商铺列表)<br/>
export const reqShops = (latitude, longitude) => ajax(`/shops/`, {latitude, longitude})
// [4、根据经纬度和关键字搜索商铺列表](#4 根据经纬度和关键字搜索商铺列表)<br/>
export const reqSearchShops = (geohash, keyword) => ajax(`/search_shops`, {geohash, keyword})
// [5、获取一次性验证码](#5 获取一次性验证码)<br/>
export const reqCaptcha = () => ajax(`/captcha`)

// [6、用户名密码登陆](#6 用户名密码登陆)<br/>
export const reqLogin = (name, pwd) => ajax(`/login_pwd`, {name, pwd}, 'post')

// [7、发送短信验证码](#7 发送短信验证码)<br/>
export const reqSendCode = (phone) => ajax(`/sendcode`, {phone})

// [8、手机号验证码登陆](#8 手机号验证码登陆)<br/>
export const reqLoginSms = (phone, code) => ajax(`/login_sms`, {phone, code}, 'post')

// [9、根据会话获取用户信息](#9 根据会话获取用户信息)<br/>
export const reqUserinfo = () => ajax(`/userinfo`)

// [10、用户登出](#10 用户登出)<br/>
export const LogOut = () => ajax(`/logout`)
