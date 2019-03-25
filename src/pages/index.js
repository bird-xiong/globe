import { createSwitchRoutes } from '~/utils/core'
import { NAVIGATOR_STACK, NAVIGATOR_TABS } from '~/utils/'
import { HomeStack as Home, MeStack as Me, DiscoverStack as Discover, PublishStack as Publish, CityHubStack as CityHub } from './Main'
import Login from './Login'

const routesConfig = (app) => [
  {
    path: 'Main',
    indexRoute: 'Home',
    navigatorType: NAVIGATOR_TABS,
    childRoutes: [
      Home(app),
      Discover(app),
      Publish(app),
      Me(app),
      CityHub(app)
    ]
  },
  {
    path: 'Login',
    indexRoute: 'Login',
    navigatorType: NAVIGATOR_STACK,
    childRoutes: [
      Login(app)
    ]
  }
]

export default (app) => createSwitchRoutes(routesConfig(app))
