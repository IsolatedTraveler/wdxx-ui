import routes from './routes'
import * as fbdq from './fbdq'
import { getConfig } from '@/api'
import { RouteRecordRaw } from 'vue-router'
import { useBaseStore } from '@/store'
export default function () {
  return getConfig('fbdq').then(v => {
    const root = useBaseStore().getRoot
    return Object.values({ ...routes, ...(fbdq[v] || {}) }).map((it) => {
      (it as RouteRecordRaw).path = (root + (it as RouteRecordRaw).path).replace(/\/\//g, '/')
      return it
    }) as RouteRecordRaw[]
  })
}