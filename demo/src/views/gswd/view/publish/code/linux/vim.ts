export function vim(content: string, file: string, sfzj: boolean = false) {
  return `echo  "${content.replace(/([$"])/g, '\\$1')}" ${sfzj ? '>>' : '>'} ${file}`
}