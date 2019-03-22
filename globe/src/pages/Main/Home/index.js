// import Home from './components'
import { createRoute, dynamicWrapper } from '~/utils/core'

const routesConfig = (app) => ({
  path: 'Home',
  title: '首页',
  component: dynamicWrapper(app, [import('./model')], () => import('./components'))
})

export default (app) => createRoute(routesConfig(app))
