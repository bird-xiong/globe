/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import dva from '~/utils/dva'
import appModel from '~/models/app'
import createRootContainer from '~/pages'
import createLoading from 'dva-loading'
import config from './config'
import request from './lsco/request'

request.config(config.request)

const app = dva({
  initialState: {},
  models: [appModel],
  loading: createLoading,
  onError(e) {
    console.log('onError', e)
  }
})

const AppContainer = createRootContainer(app)
class Root extends Component {
  render() {
    return (
      <AppContainer />
    )
  }
}
const App = app.start(<Root />)

export default App
