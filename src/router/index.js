import { createWebHashHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', name: "Home", component: () => import('../views/HomeView.vue') },
  { path: '/services', name: "Services", component: () => import('../views/ServicesView.vue') },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router