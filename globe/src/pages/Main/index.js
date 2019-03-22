import { createStackRoutes } from '~/utils/core'
import Home from './Home'
import Me from './Me'
import Content from './Content'

const wrapper = true
export const HomeStack = (app) => createStackRoutes(((app) => (
  {
    path: 'Home',
    indexRoute: 'Home',
    childRoutes: [
      Home(app),
      Content(app)
    ]
  }
))(app))(wrapper)

export const MeStack = (app) => createStackRoutes(((app) => (
  {
    path: 'Me',
    indexRoute: 'Me',
    childRoutes: [
      Me(app)
    ]
  }
))(app))(wrapper)
