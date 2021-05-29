import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Demo-v1',
    component: () => import('../views/first/index.vue')
  },
  {
    path: '/v2',
    name: 'Demo-v2',
    component: () => import('../views/second/index.vue')
  }
]

const router = new VueRouter({
  routes
})
export default router
