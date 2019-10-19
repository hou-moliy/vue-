// 使用mock.js提供mock数据接口
import Mock from 'mockjs'
import data from './data.json'

//返回shopgoods的接口
Mock.mock('/shopgoods',{code:0,data:data.goods})
//返回shopratings的接口
Mock.mock('/shopratings',{code:0,data:data.ratings})
//返回shopinfo的接口
Mock.mock('/shopinfo',{code:0,data:data.info})




