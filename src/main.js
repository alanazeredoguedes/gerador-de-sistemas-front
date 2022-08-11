//require('./boostrap')
import './boostrap/'

import { createApp } from 'vue'
import BaseTemplate from './layouts/BaseTemplate.vue'
import router from './router'
import store from "./store";
import vSelect from "vue-select"
import { functions } from "./functions/import";

import $ from 'jquery'
window.jQuery = window.$ = $


/** Imports CSS */
import 'vue-select/dist/vue-select.css';




const app = createApp(BaseTemplate)


app.use(router)
app.use(store)



app.component('v-select', vSelect)

app.config.globalProperties.$functions = functions;





app.mount('#app')

