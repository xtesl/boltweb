import { createWebHashHistory, createRouter } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', name: "Home", component: HomeView },
  { path: '/services', name: "Services", component: () => import('../views/ServicesView.vue') },
]

// const router = createRouter({
//   history: createWebHashHistory(),
//   routes,
// })

export default routes