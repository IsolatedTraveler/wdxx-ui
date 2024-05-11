export function lowercaseFirst(str: string, judge: boolean = false) {
  if (!str || judge) return str || ''
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
