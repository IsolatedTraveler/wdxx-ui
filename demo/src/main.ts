import { createApp } from 'vue'
import { createPinia } from 'pinia';
import wdxx from '../../packages/z-ui/index'
import '../../packages/styles/dist/index.css';
import App from './App.vue'
import { router, loadXtxx } from "./router";
import * as api from './api'
import * as util from '@assets/index'
const app = createApp(App)
api.setConfig(util.zzjConfig())
util.setFontSize(1200)
app.config.globalProperties.$api = api;
app.config.globalProperties.$util = util;
app.use(createPinia())
loadXtxx('base').then(() => {
  app.use(wdxx)
  app.use(router)
  app.mount('#app')
})