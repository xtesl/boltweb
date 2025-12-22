import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import './style.css'
import router from './router'
import App from './App.vue'
import 'primeicons/primeicons.css'

const app = createApp(App)
const head = createHead()

app.use(router)
app.use(head)
app.mount('#app')
