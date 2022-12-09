const g = {
  btn: true,
  'bth-group': true,
  sm: true,
  md: true,
  lg: true,
  primary: false,
  success: false,
  warning: false,
  danger: false,
  info: false,
  round: false,
  circle: false,
  ellipse: false
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