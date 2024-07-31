import { getMenuItem } from "@/views/kfwd/views/rule/data/getMenuItem"
import { xtm } from "./var"
import gb from "./gb"
export default [
  getMenuItem(xtm, '版本更新')
  , getMenuItem(xtm, '初始化', 'init')
  , getMenuItem(xtm, '版本记录', 'jl')
  , getMenuItem(xtm, '版本修改', 'bg')
  , ...gb
]