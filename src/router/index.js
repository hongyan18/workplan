import Vue from 'vue'
import Router from 'vue-router'
import Home from '../demo/Home.vue'
import Index from '../demo/Index'
import Deteplan from '../demo/dateplan'
import Todayplan from '../demo/todayplan'
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
      }
    ]
  }
]
// const routes = [
//   {
//     path: '/',
//     redirect: '/index'
//   }, // 如果使用*进行path定义  redirect定向找不到路径会无限循环调用 超出最大调用 （内存溢出）
//   {
//     path: '/index',
//     name: 'index',
//     component: () => import('./demo/Index.vue'),

//     meta: {
//       title: '主页'
//     }
//   }

// ]
// add route path
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
