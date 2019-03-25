// import Me from './components'
import { createRoute, dynamicWrapper } from '~/utils/core'

const routesConfig = (app) => ({
  path: 'Publish',
  title: '发布',
  component: dynamicWrapper(app, [], () => import('./components'))
})

export default (app) => createRoute(routesConfig(app))
