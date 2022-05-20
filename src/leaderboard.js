import { createApp } from 'vue'
import Leaderboard from './Pages/Leaderboard.vue'
import './index.css'
import axios from 'axios'

const app = createApp(Leaderboard)
app.config.globalProperties.axios = axios
app.mount('#leaderboard')
