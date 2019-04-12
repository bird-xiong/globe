import React from 'react'
import PropTypes from 'prop-types'
import { View, Animated, StyleSheet, Easing, Text } from 'react-native'
import standard from '~/utils/standard'

export default class TopicHeading extends React.Component {
  static propTypes = {
    left: PropTypes.arrayOf(PropTypes.string),
    right: PropTypes.arrayOf(PropTypes.string)
  }

  constructor(props) {
    super(props)
    this.state = {
      progress: new Animated.Value(0),
      count: 0
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.left !== this.props.left || nextProps.right !== this.props.right) {
      this._animation && this._animation.stop()
      this._timer && clearTimeout(this._timer)
      this.animate()
    }
  }

  componentDidMount() {
    this.animate()
  }

  animate = () => {
    const { left, right } = this.props
    if (left.length <= 1 && right.length <= 1) return

    this._animation = Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 350,
      easing: Easing.in(Easing.ease)
    }).start(({ finished }) => {
      if (finished) {
        this._timer = setTimeout(() => {
          const { count, progress } = this.state
          progress.setValue(0)
          this.setState({
            count: count + 1
          }, () => this.animate())
        }, 2000)
      }
    })
  }

  render() {
    const { left, right } = this.props
    const { progress, count } = this.state

    const currentLeft = left && left[count % left.length]
    const nextLeft = left && left.length > 1 && left[(count + 1) % left.length]
    const currentRight = right && right[count % right.length]
    const nextRight = right && right.length > 1 && right[(count + 1) % right.length]

    const translateY = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -30]
    })

    const tranformStyle = { transform: [{ translateY }] }
    const getAnimateContent = (leftText, rightText) => <Animated.View style={[tranformStyle, Style.content]}>
      <Text style={[Style.text, { borderColor: 'white', borderRadius: 3, borderWidth: 1, paddingLeft: 5, paddingRight: 5 }]}>{leftText}</Text>
      <Text style={[Style.text, { paddingLeft: 10, flex: 1, flexWrap: 'nowrap' }]} numberOfLines={1}>{rightText}</Text>
    </Animated.View>

    return (
      <View style={Style.wrap}>
        {
          getAnimateContent(currentLeft, currentRight)
        }
        {
          getAnimateContent(nextLeft, nextRight)
        }
      </View>
    )
  }
}

const Style = StyleSheet.create({
  content: { ...standard.layout.rfsc, flexWrap: 'nowrap', height: '100%' },
  text: { color: standard.color.wwhite, fontSize: standard.font.Small1, height: 20, lineHeight: 20 },
  wrap: { paddingLeft: 15, paddingRight: 15, paddingTop: 0, height: 30, ...standard.layout.cfsfs, overflow: 'hidden' }
})
