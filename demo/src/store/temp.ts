export function temp(name: string, val: any = undefined) {
  if (val === undefined) {
    return JSON.parse(sessionStorage.getItem(name) || 'null')
  } else if (val === null) {
    sessionStorage.removeItem(name)
  } else {
    sessionStorage.setItem(name, JSON.stringify(val || ''))
  }
}