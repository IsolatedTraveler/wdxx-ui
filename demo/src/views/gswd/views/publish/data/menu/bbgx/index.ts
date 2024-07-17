import { getMenuItem } from "@/views/kfwd/views/rule/data/getMenuItem"


const ml = 'bbgx'
export default [
  getMenuItem(ml, '版本更新')
  , getMenuItem(ml, '初始化', 'init')
  , getMenuItem(ml, '版本记录', 'jl')
  , getMenuItem(ml, '版本修改', 'bg')
  , getMenuItem(ml, '归版', 'gb')
]