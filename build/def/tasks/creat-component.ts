import { comObj, getComponent, compRoot, write, stylesRoot, componentInstance, componentVue, componentIndex, epRoot, projRoot, PKG_NAME, componentUse, componentProp, CSS_PATH, stylesModuleRoot, getName, comKey, ComObj, dealNameStr, InjectRoot, provideRoot, comKeys, filesObj } from "@ui/build-utils"
import { mkdir } from 'fs/promises'
import { resolve } from "path";
function getExportStr(arr: string[], prev = `export * from './`, next = `';\n`) {
  return arr.map(it => `${prev}${it}${next}`).join('')
}
async function UiComponent() {
  let component = getExportStr(comKey), str = '', cssI = '', provide = '', inject = '',
    typeing = 'declare module "@vue/runtime-core" {\n  export interface GlobalComponents {\n    '
  comKey.map(key => {
    let obj = comObj[key] as ComObj
    provide += getExportStr(obj.provide ? obj.provide === true ? [key] : obj.provide : [])
    inject += getExportStr(obj.inject ? Object.keys(obj.inject) : [])
    cssI += getExportStr(obj.keys, `@forward '${CSS_PATH}`, `/index.scss';\n`)
    str += `import {${obj.keys.map(dealNameStr).join(',')}} from '@ui/components/${key}'\n`
  })
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
    // 修改styles/src/mod/index.scss
    write(resolve(stylesRoot, 'mod/index.scss'), cssI),
    // 修改hooks/use-provide/index.scss
    write(resolve(provideRoot, 'index.ts'), provide),
    // 修改hooks/use-inject/index.scss
    write(resolve(InjectRoot, 'index.ts'), inject),
    // 修改typings/components.d.ts
    write(resolve(projRoot, 'global.d.ts'), typeing)
  ])
}
function creatComponentMod(key: string, comUrl: any) {
  const keyComUrl = resolve(compRoot, key), styleUrl = resolve(keyComUrl, 'style'), styleMod = resolve(stylesModuleRoot, key)
  return Promise.all([
    mkdir(keyComUrl, { recursive: true }),
    mkdir(styleUrl, { recursive: true }),
    mkdir(styleMod, { recursive: true })
  ]).then(() => Promise.all([
    // 创建components/${key}/src/${key}.ts
    write(resolve(comUrl, key + '.ts'), componentProp(key)),
    // 创建components/${key}/src/${key}.vue
    write(resolve(comUrl, key + '.vue'), componentVue(key)),
    // 创建components/${key}/src/use-${key}.ts
    write(resolve(comUrl, 'use-' + key + '.ts'), componentUse(key)),
    // 创建components/${key}/style/index.ts
    write(resolve(styleUrl, 'index.ts'), `import '@ui/styles/src/base.scss'\nimport '@ui/styles/src/${key}.scss'\nimport '@ui/styles/src/end.scss'`),
    // 创建components/${key}/style/css.ts
    write(resolve(styleUrl, 'css.ts'), `import '@ui/styles/base.css'\nimport '@ui/styles/${key}.css'\nimport '@ui/styles/end.css'`),
    // 创建styles/src/mod/${key}/index.scss
    write(resolve(styleMod, 'index.scss'), getIndexCss(key)),
    // 创建styles/src/mod/${key}/index.scss
    write(resolve(styleMod, key + '.scss'), getComponentCss(key)),
    // 创建styles/src/mod/${key}/${key}Media.scss
    write(resolve(styleMod, key + '-media.scss'), getComponentCss(key, 'hover-'))
  ]))
}
function getComponentCss(key: string, add: string = '') {
  let val = `@use 'sass:map';
@use '../../vars/index.scss' as *;
$${key}-key--style: (
  background-color: map.get($color, primary, 2)
);
$${key}-key--class: ();
$${key}-key--attr: ();
$${key}--class: (
  key: (style: $${key}-key--style, child: (class: $${key}-key--class, attr: $${key}-key--attr))
);
$${key}--attr: ();
$${key}--style: ();
$${add}style: (
  class:$${key}--class,
  attr:$${key}--attr,
  style:$${key}--style
);
  `
  if (add === 'hover-') {
    val += `
    $styleMedia: (
      hover: $hover-style
    );
    `
  }
  return val
}
function getIndexCss(key: string) {
  return `@use 'sass:map';
@use '../../mixins/index.scss' as *;
@use '../../vars/index.scss' as *;
@use './${key}-media.scss' as *;
@use './${key}.scss' as *;

@include createSingleClass(${key}, '', '') {

  @include asyncMedia($styleMedia, '');
}
@include async($style, ${key}, '');`
}
function createCom(arr: Array<filesObj>) {
  excludeCom(arr)
  const keys = Object.keys(comObj)
  return Promise.all(keys.map(async (key) => {
    const obj = comObj[key] as ComObj, keyComUrl = resolve(compRoot, key), comUrl = resolve(keyComUrl, 'src')
    return Promise.all([
      mkdir(keyComUrl, { recursive: true }),
      mkdir(comUrl, { recursive: true })
    ]).then(() => Promise.all(obj.keys.map(it => creatComponentMod(it, comUrl)))).then(() => {
      const arr: Array<Promise<any>> = []
      // 创建hooks/use-provide/${key}.ts
      if (obj.provide) {
        (obj.provide === true ? [key] : obj.provide).map(it => {
          arr.push(write(resolve(provideRoot, `${it}.ts`), getProvide(it, key)))
        })
      }
      if (obj.inject) {
        let data = obj.inject, keys = Object.keys(data)
        keys.forEach(it => {
          arr.push(write(resolve(InjectRoot, `${it}.ts`), getInject(it, key, data[it])))
        })
      }
      // 创建components/${key}/src/insstance.ts
      arr.push(write(resolve(comUrl, 'instance.ts'), componentInstance(obj.keys)))
      // // 创建components/${key}/index.ts
      arr.push(write(resolve(keyComUrl, 'index.ts'), componentIndex(key, obj.keys)))
      return Promise.all(arr)
    })
  }))
}
function excludeCom(arr: Array<filesObj>) {
  arr && arr.forEach(({ fileName }) => {
    delete comObj[fileName]
  })
}
function getProvide(key: string, ml: string) {
  let name = getName(key.split('-'))
  return `import { ${name}Props } from "@ui/components/${ml}/src/${key}";
import { InjectionKey, provide } from "vue";
export interface Provide${name} {

}
export const provide${name}Id:InjectionKey<Provide${name}> = Symbol('${key}')
export const useProvide${name} = (props: ${name}Props) => {
  provide(provide${name}Id, {
    
  })
}`
}
function getInject(key: any, ml: string, provides: string[]) {
  let name = getName(key.split('-'))
  return `import { ${name}Props } from "@ui/components/${ml}/src/${key}";
import { inject } from "vue";
${provides.map(it => {
    return `import { provid${getName(it.split('-'))}Id } from "../use-provide/${it}";`
  }).join('\n')}
export const useInject${name} = (props: ${name}Props) => {
  ${provides.map(it => {
    return `  const {  } = inject(provide${getName(it.split('-'))}Id, { })`
  }).join('\n')}
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