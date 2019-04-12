import React from 'react'
import {
  Text,
  View,
  ImageBackground,
  Image,
  StyleSheet
} from 'react-native'
import standard from '~/utils/standard'
import { ignoreQuery } from '~/utils/helper/url'
import { getFitToSize, screenSize } from '~/utils/size'

export default class Activity extends React.PureComponent {
  render() {
    const { activity, user } = this.props
    const { nickname, headpic } = user
    const { activitySecondTagName: tagName, title, activityTimeDesc, headpic: activitypic = {} } = activity
    const backgroundSize = getFitToSize({ width: (screenSize.width - 16) * 0.7 - 8, height: screenSize.height }, activitypic)
    return (
      <View style={Style.wrap}>
        <View style={[Style.user, { height: backgroundSize.height }]}>
          <Image source={require('~/imgs/icon_home_userbackground.png')} style={{ position: 'absolute', bottom: 0, right: 0 }} />
          <Image source={{ uri: ignoreQuery(headpic) }} style={Style.headpic} />
          <Text style={Style.nickname} numberOfLines={1}>{nickname}</Text>
          <Text style={Style.active}>{'活跃居民'}</Text>
          <Text style={Style.attention}>{'关注'}</Text>
        </View>
        <View style={Style.activity}>
          <ImageBackground source={{ uri: ignoreQuery(activitypic.url) }} style={[Style.bgWrap, { ...backgroundSize }]}>
            <Text style={Style.tagName}>{tagName}</Text>
            <Text style={Style.title} numberOfLines={1}>{title}</Text>
            <Text style={Style.activityTimeDesc}>{activityTimeDesc}</Text>
          </ImageBackground>
        </View>
      </View>
    )
  }
}

const Style = StyleSheet.create({
  wrap: { ...standard.layout.rfsfs, paddingLeft: 8, paddingRight: 8, width: '100%' },
  user: { width: '30%', ...standard.layout.ccc, paddingTop: 15, paddingBottom: 15, backgroundColor: standard.color.wgreen_sub, marginRight: 8 },
  headpic: { width: 44, height: 44, borderRadius: 22 },
  nickname: { color: standard.color.wwhite, paddingTop: 10 },
  active: { color: standard.color.wwhite, fontSize: standard.font.Small2, paddingTop: 5, paddingBottom: 10 },
  attention: { color: standard.color.wwhite, fontSize: standard.font.Small1, borderWidth: 1, borderRadius: 3, borderColor: standard.color.wwhite, lineHeight: 18, paddingLeft: 8, paddingRight: 8 },
  activity: { flex: 1 },
  bgWrap: { paddingBottom: 5, paddingLeft: 10, paddingRight: 10, ...standard.layout.cfefs },
  tagName: { fontSize: standard.font.Small1, backgroundColor: standard.color.wwhite, lineHeight: 18, borderRadius: 3, paddingLeft: 5, paddingRight: 5, overflow: 'hidden' },
  title: { fontSize: standard.font.Small1, color: standard.color.wwhite, paddingTop: 5, paddingBottom: 5 },
  activityTimeDesc: { fontSize: standard.font.Small1, color: standard.color.wgray_sub }
})
