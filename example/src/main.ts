import { createApp } from "vue";
import App from "./App.vue";
import wdxx from '../../packages/z-ui/index'
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import '../../packages/styles/index.css';
const app = createApp(App)
app.use(wdxx)
app.use(ElementPlus);
app.mount('#app')
