// import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import { ViteSSG } from 'vite-ssg'

import routes from './router/index.js'
import App from './App.vue'
import 'primeicons/primeicons.css'
import i18n from './i18n'


import '@fontsource/plus-jakarta-sans/300.css'
import '@fontsource/plus-jakarta-sans/400.css'
import '@fontsource/plus-jakarta-sans/500.css'
import '@fontsource/plus-jakarta-sans/600.css'
import '@fontsource/plus-jakarta-sans/700.css'

import './style.css'


export const createApp = ViteSSG(
  App,
  { 
    routes, 
    base: import.meta.env.BASE_URL,

    scrollBehavior(to, from, savedPosition) {
      if (to.hash) {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              el: to.hash,
              behavior: 'smooth',
              top: 80, 
            })
          }, 800) 
        })
      }
      
  
      if (savedPosition) {
        return savedPosition
      }
      
      
      return { top: 0, behavior: 'smooth' }
    }
  },
  ({ app, router, routes, initialState }) => {
    const head = createHead()
    app.use(head)
    app.use(i18n) 
  }
)