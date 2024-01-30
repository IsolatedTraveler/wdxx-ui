import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue'
import { router, loadXtxx } from "./router";
import * as api from './api'
import * as util from '@assets/index'
const app = createApp(App)
util.setFontSize(1200)
app.config.globalProperties.$api = api;
app.config.globalProperties.$util = util;
app.use(createPinia())
loadXtxx('base').then(() => {
  app.use(router as any)
  app.mount(document.body)
})