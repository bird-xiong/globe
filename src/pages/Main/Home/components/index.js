import React from 'react'
import {
  View,
  StyleSheet
} from 'react-native'
import { HomeNav } from '~/components/NavHeader'
import { connect } from '~/utils/core'
import standard from '~/utils/standard'
import TopicHeading from './TopicHeading'
import Store from './Store'
import Activity from './Activity'
import List from './List'
import PTRScrollList from '~/components/PTRScrollList/PTRScrollList'
const Left = HomeNav.Left
const Title = HomeNav.Title
const Right = HomeNav.Right

@connect(({ home, loading }) => ({ home, loading: loading.models.home }))
export default class HomeScreen extends React.Component {
  static navigationOptions = () => ({
    headerLeft: Left,
    headerTitle: Title,
    headerRight: Right
  })
  componentDidMount() {
    this.props.dispatch({ type: 'home/fetch' })
  }
  onPress = () => {

  }
  _onHeaderRefreshing = () => {
    this.props.dispatch({ type: 'home/fetch',
      payload: {
        finished: () => this.ptrScrollList.ptr_headerRefreshFinished()
      } })
  }
  _onFooterRefreshing = () => {
    this.props.dispatch({ type: 'home/fetchIndexInfo2',
      payload: {
        finished: more => this.ptrScrollList.ptr_footerRefershFinished(more)
      } })
  }
  _keyExtractor = (item, index) => index.toString()
  _renderRower = (item, index, last) => {
    if (index === 0) return <TopicHeading {...item} />
    else if (index === 1) return <Store {...item} />
    else if (index === 2) return <Activity {...item} />
    else return <List data={item} last={last} />
  }
  render() {
    const { home } = this.props
    const { recommend = {}, indexInfo = {}, cityInfo = {} } = home
    const { recommendStoreInfo: store = {}, recommendUserInfo: user = {}, recommendActivityInfo: activity = {} } = recommend
    const data = [].concat.call([{ recommend, cityInfo }, { store }, { activity, user }], indexInfo)
    return (
      <View style={Style.wrap}>
        <PTRScrollList
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          contentContainerStyle={{ ...standard.layout.cfsc }}
          data={data}
          onHeaderRefreshing={this._onHeaderRefreshing}
          onFooterRefreshing={this._onFooterRefreshing}
          scrollComponent={'FlatList'}
          enableFooterInfinite
          keyExtractor={this._keyExtractor}
          ref={ref => {
            this.ptrScrollList = ref
          }}
          renderItem={({ item, index }) => this._renderRower(item, index, index > 0 ? data[index - 1] : null)}
        />
      </View>
    )
  }
}

const Style = StyleSheet.create({
  wrap: {
    flex: 1,
    ...standard.layout.rcc
  }
})
