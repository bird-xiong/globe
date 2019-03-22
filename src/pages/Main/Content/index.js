// import Content from './components'
import { createRoute, dynamicWrapper } from '~/utils/core'

const routesConfig = (app) => ({
  path: 'Content',
  title: '内容',
  component: dynamicWrapper(app, [], () => import('./components'))
})

export default (app) => createRoute(routesConfig(app))
