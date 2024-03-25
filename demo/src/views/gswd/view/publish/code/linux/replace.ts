export function linuxFileContentRepalce(file: string, reg: string, rep:string) {
  return `sed -i 's/${reg}/${rep}/g' ${file}`
}
interface Reg {
  reg:string
  rep:string
}
export function linuxFileContentRepalceArr(file:string, reg:Array<Reg>) {
  return reg.map(({reg,rep}) => {
    return linuxFileContentRepalce(file, reg, rep)
  }).join('\n')
}