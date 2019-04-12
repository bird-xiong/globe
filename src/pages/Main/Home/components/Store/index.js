import React from 'react'
import {
  Text,
  View,
  ImageBackground,
  Image,
  StyleSheet
} from 'react-native'
import standard from '~/utils/standard'
import { getFitToSize, screenSize } from '~/utils/size'
import { ignoreQuery } from '~/utils/helper/url'

export default class Store extends React.PureComponent {
  render() {
    const { store } = this.props
    const { storeSubTitle, storeName, businessAreaName, category = [], icon, headpicObject = {} } = store
    const backgroundSize = getFitToSize({ width: screenSize.width - 16, height: screenSize.height }, { width: headpicObject.width, height: headpicObject.height })
    const categoryFliter = category.map(item => item.tagName)
    return (
      <ImageBackground source={{ uri: headpicObject.url }} style={{ ...backgroundSize }} resizeMode="cover">
        <View style={Style.content}>
          <View style={Style.titleWrap}><Text style={Style.title}>{storeSubTitle}</Text></View>
          <View style={{ ...standard.layout.rfsc, paddingTop: 5 }}>
            <Image source={{ uri: ignoreQuery(icon) }} style={{ width: 45, height: 45 }} resizeMode="cover" />
            <View style={{ paddingLeft: 10 }}>
              <Text style={{ color: standard.color.wwhite, fontSize: standard.font.Title2, fontWeight: 'bold' }}>
                {
                  businessAreaName
                }
              </Text>
              <View style={{ ...standard.layout.rfsc, paddingTop: 5 }}>
                <Image source={require('~/imgs/city_location.png')} />
                <Text style={{ color: standard.color.wwhite, paddingLeft: 5, fontSize: standard.font.Small1 }}>{storeName + ' · ' + categoryFliter.join(' · ')}</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    )
  }
}

const Style = StyleSheet.create({
  titleWrap: { backgroundColor: standard.color.wwhite, fontSize: 18, paddingLeft: 5, paddingRight: 5, paddingTop: 3, paddingBottom: 3, borderRadius: 3 },
  title: { fontSize: standard.font.Small1 },
  content: {
    ...standard.layout.cfefs,
    width: '100%',
    height: '100%',
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
  }
})
