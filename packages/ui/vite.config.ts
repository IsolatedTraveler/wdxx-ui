
import { defineConfig } from "vite";
import {default as build} from './config/build'
import {default as plugins} from './config/plugins'
export default defineConfig({
  build,
  plugins
})
