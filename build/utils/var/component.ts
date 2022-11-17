import path from 'path'
import { projRoot } from './path'
export interface ComObj {
  0: string
  1: Array<string>
}
export interface filesObj {
  name: string,
  fileName: string
}
const comJson = require(path.resolve(projRoot, 'component.json'))
const comObj:any = {}
comJson.forEach(({0:name, 1: arr}: ComObj) => {
  comObj[name as string] = arr;
  (arr as Array<string>).forEach(key => {
    comObj[key] = true
  })
})
export {
  comObj
}