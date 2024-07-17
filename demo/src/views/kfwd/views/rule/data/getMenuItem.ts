function dealMl(wjm: string, i = 0) {
  return wjm.split('_').map((it, j) => {
    if (j > i) {
      return it.slice(0, 1).toUpperCase() + it.slice(1)
    }
    return it
  }).join('')
}
export function getMenuItem(ml: string, mc: string, gn?: string, pid?: string) {
  var wzml = './module/' + ml, id = dealMl(ml)
  pid = pid || (gn ? id : '')
  if (gn) {
    id += dealMl(gn, -1)
    wzml += '/' + gn
  }
  return {
    id,
    src: wzml + '/index.vue',
    mc,
    path: true,
    pid
  }
}