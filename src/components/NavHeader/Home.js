import React from 'react'
import { View, Image, Text, NativeModules } from 'react-native'
import Standard from '~/utils/standard'

export const Left = ({ sence }) => <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 70, paddingLeft: 20 }} >
  <Image source={require('~/imgs/actionbar_loc.png')} />
  <Text>深圳</Text>
</View>
export const Title = ({ sence }) => <View
  style={{ borderRadius: 3, backgroundColor: Standard.color.black_bg, width: 180, height: 32, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
  <Image source={require('~/imgs/header_mars.png')} resizeMode="contain" />
  <Text style={{ color: Standard.color.wgray_main, paddingLeft: 5, fontSize: Standard.font.Small2 }} onPress={() => NativeModules.DevHelper && NativeModules.DevHelper.reload()}>|  地点 见闻 好物</Text>
</View>

export const Right = <Image source={require('~/imgs/homepage_other.png')} style={{ marginRight: 20, width: 22 }} resizeMode="contain" />
