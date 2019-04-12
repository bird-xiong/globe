import React from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native'
import standard from '~/utils/standard'
import { ignoreQuery } from '~/utils/helper/url'
import { getFitToSize, screenSize } from '~/utils/size'

class Recommend extends React.PureComponent {
  render() {
    const { last } = this.props
    const { imgInfo = {}, contentType } = this.props.data.data
    const backgroundSize = getFitToSize({ width: screenSize.width - 16, height: screenSize.height }, { width: imgInfo.width, height: imgInfo.height })
    const showTopic = !last || (last.contentType !== contentType)
    return <View style={Style.wrap}>
      {showTopic && <Text style={Style.recommend}>{'推荐'}</Text>}
      <Image source={{ uri: ignoreQuery(imgInfo.url) }} style={{ ...backgroundSize }} />
    </View>
  }
}

class Story extends React.PureComponent {
  render() {
    const { last } = this.props
    const { data } = this.props.data
    const { user, firstImage, contentText, storeScore, freshType, address, contentType } = data
    const backgroundSize = getFitToSize({ width: screenSize.width - 16, height: screenSize.height }, { width: firstImage.width, height: firstImage.height })
    const showTopic = !last || (last.contentType !== contentType)
    return (
      <View style={Style.wrap}>
        {
          showTopic && <View style={Style.category}>
            <Image source={require('~/imgs/icon_card_cityhub.png')} />
            <Text style={Style.categoryTitle}>{'mars 城事'}</Text>
          </View>
        }
        <View style={Style.card}>
          <View style={Style.cardTitle}>
            <View style={{ ...standard.layout.rcc }}>
              <Image source={{ uri: user.headpic }} style={Style.userpic} />
              <Text style={{ fontSize: standard.font.Small1 }}>{user.nickname}</Text>
            </View>
            <Text style={[Style.recommend, { color: standard.color.wgreen_main, borderColor: standard.color.wgreen_main }]}>{'关注'}</Text>
          </View>
          <View style={{ ...standard.layout.cfsfs }}>
            <Image source={{ uri: firstImage.url }} style={{ ...backgroundSize }} />
            <View style={Style.padding8}>
              <Text style={{ fontSize: standard.font.Small1 }}>{contentText}</Text>
              <View style={Style.star}>
                {
                  Array.from({ length: storeScore }).map((item, index) => <Image key={index} source={require('~/imgs/crown_h.png')} />)
                }
                <Text style={Style.subTitle}>{'0花费'}</Text>
              </View>
              <View style={{ ...standard.layout.rfsc }}>
                {
                  (freshType === 1) ? <Image source={require('~/imgs/adress_custom.png')} style={{ width: 30, height: 30 }} /> : <Image source={require('~/imgs/mark_gray.png')} />
                }
                <Text style={Style.subTitle}>{address}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default class List extends React.Component {
  render() {
    const { data = {}, last } = this.props
    return (
      <React.Fragment>
        {
          (data.contentType === 8) ? <Recommend data={data} last={last} /> : ((data.contentType === 1) ? <Story data={data} last={last} /> : null)

        }
      </React.Fragment>
    )
  }
}

const Style = StyleSheet.create({
  wrap: { ...standard.layout.cfsfs, marginLeft: 8, marginRight: 8 },
  category: { ...standard.layout.rfsc, paddingBottom: 10 },
  categoryTitle: { color: standard.color.wwhite, paddingLeft: 10 },
  card: { ...standard.layout.cfsfs, backgroundColor: standard.color.wwhite },
  cardTitle: { ...standard.layout.rsbc, paddingLeft: 8, paddingRight: 8, paddingTop: 5, paddingBottom: 5, width: screenSize.width - 16 },
  userpic: { width: 30, height: 30, borderRadius: 15, marginRight: 8 },
  padding8: { paddingLeft: 8, paddingRight: 8, paddingTop: 8, paddingBottom: 8 },
  star: { ...standard.layout.rfsc, paddingTop: 5, paddingBottom: 5 },
  subTitle: { fontSize: standard.font.Small2, color: standard.color.wgray_sub },
  recommend: { color: standard.color.wwhite, fontSize: standard.font.Small1, borderWidth: 1, borderRadius: 3, borderColor: standard.color.wwhite, lineHeight: 18, paddingLeft: 8, paddingRight: 8, marginBottom: 5 }
})
