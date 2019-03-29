import React from 'react'
import { Animated, Easing } from 'react-native'
import PropTypes from 'prop-types'
import createAnimation from './createAnimation'

function omit(keys, source) {
  const filtered = {}
  Object.keys(source).forEach(key => {
    if (keys.indexOf(key) === -1) {
      filtered[key] = source[key]
    }
  })
  return filtered
}
export default function createAnimatedComponent(WrappedComponent) {
  const Component = Animated.createAnimatedComponent(WrappedComponent)

  return class AnimatedComponent extends React.Component {
    static propTypes = {
      animation: PropTypes.func
    }
    constructor(props) {
      super(props)
      const { animation } = this.props
      if (animation) {
        const _animation = animation(createAnimation())
        this._animation = _animation
      }
      this.state = {
        animationValue: new Animated.Value(0)
      }
    }
    componentDidMount() {
      if (this._animation) {
        const { animation } = this._animation
        const animate = (reserve, loop) =>
          Animated.timing(this.state.animationValue, {
            fromValue: reserve ? animation.toValue : animation.fromValue,
            toValue: reserve ? animation.fromValue : animation.toValue,
            duration: animation.duration,
            delay: animation.delay,
            easing: Easing.out(Easing.ease)
          }).start(() => loop && animate(!reserve, loop))
        animate(false, animation.loop)
      }
    }
    render() {
      const { style } = this.props
      const restProps = omit(['animation', 'style'], this.props)
      return <Component {...restProps} style={[
        style,
        {
          transform: [
            {
              [this._animation.animation.transformProp]: this.state.animationValue
            }
          ]
        }
      ]} />
    }
  }
}
