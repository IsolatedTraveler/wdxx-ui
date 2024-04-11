import obj from '../../../component.json'
export interface comObjInject {
  [index: string]: string[] | boolean
}
export interface ComObj {
  next?: string[],
  prev?: string[],
  css?: string[]
  inject?: comObjInject,
  provide?: string[] | boolean,
  keys?: string[]
}
export interface ComsObj {
  [index: string]: ComObj | boolean
}
export interface filesObj {
  name: string,
  fileName: string
}
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
  comKeys.push(...obj.keys || [])
})
export {
  comObj,
  comKey,
  comKeys
}
