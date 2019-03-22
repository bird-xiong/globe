// import Me from './components'
import { createRoute, dynamicWrapper } from '~/utils/core'

const routesConfig = (app) => ({
  path: 'Me',
  title: '我',
  component: dynamicWrapper(app, [], () => import('./components'))
})

export default (app) => createRoute(routesConfig(app))
