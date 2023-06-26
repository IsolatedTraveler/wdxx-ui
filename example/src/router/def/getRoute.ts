function getRouterName(name: string, add: string) {
  if (add) {
    return add + name.slice(0, 1).toUpperCase() + name.slice(1)
  }
  return name
}
export function getRoute(ml: string, path: string, title: string) {
  return {
    path,
    component: () => import(`../../views/${ml}/${path}/index.vue`),
    title,
    name: getRouterName(path, ml)
  }
}