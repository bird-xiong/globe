import React from 'react'
import {
  View,
  Text,
  Button
} from 'react-native'
import { connect } from '~/utils/core'

@connect(({ home, loading }) => ({ home, loading: loading.models.home }))
export default class HomeScreen extends React.Component {
  onPress = () => {
    this.props.dispatch({ type: 'home/fetch' })
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{this.props.loading ? 'loading!' : 'Home!' }</Text>
        <Button title="push" onPress={this.onPress} />
      </View>
    )
  }
}
