import { createSwitchRoutes } from '~/utils/core'
import { NAVIGATOR_STACK, NAVIGATOR_TABS } from '~/utils/'
import { HomeStack as Home, MeStack as Me } from './Main'
import Login from './Login'

const routesConfig = (app) => [
  {
    path: 'main',
    indexRoute: 'Home',
    navigatorType: NAVIGATOR_TABS,
    childRoutes: [
      Home(app),
      Me(app)
    ]
  },
  {
    path: 'login',
    indexRoute: 'Login',
    navigatorType: NAVIGATOR_STACK,
    childRoutes: [
      Login(app)
    ]
  }
]

export default (app) => createSwitchRoutes(routesConfig(app))
