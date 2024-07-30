export function copyFile(file: string, file1: string) {
  return `cp ${file} ${file1}`
}
export function copyDirectory(directory: string, directory1:string) {
  return [
    'mkdir ' + directory1,
    `cp -r ${directory}/* ${directory1}`
  ].join('\n')
}