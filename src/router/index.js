import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Demo-one',
    component: () => import('../views/first/index.vue')
  }
]

const router = new VueRouter({
  routes
})
export default router
