import { createApp } from 'vue'
import { createPinia } from 'pinia';
import wdxx from 'z-uis'
import '../../dist/z-uis/styles/index.css';
import App from './App.vue'
import { router, loadXtxx } from "./router";
import * as api from './api'
import * as util from '@assets/index'
const app = createApp(App)
app.use(wdxx)
api.setConfig(util.zzjConfig())
util.setFontSize(1200)
app.config.globalProperties.$api = api;
app.config.globalProperties.$util = util;
app.use(createPinia())
loadXtxx('base').then(() => {
  app.use(router)
  app.mount(document.body)
})