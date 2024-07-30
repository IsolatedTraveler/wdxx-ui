export const xtcsJb = [
  { id: '0', mc: '系统参数' }
  , { id: '1', mc: '区县参数' }
  , { id: '2', mc: '机构参数' }
  , { id: '3', mc: '科室参数' }
  , { id: '4', mc: '操作员参数' }
  , { id: '5', mc: '本机参数' }
], xtcsSjlx = [
  { id: '11', mc: '数值' }
  , { id: '21', mc: '单选', zyfw: ' 以|分割', qsz: '满足值域范围的值' } // 以|分割
  , { id: '22', mc: '多选', zyfw: ' 以|分割', qsz: '满足值域范围的值' } // 以|分割
  , { id: '51', mc: '单选值域来源于数据库', zyfw: '配置sqldy表的mkbh为000000下的ywdm', qsz: '指定sql筛选值' }
  , { id: '52', mc: '多选值域来源于数据库', zyfw: '配置sqldy表的mkbh为000000下的ywdm', qsz: '指定sql筛选值' }
  , { id: '61', mc: '自由录入' }
  , { id: '63', mc: '正则表单式限制', zyfw: '配置正则表达式', qsz: '符合正则表达式校验规则的值' }
  , { id: '71', mc: '打印机' }
  , { id: '72', mc: '报表样式', zyfw: '配置表p_bb中字段dm的值', qsz: '配置表p_bbys中字段dm且符合值域范围筛选的值（p_bbys.bbid=p_bb.id）' } // 值域取p_bb.dm
]