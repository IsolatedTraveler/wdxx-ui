import { getMenuItem } from "@/views/kfwd/views/rule/data/getMenuItem"
import { xtm } from "./var"
const ml = 'gb'
export default [
  getMenuItem(ml, '归版', '', xtm)
  , getMenuItem(ml, 'sqldy发布', 'sqldy')
  , getMenuItem(ml, 'prody发布', 'prody')
  , getMenuItem(ml, 'table修改', 'table')
  , getMenuItem(ml, '前端代码', 'html')
  , getMenuItem(ml, '合并备份', 'end')
]