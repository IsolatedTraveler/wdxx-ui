import routes from './routes'
import * as fbdq from './fbdq/index'
import { getConfig } from '@/api'
import { RouteRecordRaw } from 'vue-router'
import { useLoadStore } from '@/store'
export default function () {
  return getConfig('fbdq').then(v => {
    const root = useLoadStore().getRoot
    return Object.values({ ...routes, ...((fbdq as any)[v] || {}) }).map((it) => {
      (it as RouteRecordRaw).path = (root + (it as RouteRecordRaw).path).replace(/\/\//g, '/')
      return it
    }) as RouteRecordRaw[]
  })
}