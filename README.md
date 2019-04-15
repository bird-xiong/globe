# globe
## 声明
globe 所用的的数据接口`api`和图片资源均通过非正常手段获取，只用于该开源项目的页面的模拟与展示，严禁他人使用于商业用途或不正当谋利。
## 环境
#### dependencies  
>react: 16.8.3  
react-native: 0.59.1  

#### CLI  
>react-native-cli: 2.0.1  
yarn: 1.15.2

## 路由
`globe`使用`react-navigation`作为导航框架，在项目中采用路由分级、模块路由的目录设计，请对照以下目录结构建立对应的路由。
```
|-- pages
    |-- index.js          // 一级路由，定义 Main 、Login 的 二级路由 
    |-- Login            
    |   |-- index.js      // 二级路由，定义 登陆、登出 相关页面
    |   |-- components    
    |       |-- index.js  
    |-- Main              
        |-- index.js      // 二级路由，定义 tab 的相关页面
        |-- CityHub     
        |   |-- index.js  
        |   |-- components
        |       |-- index.js
        |-- Content
        |   |-- index.js
        |   |-- components
        |       |-- index.js
        |-- Discover
        |   |-- index.js
        |   |-- components
        |       |-- index.js
        |-- Home
        |   |-- index.js      // 首页路由配置
        |   |-- components
        |   |   |-- index.js  // 首页入口
        |   |   |-- Activity
        |   |   |   |-- index.js
        |   |   |-- List
        |   |   |   |-- index.js
        |   |   |-- Store
        |   |   |   |-- index.js
        |   |   |-- TopicHeading
        |   |       |-- TopicFooter.js
        |   |       |-- TopicHeading.js
        |   |       |-- index.js
        |   |-- model         // 状态管理
        |       |-- index.js
        |-- Me
        |   |-- index.js
        |   |-- components
        |       |-- index.js
        |-- Publish
            |-- index.js
            |-- components
                |-- index.js
```
## dva 数据流
>如果你从来没了解过`dva`，请参照[dva介绍](https://dvajs.com/)  
如果你想知道更多的 side effects，请参照[redux-saga](https://github.com/redux-saga/redux-saga)  
如果你不了解它的运行机制，请参照[redux](https://github.com/reduxjs/redux)  

使用前进行`dva`配置
 ```
 const app = dva({
  initialState: {},
  models: [appModel],
  loading: createLoading,
  onError(e) {
    console.log('onError', e)
  }
})
 ```
在模块路由下建立对应的`model/index.js`，并进行`connect`
## 网络请求
### 请求配置
```
const DEFAULT_REQUSETCONFIG = {
  host: 'http://www.yohomars.com/',   // 域名
  requestTimeOut: 3000,               // 超时时长
  withHeaders: headers => headers,    // 通用请求头，一般用来做 Token 配置
  afterResponse: response => response, // 返回数据格式化
  requestInterceptors: request => request,    // 请求数据格式化
  isSuccess: response => response && response.success, // 业务成功判断
  errorHandle: error => error   // 异常处理
}
```
以上配置可以在`~/config.js`中覆盖

### 发送请求
1、 effects 中发送
```
  effects: {
    * fetchIndexInfo2({ payload }, { call, put, take, all }) {
      const { status, data } = yield call(getIndexInfo, REQUEST_INDEX_DATA_2)
      if (status) yield put({ type: 'incrementIndexInfo', payload: data.rows })
      if (payload && payload.finished) payload.finished(status && data.hasMore)
    }
  }
```
在`~/lsco/request.js`中配置请求
```
const request = {
...
  Test: {
    getIndexInfo: params => serializeRequest('yohomars/AppIndexRest/getAppIndexDataStream').params(params).send()
  },
...
}
```
2、 Component 中发送
```
 request.Test.getIndexInfo(REQUEST_INDEX_DATA_2).success(res => {
   ...
   }).error(error => {
     ...
     })
 ```
在`~/lsco/request.js`中配置请求
```
const request = {
...
  Test: {
    getIndexInfo: params => serializeRequest('yohomars/AppIndexRest/getAppIndexDataStream').params(params).start()
  },
...
}
```
### 组件

#### PTRScrollList
跨平台下拉刷新组件，支持自定义头部，参看详细介绍[PTRScrollList](https://github.com/bird-xiong/PTRScrollList)  

#### AnimatedEasy
链式动画组件库
```
<Animatable.Image style={{ position: 'absolute', left: 0, bottom: 10 }} animation={make => make.translateY().toValue(-10).duration(1000).loop()} source={require('~/imgs/ufo.png')} />

```
