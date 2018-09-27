import Vue from 'vue'
import Router from 'vue-router'
import Home from '../demo/Home.vue'
import Index from '../demo/Index'
import Deteplan from '../demo/dateplan'
import Todayplan from '../demo/todayplan'
import TodarContent from '../demo/TodayContent'
import TodaContentSet from '../demo/Todayplanset'
import Weekplan from '../demo/Weekplan.vue'
import Weekplanset from '../demo/Weekplanset.vue'
// import Index from '../components/HelloWorld'
import Test from '../components/test'
Vue.use(Router)
const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/',
        component: Index
      },
      {
        path: 'test',
        name: 'test',
        component: Test
      },
      {
        path: 'dateplan',
        name: 'dateplan',
        component: Deteplan
      },
      {
        path: 'todayplan',
        name: 'todayplan',
        component: Todayplan
      },
      {
        path: 'TodarContent',
        name: 'TodarContent',
        component: TodarContent
      },
      {
        path: 'TodaContentSet',
        name: 'TodaContentSet',
        component: TodaContentSet
      },
      {
        path: 'Weekplan',
        name: 'Weekplan',
        component: Weekplan
      },
      {
        path: 'Weekplanset',
        name: 'Weekplanset',
        component: Weekplanset
      }

    ]
  }
]

routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '')
})

const router = new Router({ routes })

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title
  if (title) {
    document.title = title
  }
  next()
})

export {
  router
}
