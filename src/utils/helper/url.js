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
