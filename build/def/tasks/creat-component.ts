import { comObj, comArrObj, getComponent, filesObj, compRoot, write, stylesRoot, componentInstance, componentVue, componentIndex, epRoot, projRoot, PKG_NAME, componentUse, componentProp, CSS_PATH, stylesModuleRoot, getName, comKey, ComObj, dealNameStr, InjectRoot, provideRoot, comKeys } from "@ui/build-utils"
import { mkdir } from 'fs/promises'
import { resolve } from "path";
function getExportStr(arr: string[], prev = `export * from './`, next = `';\n`) {
  return arr.map(it => `${prev}${it}${next}`).join('')
}
async function UiComponent() {
  let component = getExportStr(comKey), str = '', cssI = `@forward './base/index.scss';\n`, provide = '', inject = '',
    typeing = 'declare module "@vue/runtime-core" {\n  export interface GlobalComponents {\n    '
  comKey.map(key => {
    let obj = comObj[key] as ComObj
    provide += getExportStr(obj.provide ? obj.provide === true ? [key] : obj.provide : [])
    inject += getExportStr(obj.inject ? Object.keys(obj.inject) : [])
    cssI += getExportStr(obj.keys, '@forward ' + CSS_PATH, '/index.scss;\n')
    str += `import {${obj.keys.map(dealNameStr).join(',')}} from '@ui/components/${key}'\n`
  })
  cssI += `@forward './end/index.scss';`
  str += `export default[\n  ${comKeys.map(dealNameStr).join(',\n  ')}\n]`
  typeing += comKeys.map(it => {
    let name = dealNameStr(it)
    return `${name}: typeof import("${PKG_NAME}")["${name}"];`
  }).join('\n    ')
  typeing += '\n  }\n  interface ComponentCustomProperties {\n    '
  typeing += '\n  }\n}\nexport {}'
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
    write(resolve(InjectRoot, 'index.ts'), inject),
    // 修改typings/components.d.ts
    write(resolve(projRoot, 'global.d.ts'), typeing)
  ])
}
function createCom(arr: Array<filesObj>) {
  // excludeCom(arr)
  // const keys = Object.keys(comObj)
  const keys = ["icon"]
  return Promise.all(keys.map(async (key) => {
    const keyComUrl = resolve(compRoot, key), styleUrl = resolve(keyComUrl, 'style'), styleMod = resolve(stylesModuleRoot, key), arr: Array<Promise<any>> = []
    await mkdir(keyComUrl, { recursive: true })
    await mkdir(styleUrl, { recursive: true })
    await mkdir(styleMod, { recursive: true })
    //   if (comObj[key] === true) {
    //     const comUrl = resolve(keyComUrl, 'src')
    //     // 创建components
    //     await mkdir(comUrl, { recursive: true })
    //     // 创建components/${key}/src/${key}.ts
    //     arr.push(write(resolve(comUrl, key + '.ts'), componentProp(key)))
    //     // 创建components/${key}/src/${key}.vue
    //     arr.push(write(resolve(comUrl, key + '.vue'), componentVue(key)))
    //     // 创建components/${key}/src/insstance.ts
    //     arr.push(write(resolve(comUrl, 'instance.ts'), componentInstance(key, comArrObj[key])))
    //     // 创建components/${key}/src/use-${key}.ts
    //     arr.push(write(resolve(comUrl, 'use-' + key + '.ts'), componentUse(key)))
    //     // // 创建components/${key}/index.ts
    //     arr.push(write(resolve(keyComUrl, 'index.ts'), componentIndex(key, comArrObj[key])))
    //     delete comObj[key]
    //   }
    //   // 创建hooks/use-provide/${key}.ts
    //   // console.log(resolve(hooksRoot, `${key}.ts`))
    //   // arr.push(write(resolve(hooksRoot, `${key}.ts`), getHooks(key)))
    //   // 创建components/${key}/style/index.ts
    //   arr.push(write(resolve(styleUrl, 'index.ts'), `import '@ui/styles/src/base.scss'\nimport '@ui/styles/src/${key}.scss'\nimport '@ui/styles/src/end.scss'`))
    //   // 创建components/${key}/style/css.ts
    //   arr.push(write(resolve(styleUrl, 'css.ts'), `import '@ui/styles/base.css'\nimport '@ui/styles/${key}.css'\nimport '@ui/styles/end.css'`))
    //   // 创建styles/src/mod/${key}/index.scss
    //   arr.push(write(resolve(styleMod, 'index.scss'), `@use 'sass:map';\n@use '../../mixins/index.scss' as *;\n@use '../../config/index.scss' as *;\n@use './${key}.scss' as *;\n@include styles(${key}, $${key}, $attr, $state, $media);\n@include create(${key}) {\n\n}`))
    //   // 创建styles/src/mod/${key}/${key}.scss
    //   arr.push(write(resolve(styleMod, key + '.scss'), `@use 'sass:map';\n@use '../../config/index.scss' as *;\n$attr:('disabled');\n$media: ('hover');\n$state: ();\n$${key}: (\n  'mod': (),\n  'attr': setAttr($attr),\n  'state': setState($state),\n  'media': setMedia($media)\n) !default;`))
    //   return Promise.all(arr)
  }))
}
function excludeCom(arr: Array<filesObj>) {
  arr && arr.forEach(({ fileName }) => {
    delete comObj[fileName]
  })
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
export const creatComponent = async () => {
  return getComponent().then((arr: Array<filesObj>) => {
    // 排除已经建立文件的页面
    return Promise.all([
      // 创建componts.ts
      UiComponent(),
      // // 创建components
      createCom(arr)
    ])
  })
}