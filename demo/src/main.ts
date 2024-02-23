import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue'
import { router, loadXtxx } from "./router";
import * as api from './api'
import * as util from '@assets/index'
import zUi from 'z-uis/index'
import '@ui/styles/dist/index.css'
import 'highlight.js/styles/atom-one-dark.css';
const app = createApp(App)
// util.setFontSize(1200)
app.config.globalProperties.$api = api;
app.config.globalProperties.$util = util;
app.use(createPinia())
app.use(zUi)
loadXtxx('base').then(() => {
  app.use(router as any)
  app.mount(document.body)
})