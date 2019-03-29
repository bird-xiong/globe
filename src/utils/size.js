import { PixelRatio } from 'react-native'
import { isUndefined } from './helper/is'

export const getLayoutSize = size => {
  if (isUndefined(size.width)) size.width = 0
  if (isUndefined(size.height)) size.height = 0
  return {
    width: PixelRatio.roundToNearestPixel(size.width / PixelRatio.get()),
    height: PixelRatio.roundToNearestPixel(size.height / PixelRatio.get())
  }
}
