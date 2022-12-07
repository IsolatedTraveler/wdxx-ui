const g = {
  btn: true,
  primary: true,
  success: true,
  warning: true,
  danger: true,
  info: true
}
const t = {
  ghost: true,
  text: true
}
export default () => {
  const keys = Object.keys(g).filter(key => (t as any)[key])
  if (keys.length) {
    return `以下字段(${keys.join(',')})冲突，如确认已处理，请修改临时数据为false`
  }
}