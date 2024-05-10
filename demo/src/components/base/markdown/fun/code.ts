export function getMarkDownCode(code: string, lx: string) {
  return '```' + lx + '\n' + code + '\n```'
}