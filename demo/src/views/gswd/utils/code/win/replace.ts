export function fileContentRepalce(file: string, reg: string, rep:string) {
  return `powershell -Command "((Get-Content '${file}') -replace '${reg}', '${rep}') | Set-Content '${file}'"`
}