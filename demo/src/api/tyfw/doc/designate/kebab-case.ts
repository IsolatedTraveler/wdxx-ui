export function kebabCase(name: string) {
  return name.charAt(0).toLowerCase() + name.replace(/([A-Z])|[_-]+/g, (_v, p1) => `-${p1 || ''}`).toLowerCase()
}