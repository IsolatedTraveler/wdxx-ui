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
  keys: string[],
  [index: string]: ComObj | true | string[]
}
export interface filesObj {
  name: string,
  fileName: string
}
const comArrObj: any = {}
const comObj: ComsObj = require(path.resolve(projRoot, 'component.json'))
const comKey: string[] = Object.keys(comObj)
const keys: string[] = []
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
  keys.push(...obj.keys)
})
comObj.keys = keys
console.log(JSON.stringify(comObj))
export {
  comObj,
  comKey,
  comArrObj
}
