export function down(url: string, name: string) {
  let a = document.createElement('a'), event = new MouseEvent('click')
  a.href = url
  a.download = name || 'down'
  a.dispatchEvent(event)
}