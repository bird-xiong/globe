// import Me from './components'
import { createRoute, dynamicWrapper } from '~/utils/core'

const routesConfig = (app) => ({
  path: 'Discover',
  title: '发现',
  component: dynamicWrapper(app, [], () => import('./components'))
})

export default (app) => createRoute(routesConfig(app))
