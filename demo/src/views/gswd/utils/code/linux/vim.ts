export function vim(content: string, file: string, sfzj: boolean = false) {
  return `echo  "${content.replace(/([$"])/g, '\\$1')}" ${sfzj ? '>>' : '>'} ${file}`
}
const rzFIle = '/etc/systemd/system/clear.log.sh'
export function clearRz(content: string) {
  return [
    vim(content, rzFIle, true),
    'chmod 644 ' + rzFIle
  ].join('\n')
}