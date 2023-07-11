import { projRoot, varsRoot, readFile, firstMax, write } from "@ui/build-utils"
import { ObjStr } from "@ui/vars"
import path from "path"
const root = path.resolve(projRoot, 'var.json'), vars = require(root)
const ml = vars.ml
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
  var page = vars[ml]
  return getPage(ml, page).then((files) => {
    return Promise.all(files.map(({ file, name }) => {
      page.push(name)
      const data = require(file)
      var keys = Object.keys(data)
      keys = keys.map(key => {
        let val = data[key], Key = firstMax(key) + 'V'
        return `export type ${Key} = '${val.join("' | '")}'\nexport const ${key}:Array<${Key}> = ['${val.join("', '")}']`
      })
      return write(file, keys.join('\n'))
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