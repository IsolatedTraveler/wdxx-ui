export function getMarkDownCode(code: string, lx: string = 'bash') {
  return '```' + lx + '\n' + code + '\n```'
}