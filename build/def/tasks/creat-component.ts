import { comObj, comArrObj, getComponent, filesObj, compRoot, write, stylesRoot, componentInstance, componentVue, componentIndex, dealName, epRoot, projRoot, PKG_NAME, uiFileName, componentUse, componentProp, CSS_PATH, stylesModuleRoot, getName, comKey, ComObj, dealNameStr, InjectRoot, provideRoot } from "@ui/build-utils"
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
    // 创建hooks/use-provide/${key}.ts
    // console.log(resolve(hooksRoot, `${key}.ts`))
    // arr.push(write(resolve(hooksRoot, `${key}.ts`), getHooks(key)))
    // 创建components/${key}/style/index.ts
    arr.push(write(resolve(styleUrl, 'index.ts'), `import '@ui/styles/src/base.scss'\nimport '@ui/styles/src/${key}.scss'\nimport '@ui/styles/src/end.scss'`))
    // 创建components/${key}/style/css.ts
    arr.push(write(resolve(styleUrl, 'css.ts'), `import '@ui/styles/base.css'\nimport '@ui/styles/${key}.css'\nimport '@ui/styles/end.css'`))
    // 创建styles/src/mod/${key}/index.scss
    arr.push(write(resolve(styleMod, 'index.scss'), `@use 'sass:map';\n@use '../../mixins/index.scss' as *;\n@use '../../config/index.scss' as *;\n@use './${key}.scss' as *;\n@include styles(${key}, $${key}, $attr, $state, $media);\n@include create(${key}) {\n\n}`))
    // 创建styles/src/mod/${key}/${key}.scss
    arr.push(write(resolve(styleMod, key + '.scss'), `@use 'sass:map';\n@use '../../config/index.scss' as *;\n$attr:('disabled');\n$media: ('hover');\n$state: ();\n$${key}: (\n  'mod': (),\n  'attr': setAttr($attr),\n  'state': setState($state),\n  'media': setMedia($media)\n) !default;`))
    return Promise.all(arr)
  }))
}
function getHooks(key: any) {
  let name = getName([key])
  return `import { ${name}Props } from "@ui/components/${key}/src/${key}";
import { computed, inject } from "vue";

export const useInject${name} = (props: ${name}Props) => {
  return {
  }
}`
}
function getExportStr(arr: string[]) {
  return arr.map(it => `export * from './${it}';\n`)
}
async function UiComponent() {
  let component = getExportStr(comKey), str = '', cssI = `@forward './base/index.scss';\n`, provide = '', inject = ''
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
      provide += getExportStr(obj.provide ? obj.provide === true ? [key] : obj.provide : [])
      inject += getExportStr(obj.inject ? Object.keys(obj.inject) : [])
    }
    obj.keys.forEach(it => {
      cssI += `@forward ./mod/${it}/index.scss;\n`
    })
    comObj.keys.push(...obj.keys)
    str += `import {${obj.keys.map(dealNameStr).join(',')}} from '@ui/components/${key}'\n`
  })
  cssI += `@forward './end/index.scss';`
  str += `export default[\n  ${comObj.keys.map(dealNameStr).join(',\n  ')}\n]`
  return Promise.all([
    // 创建z-ui/commponent.ts
    write(resolve(epRoot, 'component.ts'), str),
    // 创建commponents/index.ts
    write(resolve(compRoot, 'index.ts'), component),
    // 修改styles/src/index.scss
    write(resolve(stylesRoot, 'index.scss'), cssI),
    // 修改hooks/use-provide/index.scss
    write(resolve(provideRoot, 'index.ts'), provide),
    // 修改hooks/use-inject/index.scss
    write(resolve(InjectRoot, 'index.ts'), inject)
  ])
}
async function componentD() {
  const com = Object.keys(comObj)
  let str = 'import "@vue/runtime-core"\ndeclare module "@vue/runtime-core" {\n  export interface GlobalComponents {\n    ', st = `@forward './base/index.scss';`, str1 = ''
  // com
  str += com.map((name) => {
    st += `\n@forward '${CSS_PATH}${name}/index.scss';`
    str1 += `export * from './${name}'\n`
    name = dealName(name.split('-'))
    return `${name}: typeof import("../packages/${uiFileName}")["${name}"];`
  }).join('\n    ')
  str += '\n  }\n  interface ComponentCustomProperties {\n    '
  // plugin
  str += '\n  }\n}\nexport {}'
  st += `\n@forward './end/index.scss';`
  // 修改styles/src/index.scss
  write(resolve(stylesRoot, 'index.scss'), st)
  // 修改hooks/use-provide/index.scss
  // write(resolve(hooksRoot, 'index.ts'), str1)
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
      // // 创建typings/components.d.ts
      // componentD(),
      // // 创建global.d.ts
      // componentG(),
      // // 创建components
      // createCom(arr)
    ])
  })
}