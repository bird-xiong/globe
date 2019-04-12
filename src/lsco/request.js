import { NetInfo } from 'react-native'
import { serializeRequest, Axios } from './lsco'
import objectAssign from 'object-assign'

const DEFAULT_REQUSETCONFIG = {
  host: 'http://www.yohomars.com/',
  requestTimeOut: 3000,
  withHeaders: headers => headers,
  responseInterceptors: response => response,
  requestInterceptors: request => request,
  isSuccess: response => response && response.success,
  errorHandle: error => error
}
const requestConfig = {
  ...DEFAULT_REQUSETCONFIG
}
const request = {
  config: config => {
    const _config = objectAssign(requestConfig, config)
    requestConfig.host = _config.host
    requestConfig.requestTimeOut = _config.requestTimeOut
    requestConfig.withHeaders = _config.withHeaders
    requestConfig.afterResponse = _config.afterResponse
    requestConfig.isSuccess = _config.isSuccess
    requestConfig.errorHandle = _config.errorHandle
    Axios(requestConfig, true)
  },
  Test: {
    getAppIndexRecommendInfo: params => serializeRequest('yohomars/AppIndexRest/getAppIndexRecommendInfo').params(params).send(),
    getCityInfo: params => serializeRequest('yohomars/AppIndexRest/getCityInfo').params(params).send(),
    getIndexInfo: params => serializeRequest('yohomars/AppIndexRest/getAppIndexDataStream').params(params).send()
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
