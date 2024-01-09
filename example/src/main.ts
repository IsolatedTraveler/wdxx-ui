console.time()
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import wdxx from '@ui/z-ui'
import '@ui/styles/dist/index.css';
const app = createApp(App)
app.use(wdxx)
app.use(router)
app.mount('#app')
