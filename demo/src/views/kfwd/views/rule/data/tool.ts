import { getMenuItem } from "./getMenuItem";
const ml = 'tool'
export default [
  getMenuItem(ml, '辅助开发工具')
  , getMenuItem(ml, '类型定义', 'type')
  , getMenuItem(ml, '接口定义', 'interface')
  , getMenuItem(ml, '变量定义', 'var')
  , getMenuItem(ml, '常量定义', 'const')
  , getMenuItem(ml, '函数定义', 'function')
]