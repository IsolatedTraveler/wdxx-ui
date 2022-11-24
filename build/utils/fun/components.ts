import { compRoot, PKG_PREFIX } from "../var"
import { comObj, filesObj } from "../var/component"
import { readdir } from "./fs"
export function firstMax(it: string) : string {
  return it.slice(0, 1).toUpperCase() + it.slice(1)
}
export function getName(arr: Array<string>): string {
  return arr.map((it: string) => {
    return firstMax(it)
  }).join('')
}
export const dealName = (arr: Array<string>):string => {
  return getName([PKG_PREFIX, ...arr])
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
function getImport(arr: Array<string>): Array<string> {
  return arr.map(it => {
    return `import ${getName(it.split('-'))} from './${it}.vue'`
  })
}
function getExport(arr: Array<string>): Array<string> {
  return arr.map(it => {
    const name = getName(it.split('-'))
    return `export type ${name}Instance = InstanceType<typeof ${name}>`
  })
}
export const componentInstance = (key: string, group: Array<string> = []) => {
  const arrI: Array<string> = getImport([key, ...group]), arrE: Array<string> = getExport([key, ...group])
  return [
    ...arrI,
    ...arrE
  ].join('\n')
}
export const componentVue = (key: string) : string => {
  return [
    '<template>',
    '</template>',
    '<script lang="ts" setup>',
    'defineOptions({',
    `  name: '${PKG_PREFIX}-${key}'`,
    '})',
    '</script>'
  ].join('\n')
}
export const componentIndex = (key: string, group: Array<string> = []) => {
  const arrI: Array<string> = getImport([key, ...group])
  return [
    group.length ?  `import { withInstall, withNoopInstall } from '@ui/utils'` : `import { withInstall } from '@ui/utils'`,
    ...arrI,
    `export const ${firstMax(PKG_PREFIX)}${getName(key.split('-'))} = withInstall(${getName(key.split('-'))}${
      group.length ? `, {${group.map(it => getName(it.split('-'))).join(', ')}}` : ''
    })`,
    ...group.map(it => {
      return `export const ${firstMax(PKG_PREFIX)}${getName(it.split('-'))} = withNoopInstall(${getName(it.split('-'))})`
    }),
    `export * from './src/instance'`,
    `export default ${firstMax(PKG_PREFIX)}${getName(key.split('-'))}`
  ].join('\n')
}