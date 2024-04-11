import { projRoot, varsRoot, readFile, firstMax, write } from "@ui/build-utils"
import { ObjStr } from "@ui/vars"
import path from "path"
import vars from '../../../var.json'
const ml = vars.ml, root = path.resolve(projRoot, 'var.json')
function getPage(ml: string, page: Array<string>) {
  return readFile(path.resolve(varsRoot, ml)).then((files) => {
    if (page && page.length) {
      return (files as Array<ObjStr>).filter(({ name }) => {
        if (page.includes(name)) {
          return false
        } else {
          var key = name.split('.')[0]
          if (page.includes(key)) {
            page.forEach((it, i) => {
              page[i] = it == key ? name : it
            })
            return false
          }
        }
        return true
      })
    }
    return files as Array<ObjStr>
  })
}
function create(ml: string) {
  var page = (vars as any)[ml]
  return getPage(ml, page).then((files) => {
    return Promise.all(files.map(({ file, name }) => {
      page.push(name)
      return import(file).then(data => {
        var keys = Object.keys(data)
        keys = keys.map(key => {
          let val = data[key], Key = firstMax(key) + 'V'
          return `export type ${Key} = '${val.join("' | '")}'\nexport const ${key}:Array<${Key}> = ['${val.join("', '")}']`
        })
        return write(file, keys.join('\n'))
      })
    }))
  })
}
export const createVar = () => {
  if (ml && ml.length) {
    return Promise.all(ml.filter((it: any) => it).map((it: any) => {
      return create(it as string)
    })).then(() => {
      return write(root, JSON.stringify(vars))
    })
  }
  return Promise.resolve()
}