import { getMenuItem } from "@/views/kfwd/views/rule/data/getMenuItem"
import { xtm } from "./var"
const ml = 'jtphis'
export default [
  getMenuItem(ml, 'jtphis', '', xtm)
  , getMenuItem(ml, '首版', 'sb')
  , getMenuItem(ml, 'sqldy', 'sqldy')
  , getMenuItem(ml, 'prody', 'prody')
  , getMenuItem(ml, '文件迁移', 'file')
]