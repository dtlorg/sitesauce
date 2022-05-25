import { createApp } from 'vue'
import App from './Pages/App.vue'
import { dragscrollNext } from "vue-dragscroll"
import './index.css'

const app = createApp(App);

app.directive('dragscroll', dragscrollNext);
app.mount('#app')
