import routes from './routes'
import * as fbdq from './fbdq'
import { getConfig } from '@/api'
import { RouteRecordRaw } from 'vue-router'
export default function () {
  return getConfig('fbdq').then(v => {
    return Object.values({ ...routes, ...(fbdq[v] || {}) }) as RouteRecordRaw[]
  })
}