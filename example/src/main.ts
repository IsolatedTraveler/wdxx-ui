import { createApp } from "vue";
import App from "./App.vue";
import wdxx from '../../packages/z-ui/index'
console.log(wdxx)
const app = createApp(App)
app.use(wdxx)
app.mount('#app')
