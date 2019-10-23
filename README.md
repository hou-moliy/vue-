# out-food

> 外卖

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
#项目回顾
1.项目的开发准备：
项目描述
技术选型:vue,以及vue相关的插件，及vue全家桶，是组件化的开发
API接口：
是什么东西？
一个接口是四个信息：url,请求方式，请求参数的格式，响应数据的格式
2.

#day02
##1.异步数据

##2.登陆/注册
    1》两种方式
      手机号/短信验证码登陆
      用户名/密码/图片验证码登陆
    2》登陆的基本流程
      表单前台验证（减少不正确格式对后台的请求，减少后台的压力），如果不通过，提示
      验证通过，发送ajax请求，得到返回的结果
      根据结果的标识（code）来判断登陆请求是否成功
          1：表示不成功，显示提示
          0：表示成功，保存用户信息到vuex的state里面去，返回到上次的路由。
    3》vue自定义事件（提示组件有用到）
          绑定监听：@eventName = "fn" functon fn(data){//处理}
          分发事件：this.$emit('eventName',data)
    4》注意：
          使用network查看请求（路径/参数/请求方式/响应数据）
          使用vue的chrome插件查看vuex中的state和组件中的数据
          使用debugger语句调式代码（打断点）
          实参类型与形参类型匹配问题
##3.搭建商家整体界面：
    头部，中间是tab(3个选项，路由链接（3个路由组件，是商家的子路由）)
    拆分界面路由
    路由的定义/配置|使用

##4.模拟mock数据/接口
    前后台分离的理解
    mockjs的理解和使用
    json数据设计的理解（和真实接口的数据结构一致）

##5.ShopHeader组件
    1>异步显示数据效果的编码流程：
        ajax
            ajax请求函数(api的index.js)
            请求接口函数（不用需要用到代理，不已/api开头了）（mockServer.js）
            注意：一定要在main.js中，加载mockServer：
              import './mock/mockServer'
        vuex来一套：
             state
             mutation-types
             actions
             mutations
             组件：
             dispatch():异步获取后台数据到vuex的state
             mapState():从vuex的state中读取对应的数据
             模板显示
        初始显示异常：
        情况1：Cannot read property 'xxx' of  undefined
        原因：初始是空对象，内部没有数据，而模块中直接显示3层表达式
        解决办法：使用v-if指令，这里不建议v-show,因为v-show的隐藏，实际结构还是存在的
        
        情况2：cannot read property 'xxx' of null
        原因：初始值是null,而模块中直接显示2层表达式
        解决：让初始值为{} 
       vue 的transition动画：
              1.用tansition包裹要动画的模块元素,name=fade，只能一个根元素；
              2.在类样式中，当前要做动画的模块元素的样式中，增加类样式
                   .fade-enter-active,.fade-leave-active{//进入的效果，离开的效果
                    transition opacity 0.5s
                   }
                   .fade-leave-to,.fade-enter{//刚进入的状态，离开后的状态
                    opacity 0
                   }
    ###
    1.shopGoods组件
      动态展现列表数据
      基本滑动：
          使用better-scroll
          理解其基本原理
          创建BScroll对象的时机：
              watch+$nextTick()
              callback+$nextTick()这里使用的这种
          better-scroll禁用了原生的dom事件，使用的是自定义事件
          绑定监听：scroll(监听滚动过程)/scrollEnd(监听滚动结束)
          滚动监听的类型：probeType
          列表滑动的3种类型
              手指触摸
              惯性
              编码
    先实现两个列表的滑动
       当前分类
          当滑动右侧列表时，更新当前分类；
          点击某个分类项，右侧列表滑动到对应位置；
          类名：current 标识当前分类；
                :class="{current:index===currentIndex}"
                设计一个计算属性:currentIndex
                            根据哪些数据计算呢？
                                scrollY:右侧滚动的y轴坐标；（滑动过程时，实时变化）
                                tops:所有右侧分类li的top组成的数组；（列表第一次显示后就不再变化）
                1.在右侧滑动过程中，实时收集scrollY的值
                2.列表第一次显示后，收集tops
                3.实现currentIndex的计算逻辑
              点击左侧列表项，右侧滑动到对应的位置  
    2.CartControl组件
    1》问题：更新状态数据，对应的界面的变化
        原因：一般方法给一个已有绑定的对象中添加一个新的属性，这个属性没有数据绑定
        解决：
        使用Vue.set(obj,'xxx'，value)才有数据绑定
        this.$set(obj,'xxx',value)才有数据绑定
    3.ShopCart组件
        使用vuex管理购物项数据：cartFoods
        解决几个功能性bug
    4.Food组件
         父子组件：
            子组件调用父组件的方法：通过props将方法传递给子组件
            父组件调用子组件的方法：通过ref找到子组件标签对象

                              
