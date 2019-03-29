import React from 'react'
import {
  View,
  Text,
  Button,
  Image,
  ImageBackground,
  StyleSheet
} from 'react-native'
import { HomeNav } from '~/components/NavHeader'
import { connect } from '~/utils/core'
import standard from '~/utils/standard'
import TopicHeading from './TopicHeading'
import { getLayoutSize } from '~/utils/size'
import * as Animatable from '~/components/AnimatedEasy'

const Left = HomeNav.Left
const Title = HomeNav.Title
const Right = HomeNav.Right

@connect(({ home, loading }) => ({ home, loading: loading.models.home }))
export default class HomeScreen extends React.Component {
  static navigationOptions = () => ({
    title: 'title',
    headerLeft: Left,
    headerTitle: Title,
    headerRight: Right
  })
  componentDidMount() {
    this.props.dispatch({ type: 'home/init' })
  }
  onPress = () => {

  }
  render() {
    const { home } = this.props
    const { recommend = {} } = home
    const { cityInfo = {} } = home
    const { recommendTopicInfo: topicInfo = {} } = recommend
    const { cover = {} } = topicInfo
    console.log('topicInfo', topicInfo)
    console.log('cityInfo', cityInfo)

    const weatherIcon = {
      uri: cityInfo.weatherInfo && cityInfo.weatherInfo.weatherIcon.url,
      ...getLayoutSize({
        width: cityInfo.weatherInfo && cityInfo.weatherInfo.weatherIcon.width,
        height: cityInfo.weatherInfo && cityInfo.weatherInfo.weatherIcon.height
      })
    }
    const weatherText = cityInfo.weatherInfo ? [cityInfo.weatherInfo.tmpMax, cityInfo.weatherInfo.tmpMin, cityInfo.weatherInfo.weatherText] : []

    const statisticsIcon = [require('~/imgs/icon_homehub_fresh.png'), require('~/imgs/icon_homehub_store.png'), require('~/imgs/icon_homehub_user.png')]
    const statisticsText = cityInfo.statisticsInfo ? [cityInfo.statisticsInfo.freshInfoNum, cityInfo.statisticsInfo.storeNum, cityInfo.statisticsInfo.userNum] : []

    return (
      <View style={{ ...standard.layout.cfsc }}>
        <ImageBackground source={require('~/imgs/bg_home_topbanner.png')} style={Style.topic} resizeMode="cover">
          <View style={Style.topicInfoWrap}>
            <View style={Style.topicInfoLeft} >
              <TopicHeading left={[require('~/imgs/icon_homehub_flight.png')]} right={[require('~/imgs/icon_homehub_flightinfo.png')]} />
              <TopicHeading left={[require('~/imgs/icon_homehub_date.png')]} right={[cityInfo.dateInfo && cityInfo.dateInfo.showText]} showText />
              <TopicHeading left={[weatherIcon]} right={weatherText} showText />
              <TopicHeading left={statisticsIcon} right={statisticsText} showText />
            </View>
            <Image source={{ uri: cover.url }} style={Style.topicInfoRight} resizeMode="cover" />
          </View>
          <View style={Style.topicslider} />
          <Animatable.Image style={{ position: 'absolute', left: 0, bottom: 10 }} animation={make => make.translateY().toValue(-10).duration(1000).loop()} source={require('~/imgs/ufo.png')} />
        </ImageBackground>
      </View>
    )
  }
}

const Style = StyleSheet.create({
  topic: { width: '100%', height: 189, ...standard.layout.ccc },
  topicInfoWrap: { width: '100%', flex: 1, ...standard.layout.rcc },
  topicInfoLeft: { height: '100%', paddingTop: 20, paddingBottom: 20, zIndex: 1, ...standard.layout.csbc },
  topicInfoRight: { flex: 1, height: '100%' },
  topicslider: { height: 30 }
})
