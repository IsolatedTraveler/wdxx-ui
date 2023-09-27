import routes from './routes'
import * as fbdq from './fbdq'
import { getConfig } from '@/api'
export default function () {
  return getConfig('fbdq').then(v => {
    return Object.values({ ...routes, ...(fbdq[v] || {}) })
  })
}