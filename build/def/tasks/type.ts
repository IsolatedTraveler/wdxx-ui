import { projRoot, varsRoot, readFile, firstMax, write } from "@ui/build-utils"
import { ObjStr } from "@ui/vars"
import path from "path"
const vars = require(path.resolve(projRoot, 'var.json'))
const ml = vars.ml
function getPage(ml: string) {
  var page = vars[ml]
  return readFile(path.resolve(varsRoot, ml)).then((files) => {
    if (page && page.length) {
      return (files as Array<ObjStr>).filter(({ name }) => {
        name = name.split('.')[0]
        return !page.includes(name)
      })
    }
    return files as Array<ObjStr>
  })
}
function create(ml: string) {
  return getPage(ml).then((files) => {
    return Promise.all(files.map(({ file }) => {
      const data = require(file)
      var keys = Object.keys(data)
      keys = keys.map(key => {
        let val = data[key]
        return `export const ${key} = ['${val.join("', '")}']\nexport type ${firstMax(key)}V = '${val.join("' | '")}'`
      })
      return write(file, keys.join('\n'))
    }))
  })
}
export const createVar = () => {
  if (ml && ml.length) {
    return Promise.all(ml.filter((it: any) => it).map((it: any) => {
      return create(it as string)
    }))
  }
  return Promise.resolve()
}