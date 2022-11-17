import { epPackage, epRoot, projRoot } from "../../utils"
const shell = require('shelljs')
const {version} = require(epPackage)
function setVersion(arr: Array<number>, i:number) {
  if (i > 0) {
    if (arr[i] > 98) {
      arr[i] = 0
      setVersion(arr, i - 1)
    } else {
      arr[i] += 1
    }
  }
  arr[i] += 1
}
export const alertVersion =async () => {
  const arr = version.split('.')
  setVersion(arr, 2)
  shell.cd(epRoot)
  shell.exec("npm version" + arr.join('.'))
  shell.cd(projRoot)
  return
}