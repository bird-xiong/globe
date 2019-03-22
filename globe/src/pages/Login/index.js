// import Login from './components'
import { createRoute, dynamicWrapper } from '~/utils/core'

const routesConfig = (app) => ({
  path: 'Login',
  title: '登陆',
  component: dynamicWrapper(app, [], () => import('./components'))
})

export default app => createRoute(routesConfig(app))
