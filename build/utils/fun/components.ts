import { compRoot } from "../var"
import { comObj, filesObj } from "../var/component"
import { readdir } from "./fs"

const dealName = (arr: Array<string>):string => {
  return ['Jt', ...arr.map((it: string) => {
    return it.slice(0, 1).toUpperCase() + it.slice(1)
  })].join('')
}

export const getComponent = () => {
  return readdir(compRoot).then(arr => {
    return (arr as Array<any>).map(({name}) => ({name: dealName(name.split('-')), fileName: name}))
  })
}
export const getComponentName = (com: Array<filesObj>) => {
  const comName: Array<string> = []
  const files: Array<filesObj> = com.filter(({name}) => {
    if (comObj[name] === true) {
      return false
    } else {
      const arr: Array<string> = comObj[name]
      comName.push(name)
      if (arr) {
        comName.push(...arr)
      }
      return true
    }
  })
  return {comName, files}
}