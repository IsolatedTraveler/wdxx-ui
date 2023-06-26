const g = {
  btn: true,
  'bth-group': true,
  round: true,
  circle: true,
  ellipse: true,
  sm: true,
  md: true,
  lg: true,
  row: true
}
const t = {
  ghost: ['btn'],
  text: ['btn'],
  primary: ['btn'],
  success: ['btn'],
  warning: ['btn'],
  danger: ['btn'],
  info: ['btn'],
  stripe: ['table']
}
export default () => {
  const keys = Object.keys(g).filter(key => (t as any)[key])
  if (keys.length) {
    return `以下字段(${keys.join(',')})冲突，如确认已处理，请修改临时数据为false`
  }
}