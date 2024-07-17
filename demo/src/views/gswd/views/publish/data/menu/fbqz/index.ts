import { getMenuItem } from "@/views/kfwd/views/rule/data/getMenuItem"
import fzzx from "./fzzx"
import sfyl from "./sfyl"
import { xtm } from "./var"


export default [
  getMenuItem(xtm, '发版前置')
  , getMenuItem(xtm, '硬件需求', 'yjxq')
  , ...sfyl
  , ...fzzx
  , getMenuItem(xtm, '迁移流程', 'qylc')
]