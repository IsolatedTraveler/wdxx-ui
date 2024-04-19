import path from 'path'
import { dealHtml, dealJs } from './dealHtml'
export function dealFile(root: string, html: string, js: string = '') {
  return Promise.all([
    dealHtml(path.resolve(root, html)),
    dealJs(path.resolve(root, js))
  ])
}