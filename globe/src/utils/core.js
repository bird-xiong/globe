import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation'
import { NAVIGATOR_STACK, NAVIGATOR_TABS } from '~/utils/'
import toObj from './helper/arraytoobj'
import dynamic from 'dva/dynamic'

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
    initialRouteName: config.indexRoute
  })
  return routeWrapper(config, StackNavigator, wrapper)
}

const createTabRoutes = config => {
  const routes = toObj(config.childRoutes)
  const TabNavigator = createBottomTabNavigator(routes, {
    initialRouteName: config.indexRoute
  })
  return routeWrapper(config, TabNavigator)
}

const createRoute = config => {
  return routeWrapper(config, config.component, true)
}

const routeWrapper = (config, component, wrapper) => {
  if (!wrapper) return component
  return {
    [config.path]: {
      screen: component
    }
  }
}

const dynamicWrapper = (app, models, component) =>
  dynamic({
    app,
    models: () => models,
    component
  })

export {
  createSwitchRoutes,
  createStackRoutes,
  createTabRoutes,
  createRoute,
  dynamicWrapper
}
export { connect } from 'react-redux'
