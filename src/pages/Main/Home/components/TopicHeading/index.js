import React from 'react'
import {
  View,
  Image,
  ImageBackground,
  StyleSheet
} from 'react-native'
import standard from '~/utils/standard'
import TopicHeading from './TopicHeading'
import TopicFooter from './TopicFooter'
import { getLayoutSize } from '~/utils/size'
import * as Animatable from '~/components/AnimatedEasy'

export default class Heading extends React.PureComponent {
  render() {
    const { recommend = {}, cityInfo = {} } = this.props
    const { recommendTopicInfo: topicInfo = {}, weAllTalk = [] } = recommend
    const { cover = {} } = topicInfo

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

    const weAllTalkLeftText = []
    const weAllTalkRightText = []

    weAllTalk.forEach(item => {
      weAllTalkLeftText.push(item.typeName)
      weAllTalkRightText.push(item.contentText)
    })

    return (
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
        <TopicFooter left={weAllTalkLeftText} right={weAllTalkRightText} />
        <Animatable.Image style={{ position: 'absolute', left: 0, bottom: 10 }} animation={make => make.translateY().toValue(-10).duration(1000).loop()} source={require('~/imgs/ufo.png')} />
      </ImageBackground>
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
