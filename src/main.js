import { createApp } from 'vue'
import BaseTemplate from './layouts/BaseTemplate.vue'
import router from './router'

import './assets/main.css'


const app = createApp(BaseTemplate)
app.use(router)
app.mount('#app')

