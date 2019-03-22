import { isObject } from './is'

export default array =>
  array.reduce((result, element, index) => {
    isObject(element) ? Object.assign(result, element) : Object.assign(result, { index: element })
    return result
  }, {})
