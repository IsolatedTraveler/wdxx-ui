import { epPackage, epRoot, projRoot } from "../../utils"
const shell = require('shelljs')
const {version} = require(epPackage)
const setVersion = (arr: Array<number>, i:number): Array<number> => {
  if (i > 0) {
    if (arr[i] > 98) {
      arr[i] = 0
      return setVersion(arr, i - 1)
    }
  }
  arr[i] += 1
  return arr
}
export const alertVersion =async () => {
  const arr = setVersion(version.split('.').map((it:string) => parseInt(it)), 2)
  shell.cd(epRoot)
  shell.exec("npm version " + arr.join('.'))
  shell.cd(projRoot)
  return
}