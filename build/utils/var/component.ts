import path from 'path'
import { projRoot } from './path'
export interface comObjInject {
  [index: string]: string[]
}
export interface ComObj {
  next?: string[],
  prev?: string[],
  inject?: comObjInject,
  provide?: string[] | true,
  keys: string[]
}
export interface ComsObj {
  [index: string]: ComObj | true
}
export interface filesObj {
  name: string,
  fileName: string
}
const obj: any = require(path.resolve(projRoot, 'component.json'))
const comObj: ComsObj = Object.assign(obj.ywc, obj.wwc)
const comKey: string[] = obj.keys
const comKeys: string[] = []
comKey.map(key => {
  let obj = comObj[key] as ComObj | true
  if (obj === true) {
    obj = { keys: [key] } as ComObj
  } else {
    obj.keys = []
    if (obj.prev) {
      obj.keys.push(...obj.prev)
    }
    obj.keys.push(key)
    if (obj.next) {
      obj.keys.push(...obj.next)
    }
  }
  comObj[key] = obj
  comKeys.push(...obj.keys)
})
console.log(comObj)
export {
  comObj,
  comKey,
  comKeys
}
