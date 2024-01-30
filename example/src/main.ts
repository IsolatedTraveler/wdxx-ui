import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import zUi from 'z-uis/index'
import '@ui/styles/dist/index.css'
const app = createApp(App)
app.use(zUi)
app.use(router)
app.mount('#app')
