import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '@/views/layout/index.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: layout,
    redirect: '/v1',
    children: [
      {
        path: '/v1',
        name: 'Demo-v1',
        component: () => import('../views/v1/index.vue'),
        meta: { title: 'V1' }
      },
      {
        path: '/v2',
        name: 'Demo-v2',
        component: () => import('../views/v2/index.vue'),
        meta: { title: 'V2' }
      },
      {
        path: '/v3',
        name: 'Demo-v3',
        component: () => import('../views/v3/index.vue'),
        meta: { title: 'V3' }
      },
      {
        path: '/v4',
        name: 'Demo-v4',
        component: () => import('../views/v4/index.vue'),
        meta: { title: 'V4' }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
export default router
