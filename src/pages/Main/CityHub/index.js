// import Me from './components'
import { createRoute, dynamicWrapper } from '~/utils/core'

const routesConfig = (app) => ({
  path: 'CityHub',
  title: 'CityHub',
  component: dynamicWrapper(app, [], () => import('./components'))
})

export default (app) => createRoute(routesConfig(app))
