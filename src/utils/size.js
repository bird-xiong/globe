import { PixelRatio, Dimensions } from 'react-native'
import { isUndefined } from './helper/is'

export const getLayoutSize = size => {
  if (isUndefined(size.width)) size.width = 0
  if (isUndefined(size.height)) size.height = 0
  return {
    width: PixelRatio.roundToNearestPixel(size.width / PixelRatio.get()),
    height: PixelRatio.roundToNearestPixel(size.height / PixelRatio.get())
  }
}

export const getFitToSize = (targetSize, sourceSize) => {
  if (isUndefined(sourceSize.width) || isUndefined(sourceSize.height)) return { width: 0, height: 0 }

  if (isUndefined(targetSize.width)) targetSize.width = Number.MAX_VALUE
  if (isUndefined(targetSize.height)) targetSize.height = Number.MAX_VALUE

  if (targetSize.width > targetSize.height) {
    sourceSize.width = sourceSize.height / targetSize.height * sourceSize.width
    sourceSize.height = targetSize.height
  } else {
    sourceSize.height = targetSize.width / sourceSize.width * sourceSize.height
    sourceSize.width = targetSize.width
  }
  return sourceSize
}

export const screenSize = Dimensions.get('window')
