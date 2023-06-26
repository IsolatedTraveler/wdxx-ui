import { comObj, comArrObj, getComponent, filesObj, compRoot, write, stylesRoot, componentInstance, componentVue, componentIndex, dealName, epRoot, projRoot, PKG_NAME, uiFileName, componentUse, componentProp, CSS_PATH, stylesModuleRoot } from "@ui/build-utils"
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
    const keyComUrl = resolve(compRoot, key), styleUrl = resolve(keyComUrl, 'style'), styleMod = resolve(stylesModuleRoot, key), arr: Array<Promise<any>> = []
    await mkdir(keyComUrl, { recursive: true })
    await mkdir(styleUrl, { recursive: true })
    await mkdir(styleMod, { recursive: true })
    if (comObj[key] === true) {
      const comUrl = resolve(keyComUrl, 'src')
      // 创建components
      await mkdir(comUrl, { recursive: true })
      // 创建components/${key}/src/${key}.ts
      arr.push(write(resolve(comUrl, key + '.ts'), componentProp(key)))
      // 创建components/${key}/src/${key}.vue
      arr.push(write(resolve(comUrl, key + '.vue'), componentVue(key)))
      // 创建components/${key}/src/insstance.ts
      arr.push(write(resolve(comUrl, 'instance.ts'), componentInstance(key, comArrObj[key])))
      // 创建components/${key}/src/use-${key}.ts
      arr.push(write(resolve(comUrl, 'use-' + key + '.ts'), componentUse(key)))
      // // 创建components/${key}/index.ts
      arr.push(write(resolve(keyComUrl, 'index.ts'), componentIndex(key, comArrObj[key])))
      delete comObj[key]
    }
    // 创建components/${key}/style/index.ts
    arr.push(write(resolve(styleUrl, 'index.ts'), `import '@ui/styles/src/base.scss'\nimport '@ui/styles/src/${key}.scss'\nimport '@ui/styles/src/end.scss'`))
    // 创建components/${key}/style/css.ts
    arr.push(write(resolve(styleUrl, 'css.ts'), `import '@ui/styles/base.css'\nimport '@ui/styles/${key}.css'\nimport '@ui/styles/end.css'`))
    // 创建styles/src/mod/${key}/index.scss
    arr.push(write(resolve(styleMod, 'index.scss'), `@use 'sass:map';\n@use '../mixins/index.scss' as *;\n@use '../config/index.scss' as *;\n@use '../mod/${key}.scss' as *;\n@include styles(${key}, $${key}, $attr, $state, $media);\n@include create(${key}) {\n\n}`))
    // 创建styles/src/mod/${key}/${key}.scss
    arr.push(write(resolve(styleMod, key + '.scss'), `@use 'sass:map';\n@use '../config/index.scss' as *;\n$attr:('disabled');\n$media: ('hover');\n$state: ();\n$${key}: (\n  'mod': (),\n  'attr': setAttr($attr),\n  'state': setState($state),\n  'media': setMedia($media)\n) !default;`))
    return Promise.all(arr)
  }))
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
  let str = 'import "@vue/runtime-core"\ndeclare module "@vue/runtime-core" {\n  export interface GlobalComponents {\n    ', st = `@forward './base/index.scss';`
  // com
  str += com.map((name) => {
    st += `\n@forward '${CSS_PATH}${name}/index.scss';`
    name = dealName(name.split('-'))
    return `${name}: typeof import("../packages/${uiFileName}")["${name}"];`
  }).join('\n    ')
  str += '\n  }\n  interface ComponentCustomProperties {\n    '
  // plugin
  str += '\n  }\n}\nexport {}'
  st += `\n@forward './end/index.scss';`
  // 修改styles/src/index.scss
  write(resolve(stylesRoot, 'index.scss'), st)
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