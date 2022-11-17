import path from 'path'
import { compRoot, readdir, write, epRoot, projRoot, PKG_NAME } from "../../utils"

const UiComponent = (com: Array<any>) => {
  let str = com.map(({name, fileName}) => `import {${name}} from '@ui/components/${fileName}'`).join('\n')
  str += '\nexport default [\n  ' + com.map(it => it.name).join(',\n  ') + '\n]'
  return write(path.resolve(epRoot, 'component.ts'), str)
}
const dealName = (arr: Array<string>):string => {
  return ['Jt', ...arr.map((it: string) => {
    return it.slice(0, 1).toUpperCase() + it.slice(1)
  })].join('')
}
const getComponent = () => {
  return readdir(compRoot).then(arr => {
    return (arr as Array<any>).map(({name}) => ({name: dealName(name.split('-')), fileName: name}))
  })
}
const componentD = (com: Array<any>) => {
  let str = 'import "@vue/runtime-core"\ndeclare module "@vue/runtime-core" {\n  export interface GlobalComponents {\n    '
  // com
  str += com.map(({name}) => `${name}: typeof import("../packages/ui")["${name}"];`).join('\n    ')
  str += '\n  }\n  interface ComponentCustomProperties {\n    '
  // plugin
  str += '\n  }\n}\nexport {}'
  return write(path.resolve(projRoot, 'typings/components.d.ts'), str)
}
const componentG = (com: Array<any>) => {
  let str = 'declare module "@vue/runtime-core" {\n  export interface GlobalComponents {\n    '
  // com
  str += com.map(({name}) => `${name}: typeof import("${PKG_NAME}")["${name}"];`).join('\n    ')
  str += '\n  }\n  interface ComponentCustomProperties {\n    '
  // plugin
  str += '\n  }\n}\nexport {}'
  return write(path.resolve(projRoot, 'global.d.ts'), str)
}
export const creatComponent = () => {
  return getComponent().then((arr: Array<any>) => {
    return Promise.all([
      UiComponent(arr),
      componentD(arr),
      componentG(arr)
    ])
  })
}