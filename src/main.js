// import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import { ViteSSG } from 'vite-ssg'

import routes from './router/index.js'
import App from './App.vue'
import 'primeicons/primeicons.css'

// const app = createApp(App)
// const head = createHead()

// app.use(router)
// app.use(head)
// app.mount('#app')

import './style.css'

export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  ({ app, router, routes,  initialState }) => {
    const head = createHead()
    app.use(head)
 
  }
)
