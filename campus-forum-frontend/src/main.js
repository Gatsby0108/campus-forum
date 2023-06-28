import { createApp } from 'vue'
import { createPinia } from "pinia";

import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:88'

const app = createApp(App)
app.use(createPinia()).use(router).use(ElementPlus).mount('#app')
