// import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import { ViteSSG } from 'vite-ssg'

import routes from './router/index.js'
import App from './App.vue'
import 'primeicons/primeicons.css'
import i18n from './i18n'

// const app = createApp(App)
// const head = createHead()

// app.use(router)
// app.use(head)
// app.mount('#app')

import '@fontsource/plus-jakarta-sans/300.css'
import '@fontsource/plus-jakarta-sans/400.css'
import '@fontsource/plus-jakarta-sans/500.css'
import '@fontsource/plus-jakarta-sans/600.css'
import '@fontsource/plus-jakarta-sans/700.css'

import './style.css'

export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  ({ app, router, routes,  initialState }) => {
    const head = createHead()
    app.use(head)
    app.use(i18n)
 
  }
)
