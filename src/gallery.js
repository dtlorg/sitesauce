import { createApp } from 'vue'
import Gallery from './Pages/Gallery.vue'
import './index.css'
import axios from 'axios'

const app = createApp(Gallery)
app.config.globalProperties.axios = axios
app.mount('#gallery')
