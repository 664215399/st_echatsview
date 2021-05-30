import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Demo-v1',
    component: () => import('../views/v1/index.vue')
  },
  {
    path: '/v2',
    name: 'Demo-v2',
    component: () => import('../views/v2/index.vue')
  }
]

const router = new VueRouter({
  routes
})
export default router
