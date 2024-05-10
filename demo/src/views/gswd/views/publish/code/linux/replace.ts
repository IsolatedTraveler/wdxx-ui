function dealStr(str: string) {
  return (str || "").replace(/\//g, '\\/')
}
export function fileContentRepalce(file: string, reg: string, rep: string) {
  return `sed -i 's/${dealStr(reg)}/${dealStr(rep)}/g' ${file}`
}
interface Reg {
  reg: string
  rep: string
}
export function fileContentRepalceArr(file: string, reg: Array<Reg>) {
  return reg.map(({ reg, rep }) => {
    return fileContentRepalce(file, reg, rep)
  }).join('\n')
}