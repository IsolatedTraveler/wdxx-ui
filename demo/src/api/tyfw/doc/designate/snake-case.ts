export function snakeCase(name: string, isConst: boolean = false) {
  const v = name.charAt(0) + name.replace(/([A-Z])|[_-]+/g, (_v, p1) => `-${p1 || ''}`)
  if (isConst)
    return v.toLowerCase()
  return v.toUpperCase()
}