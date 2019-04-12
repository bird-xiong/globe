import { isUndefined } from './is'

const Url = require('url')

export const objectToUrl = params => {
  if (params instanceof Object || Object.keys(params).length) {
    let path = '?'
    Object.keys(params).forEach((item, index) => {
      path = path + item + '=' + encodeURI(params[item])
      if (index !== Object.keys(params).length - 1) path = path + '&'
    })
    return path
  }
  return ''
}

export const ignoreQuery = url => {
  if (isUndefined(url)) return url
  const parsed = Url.parse(url)
  const _url = parsed.protocol + '//' + parsed.host + parsed.pathname
  return _url
}
