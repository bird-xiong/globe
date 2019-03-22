import { isUndefined } from './is'

export const getnotUndefined = (undefinedable, options) => isUndefined(undefinedable) ? options : undefinedable
