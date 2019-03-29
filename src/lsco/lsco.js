import axios from 'axios'
import { objectToUrl } from '~/utils/helper/url'
import { isFunction } from '~/utils/helper/is'

// Axios 的默认配置信息
const Axios = (requestConfig, renew) => {
  if (!renew && this._Axios) return this._Axios
  const _Axios = axios.create({
    baseURL: requestConfig.host,
    timeout: requestConfig.requestTimeout,
    headers: requestConfig.withHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  })
  _Axios.requestConfig = requestConfig
  this._Axios = _Axios
  return _Axios
}

const requestQueue = []
let requestTag = 0
const requestGroup = {}

class Request {
  constructor(path = '', params, body, domain = '', headers, method = 'GET') {
    this.path = path
    this.params = params
    this.body = body
    this.domain = domain
    this.headers = headers
    this.method = method
    this.tag = 'request_' + requestTag++
    this.cancelToken = null
  }
  send() {
    return new Promise((resolve, reject) => {
      const fetch = Axios()
      const requestConfig = fetch.requestConfig
      return fetch(this.domain + this.path + (this.params ? objectToUrl(this.params) : ''), {
        method: this.method,
        headers: this.headers,
        data: this.body,
        cancelToken: new axios.CancelToken(c => (this.cancelToken = c))
      }).then(res => {
        const data = res && res.data
        let _data = data
        if (requestConfig && requestConfig.afterResponse) _data = requestConfig.afterResponse(data)
        resolve(_data)
      }).catch(error => {
        if (!requestConfig || !isFunction(requestConfig.errorHandle) || requestConfig.errorHandle(error) !== false) reject(error)
      })
    })
  }
  start() {
    this.requesting = true
    requestQueue.push({ [this.tag]: this })
    this.send()
      .then(res => {
        this._success && this._success(res)
      })
      .catch(error => {
        this._error && this._error(error, axios.isCancel(error))
      })
      .done(res => {
        this.requesting = false
        /** 接口请求结束标志位 */
        this._complete && this._complete(res)
        /** remove queue */
        let index = requestQueue.findIndex(value => {
          return value[this.tag]
        })
        requestQueue.splice(index, 1)
        /** remove group */
        if (this._group) {
          let group = requestGroup[this._group]
          if (group) {
            let index = group.findIndex(value => value === this.tag)
            index !== undefined && group.splice(index, 1)
          }
        }
      })
    return this
  }

  success(callback) {
    this._success = callback
    return this
  }

  error(callback) {
    this._error = callback
    return this
  }

  complete(callback) {
    this._complete = callback
    return this
  }

  config(obj = {}) {
    this._config = {
      ...obj
    }
    return this
  }

  group(param) {
    if (typeof param === 'function') {
      let group = 'group' + this.tag
      requestGroup[group] = [this.tag]
      this._group = group
    } else if (typeof param === 'string') {
      let group = requestGroup[param]
      if (!group) requestGroup[param] = [this.tag]
      else requestGroup[param] = group.concat([this.tag])
      this._group = param
    }
    return this
  }
}

function serializeRequest(path) {
  function serialize(request) {
    return {
      domain: domain => {
        request.domain = domain
        return serialize(request)
      },
      method: method => {
        request.method = method
        return serialize(request)
      },
      params: params => {
        request.params = params
        return serialize(request)
      },
      body: body => {
        request.body = body
        return serialize(request)
      },
      headers: headers => {
        request.headers = headers
        return serialize(request)
      },
      appendHeaders: headers => {
        request.headers = { ...request.headers, ...headers }
        return serialize(request)
      },
      sign: (sign = true) => {
        request.isSign = sign
        return serialize(request)
      },
      send: () => {
        return request.send()
      },
      start: () => {
        return request.start()
      }
    }
  }
  return serialize(new Request(path))
}

function cancel(tag) {
  let group = requestGroup[tag]
  group &&
    group.forEach((item, index) => {
      let request = requestQueue.find(value => value[item])
      request && (request = request[item])
      request && request.cancelToken && request.cancelToken()
    })
}

export { serializeRequest, cancel, Axios }
