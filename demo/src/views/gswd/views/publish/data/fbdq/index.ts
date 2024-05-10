import obj from './obj'
export const fbdq = Object.keys(obj).map((id) => {
  return Object.assign(obj[id], { id })
})