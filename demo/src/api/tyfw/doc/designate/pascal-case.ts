
export function pascalCase(name: string) {
  return name.charAt(0).toUpperCase() + name.slice(1).replace(/[-_]+([a-z])?/g, (_a, v) => v ? v.toUpperCase() : '')
}