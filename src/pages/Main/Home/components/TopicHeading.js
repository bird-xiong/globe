import React from 'react'
import PropTypes from 'prop-types'
import { View, Animated, StyleSheet, Easing } from 'react-native'
import standard from '~/utils/standard'

export default class TopicHeading extends React.Component {
  static propTypes = {
    left: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number,
      PropTypes.shape({
        uri: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number
      })])),
    right: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
    showText: PropTypes.bool
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
        setTimeout(() => {
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
    const { showText, left, right } = this.props
    const { progress, count } = this.state

    const currentLeft = left && left[count % left.length]
    const nextLeft = left && left.length > 1 && left[(count + 1) % left.length]
    const currentRight = right && right[count % right.length]
    const nextRight = right && right.length > 1 && right[(count + 1) % right.length]

    const translateY = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -22]
    })

    const tranformStyle = { transform: [{ translateY }] }
    const getAnimateImage = (source, animated = true) => <Animated.Image source={source} style={[Style.content, animated && tranformStyle]} />
    const getAnimateText = (text, animated = true) => <View style={{ backgroundColor: standard.color.black_bg }}>
      <Animated.Text style={[Style.content, Style.text, animated && tranformStyle]}>{text}</Animated.Text>
    </View>

    return (
      <View style={Style.wrap}>
        <View style={[Style.contentWrap]}>
          {
            getAnimateImage(currentLeft, nextLeft)
          }
          {
            nextLeft && getAnimateImage(nextLeft)
          }
        </View>
        <View style={[Style.contentWrap, { paddingLeft: 5 }]}>
          {
            showText ? getAnimateText(currentRight, nextRight) : getAnimateImage(currentRight, nextRight)
          }
          {
            nextRight && (showText ? getAnimateText(nextRight) : getAnimateImage(nextRight))
          }
        </View>
      </View>
    )
  }
}

const Style = StyleSheet.create({
  contentWrap: {
    ...standard.layout.cfsfs,
    height: 22,
    overflow: 'hidden'
  },
  content: {
    marginTop: 5,
    marginBottom: 5
    // width: 39,
  },
  text: { color: standard.color.wwhite, fontSize: standard.font.Small1 },
  wrap: { paddingLeft: 10, paddingTop: 0, width: 75, ...standard.layout.rfsfs }
})
