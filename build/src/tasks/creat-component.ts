import path from 'path'
import {write, epRoot, projRoot, PKG_NAME, getComponent, getComponentName } from "../../utils"
import { comObj, filesObj } from '../../utils/var/component'
const UiComponent = (com: Array<filesObj>, comName: Array<string>) => {
  let str = com.map(({name, fileName}) => {
    const arr: Array<string> = comObj[name]
    if (arr) {
      return `import {\n  ${name},\n  ${arr.join(',\n  ')}\n} from '@ui/components/${fileName}'`
    } else {
      return `import {${name}} from '@ui/components/${fileName}'`
    }
  }).join('\n')
  str += '\nexport default [\n  ' 
  str += comName.join(',\n  ')
  str += '\n]'
  return write(path.resolve(epRoot, 'component.ts'), str)
}
const componentD = (com: Array<string>) => {
  let str = 'import "@vue/runtime-core"\ndeclare module "@vue/runtime-core" {\n  export interface GlobalComponents {\n    '
  // com
  str += com.map((name) => `${name}: typeof import("../packages/ui")["${name}"];`).join('\n    ')
  str += '\n  }\n  interface ComponentCustomProperties {\n    '
  // plugin
  str += '\n  }\n}\nexport {}'
  return write(path.resolve(projRoot, 'typings/components.d.ts'), str)
}
const componentG = (com: Array<string>) => {
  let str = 'declare module "@vue/runtime-core" {\n  export interface GlobalComponents {\n    '
  // com
  str += com.map((name) => `${name}: typeof import("${PKG_NAME}")["${name}"];`).join('\n    ')
  str += '\n  }\n  interface ComponentCustomProperties {\n    '
  // plugin
  str += '\n  }\n}\nexport {}'
  return write(path.resolve(projRoot, 'global.d.ts'), str)
}
export const creatComponent = () => {
  return getComponent().then((arr: Array<any>) => {
    const {files, comName} = getComponentName(arr)
    return Promise.all([
      UiComponent(files, comName),
      componentD(comName),
      componentG(comName)
    ])
  })
}