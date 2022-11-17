import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import wdxx from '../packages/ui/index'
const app = createApp(App)
app.use(wdxx)
app.mount('#app')
