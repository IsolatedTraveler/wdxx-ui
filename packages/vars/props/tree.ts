export interface TreeAlias {
  child?: Array<Object> // 子孙数据
  mc?: string | Array<string> // 显示内容
  id?: string // 主键
  pId?: string // 父级主键
}