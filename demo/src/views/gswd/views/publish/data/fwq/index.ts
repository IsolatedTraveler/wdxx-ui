import obj from './obj'
export const fwq = Object.keys(obj).map((id) => {
  return Object.assign(obj[id], { id })
})