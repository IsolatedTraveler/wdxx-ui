import { createApp } from 'vue'
import App from './App.vue'
import wdxx from '../../dist/ui'
import '../../dist/ui/dist/index.css';
const app = createApp(App)
app.use(wdxx)
app.mount('#app')
