import animation from './animation'
import objectAssign from 'object-assign'

const TRANSFORM_STYLE_PROPERTIES = [
  'perspective',
  'rotate',
  'rotateX',
  'rotateY',
  'rotateZ',
  'scale',
  'scaleX',
  'scaleY',
  'skewX',
  'skewY',
  'translateX',
  'translateY'
]

function createAnimation(context = animation) {
  const _animation = objectAssign({}, context)
  const translateX = () => transformProps('transformProp', 'translateX')
  const translateY = () => transformProps('transformProp', 'translateY')
  const fromValue = value => transformProps('fromValue', value)
  const toValue = value => transformProps('toValue', value)
  const duration = duration => transformProps('duration', duration)
  const loop = duration => transformProps('loop', true)
  const transformProps = (key, value) => (_animation[key] = value) && createAnimation(_animation)
  return {
    translateX,
    translateY,
    fromValue,
    toValue,
    duration,
    loop,
    animation: _animation
  }
}

export default createAnimation

export { TRANSFORM_STYLE_PROPERTIES }
