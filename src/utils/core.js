import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation'
import { NAVIGATOR_STACK, NAVIGATOR_TABS } from '~/utils/'
import toObj from './helper/arraytoobj'
import dynamic from './dynamic'
import { Image } from 'react-native'
import React from 'react'
import standard from './standard'

const createSwitchRoutes = config => {
  const routeConfigs = {}
  config.forEach(route => {
    switch (route.navigatorType) {
      case NAVIGATOR_STACK:
        routeConfigs[route.path] = createStackRoutes(route)()
        break
      case NAVIGATOR_TABS:
        routeConfigs[route.path] = createTabRoutes(route)
        break
    }
  })
  return createAppContainer(createSwitchNavigator(routeConfigs))
}

const createStackRoutes = config => wrapper => {
  const routes = toObj(config.childRoutes)
  const StackNavigator = createStackNavigator(routes, {
    initialRouteName: config.indexRoute,
    defaultNavigationOptions: {
      headerStyle: { borderBottomWidth: 0 },
      headerTitleContainerStyle: { ...standard.layout.rcc }
    },
    cardStyle: { backgroundColor: standard.color.wgreen_main }
  })
  return routeWrapper(config, StackNavigator, wrapper)
}

const createTabRoutes = config => {
  const routes = toObj(config.childRoutes)
  const TabNavigator = createBottomTabNavigator(routes, {
    initialRouteName: config.indexRoute,
    tabBarOptions: {
      activeTintColor: standard.color.wgreen_main,
      inactiveTintColor: standard.color.wgray_main,
      style: {
        backgroundColor: standard.color.black_bg
      }
    }
  })
  return routeWrapper(config, TabNavigator)
}

const createRoute = config => {
  return routeWrapper(config, config.component, true)
}

const routeWrapper = (config, component, wrapper) => {
  if (!wrapper) return component
  const getTabBarConfig = config => {
    const tabBarConfig = {}
    const _tabBarConfig = config.tabBarConfig
    if (_tabBarConfig) {
      if (_tabBarConfig.activeIcon || _tabBarConfig.inactiveIcon) { tabBarConfig.tabBarIcon = ({ focused }) => <Image source={focused ? _tabBarConfig.activeIcon : _tabBarConfig.inactiveIcon} resizeMode="center" /> }
      if (_tabBarConfig.customItem) { tabBarConfig.tabBarIcon = _tabBarConfig.customItem }
      if (_tabBarConfig.label) { tabBarConfig.tabBarLabel = _tabBarConfig.label }
    }
    return tabBarConfig
  }
  const tabBarConfig = getTabBarConfig(config)
  return {
    [config.path]: {
      screen: component,
      navigationOptions: ({ navigation }) => ({
        ...tabBarConfig
      })
    }
  }
}

const dynamicWrapper = (app, models, component) =>
  dynamic({
    app,
    models: () => models,
    component,
    async: ins => ins.props.navigation && ins.props.navigation.setParams({ async: true })
  })

export {
  createSwitchRoutes,
  createStackRoutes,
  createTabRoutes,
  createRoute,
  dynamicWrapper
}
export { connect } from 'react-redux'
