export const isUndefined = val => typeof val === 'undefined'

export const isNull = val => val === null

export const isFunction = val => typeof val === 'function'

export const isString = val => typeof val === 'string'

export const isObject = val => typeof val === 'object'

export const isExist = val => !(isUndefined(val) || isNull(val))

export const isVaildObject = val => isObject(val) && Object.keys(val).length
