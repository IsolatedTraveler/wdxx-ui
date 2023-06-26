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
comObj.keys = []
export {
  comObj,
  comKey,
  comArrObj
}
