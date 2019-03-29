import {
  View as CoreView,
  Text as CoreText,
  Image as CoreImage
} from 'react-native'
import createComponent from './createAnimatedComponent'

export const View = createComponent(CoreView)
export const Text = createComponent(CoreText)
export const Image = createComponent(CoreImage)
