export function oracle(table: string, where: string) {
  return `delete from ${table} where ${where};`
}