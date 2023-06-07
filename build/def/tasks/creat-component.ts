import { comObj, comArrObj, getComponent, filesObj, compRoot, write, stylesRoot, componentInstance, componentVue, componentIndex, dealName, epRoot, projRoot, PKG_NAME, uiFileName, componentUse, componentProp, CSS_PATH } from "@ui/build-utils"
import { mkdir } from 'fs/promises'
import { resolve } from "path";
function excludeCom(arr: Array<filesObj>) {
  arr && arr.forEach(({ fileName }) => {
    delete comObj[fileName]
  })
}
function createCom(arr: Array<filesObj>) {
  excludeCom(arr)
  const keys = Object.keys(comObj)
  return Promise.all(keys.map(async (key) => {
    const keyComUrl = resolve(compRoot, key), styleUrl = resolve(keyComUrl, 'style'), arr: Array<Promise<any>> = []
    await mkdir(keyComUrl, { recursive: true })
    await mkdir(styleUrl, { recursive: true })
    if (comObj[key] === true) {
      const comUrl = resolve(keyComUrl, 'src')
      await mkdir(comUrl, { recursive: true })
      arr.push(write(resolve(comUrl, key + '.ts'), componentProp(key)))
      arr.push(write(resolve(comUrl, key + '.vue'), componentVue(key)))
      arr.push(write(resolve(comUrl, 'instance.ts'), componentInstance(key, comArrObj[key])))
      arr.push(write(resolve(comUrl, 'use-' + key + '.ts'), componentUse(key)))
      arr.push(write(resolve(keyComUrl, 'index.ts'), componentIndex(key, comArrObj[key])))
      delete comObj[key]
    }
    arr.push(write(resolve(styleUrl, 'index.ts'), `import '@ui/styles/src/base.scss'\nimport '@ui/styles/src/${key}.scss'\nimport '@ui/styles/src/end.scss'`))
    arr.push(write(resolve(styleUrl, 'css.ts'), `import '@ui/styles/base.css'\nimport '@ui/styles/${key}.css'\nimport '@ui/styles/end.css'`))
    arr.push(write(resolve(stylesRoot, 'src/' + key + '.scss'), `@use 'sass:map';\n@use './mixins/index.scss' as *;\n@use './config/index.scss' as *;\n@use './mod/${key}.scss' as *;\n@include styles(${key}, $${key}, $attr, $state, $media);\n@include create(${key}) {\n\n}`))
    arr.push(write(resolve(stylesRoot, 'src/mod/' + key + '.scss'), `@use 'sass:map';\n@use '../config/index.scss' as *;\n$attr:('disabled');\n$media: ('hover');\n$state: ();\n$${key}: (\n  'mod': (),\n  'attr': setAttr($attr),\n  'state': setState($state),\n  'media': setMedia($media)\n) !default;`))
    return Promise.all(arr)
  })).then(() => {
    const keys = Object.keys(comObj)
    return Promise.all(
      keys.map(async (key) => {
        const name = comObj[key], comUrl = resolve(resolve(compRoot, name), 'src'), arr = []
        arr.push(write(resolve(comUrl, key + '.ts'), componentProp(key)))
        arr.push(write(resolve(comUrl, key + '.vue'), componentVue(key)))
        arr.push(write(resolve(comUrl, 'use-' + key + '.ts'), componentUse(key)))
        const keyUrl = resolve(compRoot, name + '/src/instance.ts')
        arr.push(write(keyUrl, componentInstance(name, comArrObj[name])))
        arr.push(write(resolve(compRoot, name + '/index.ts'), componentIndex(name, comArrObj[name])))
        return Promise.resolve(arr)
      })
    )
  })
}
async function UiComponent() {
  let component = ''
  const keys = Object.keys(comArrObj), arrE: Array<string> = [],
    arri = keys.map(key => {
      component += `export * from './${key}'\n`
      const name = dealName(key.split('-')),
        group = comArrObj[key] === true ? false :
          comArrObj[key] ? comArrObj[key].map((it: string) => dealName(it.split('-'))) : false,
        groupStr = group ? (', ' + group.join(', ')) : ''
      arrE.push(name)
      group && arrE.push(...group)
      return `import {${name}${groupStr}} from '@ui/components/${key}'`
    })
  const str = arri.join('\n') + '\n' + `export default [\n  ${arrE.join(',\n  ')}\n]`
  return Promise.all([
    write(resolve(epRoot, 'component.ts'), str),
    write(resolve(compRoot, 'index.ts'), component)
  ])
}
async function componentD() {
  const com = Object.keys(comObj)
  let str = 'import "@vue/runtime-core"\ndeclare module "@vue/runtime-core" {\n  export interface GlobalComponents {\n    ', st = `@use '${CSS_PATH}base.scss';`
  // com
  str += com.map((name) => {
    st += `\n@use '${CSS_PATH}${name}.scss';`
    name = dealName(name.split('-'))
    return `${name}: typeof import("../packages/${uiFileName}")["${name}"];`
  }).join('\n    ')
  str += '\n  }\n  interface ComponentCustomProperties {\n    '
  // plugin
  str += '\n  }\n}\nexport {}'
  st += `\n@use '${CSS_PATH}end.scss';`
  write(resolve(stylesRoot, 'src/index.scss'), st)
  return write(resolve(projRoot, 'typings/components.d.ts'), str)
}
async function componentG() {
  const com = Object.keys(comObj)
  let str = 'declare module "@vue/runtime-core" {\n  export interface GlobalComponents {\n    '
  // com
  str += com.map((name) => {
    name = dealName(name.split('-'))
    return `${name}: typeof import("${PKG_NAME}")["${name}"];`
  }).join('\n    ')
  str += '\n  }\n  interface ComponentCustomProperties {\n    '
  // plugin
  str += '\n  }\n}\nexport {}'
  return write(resolve(projRoot, 'global.d.ts'), str)
}
export const creatComponent = async () => {
  return getComponent().then((arr: Array<filesObj>) => {
    // 排除已经建立文件的页面
    return Promise.all([
      // 创建componts.ts
      UiComponent(),
      // 创建typings/components.d.ts
      componentD(),
      // 创建global.d.ts
      componentG(),
      // 创建components
      createCom(arr)
    ])
  })
}