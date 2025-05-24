import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import { vScrollReveal } from './directives/scrollReveal'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.directive('scroll-reveal', vScrollReveal)

app.mount('#app') 