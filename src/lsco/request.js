import { NetInfo } from 'react-native'
import { serializeRequest, Axios } from './lsco'
const requestConfig = {
  host: 'http://www.yohomars.com/',
  requestTimeOut: 30,
  withHeaders: headers => headers,
  responseInterceptors: response => response,
  requestInterceptors: request => request,
  isSuccess: response => response && response.success,
  errorHandle: error => error
}
const request = {
  config: config => {
    requestConfig.host = config.host
    requestConfig.requestTimeOut = config.requestTimeOut
    requestConfig.withHeaders = config.withHeaders
    requestConfig.afterResponse = config.afterResponse
    requestConfig.isSuccess = config.isSuccess
    requestConfig.errorHandle = config.errorHandle
    Axios(requestConfig, true)
  },
  Test: {
    getAppIndexRecommendInfo: (params) => {
      return serializeRequest('yohomars/AppIndexRest/getAppIndexRecommendInfo')
        .params(params).send()
    },
    getCityInfo: (params) => {
      return serializeRequest('yohomars/AppIndexRest/getCityInfo')
        .params(params).send()
    }
  },
  NetInfo: {
    isConnected: {
      fetch: callback => {
        NetInfo.isConnected.fetch().done(isConnected => {
          callback && callback(isConnected)
        })
      },
      addEventListener: (handle, callback) => {
        NetInfo.isConnected.addEventListener(handle, callback)
      },
      removeEventListener: (handle, callback) => {
        NetInfo.isConnected.removeEventListener(handle, callback)
      }
    }
  }
}
Axios(requestConfig)
export default request
