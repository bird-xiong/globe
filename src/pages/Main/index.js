import { createStackRoutes } from '~/utils/core'
import Home from './Home'
import Me from './Me'
import Content from './Content'
import Discover from './Discover'
import Publish from './Publish'
import CityHub from './CityHub'
import { Image, ImageBackground } from 'react-native'
import React from 'react'

const wrapper = true
export const HomeStack = (app) => createStackRoutes(((app) => (
  {
    path: 'Home',
    indexRoute: 'Home',
    childRoutes: [
      Home(app),
      Content(app)
    ],
    tabBarConfig: {
      label: '首页',
      activeIcon: require('~/imgs/tab_home_s.png'),
      inactiveIcon: require('~/imgs/tab_home.png')
    }
  }
))(app))(wrapper)

export const MeStack = (app) => createStackRoutes(((app) => (
  {
    path: 'Me',
    indexRoute: 'Me',
    childRoutes: [
      Me(app)
    ],
    tabBarConfig: {
      label: '我的',
      activeIcon: require('~/imgs/tab_mine_s.png'),
      inactiveIcon: require('~/imgs/tab_mine.png')
    }
  }
))(app))(wrapper)

export const PublishStack = (app) => createStackRoutes(((app) => (
  {
    path: 'Publish',
    indexRoute: 'Publish',
    childRoutes: [
      Publish(app)
    ],
    tabBarConfig: {
      label: '发布',
      customItem: ({ focused }) => <ImageBackground source={require('~/imgs/tab_publish_back.png')} style={{ width: 112, height: 97 }} resizeMode="center">
        <Image source={require('~/imgs/tab_publish.png')} resizeMode="center" style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 20 }} />
      </ImageBackground>
    }
  }
))(app))(wrapper)

export const DiscoverStack = (app) => createStackRoutes(((app) => (
  {
    path: 'Discover',
    indexRoute: 'Discover',
    childRoutes: [
      Discover(app)
    ],
    tabBarConfig: {
      label: '发现',
      activeIcon: require('~/imgs/tab_discovery_s.png'),
      inactiveIcon: require('~/imgs/tab_discovery.png')
    }
  }
))(app))(wrapper)

export const CityHubStack = (app) => createStackRoutes(((app) => (
  {
    path: 'CityHub',
    indexRoute: 'CityHub',
    childRoutes: [
      CityHub(app)
    ],
    tabBarConfig: {
      label: 'CityHub',
      activeIcon: require('~/imgs/tab_cityhub_s.png'),
      inactiveIcon: require('~/imgs/tab_cityhub.png')
    }
  }
))(app))(wrapper)
