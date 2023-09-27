import { createApp } from 'vue'
import { createPinia } from 'pinia';
import wdxx from '../../dist/z-uis/es'
import '../../dist/z-uis/styles/index.css';
import App from './App.vue'
import { router } from "./router";
import * as api from './api'
import * as util from '@assets/index'
const app = createApp(App)
api.setConfig(util.zzjConfig())
util.setFontSize(1200)
app.config.globalProperties.$api = api;
app.config.globalProperties.$util = util;
// app.use(wdxx)
console.log(wdxx)
app.use(router)
app.use(createPinia())
app.mount('#app')