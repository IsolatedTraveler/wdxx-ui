export function bashRewriteFile(file: string, reg: string, replace: string) {
  return `powershell -Command "((Get-Content '${file}') -replace '${reg}', '${replace}') | Set-Content '${file}'"`
}