import { createApp } from "vue";
import App from "./App.vue";
import wdxx from '../../packages/z-ui/index'
const app = createApp(App)
app.use(wdxx)
app.mount('#app')
