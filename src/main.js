//require('./boostrap')
import './boostrap/'

import { createApp } from 'vue'
import BaseTemplate from './layouts/BaseTemplate.vue'
import router from './router'
import store from "./store";


const app = createApp(BaseTemplate)

app.use(router)
app.use(store)

app.mount('#app')

