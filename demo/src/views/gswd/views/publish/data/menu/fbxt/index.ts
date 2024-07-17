import his from "./his";
import jtphis from "./jtphis";
import { xtm } from "./var";
import ydgw from "./ydgw";
import { getMenuItem } from "@/views/kfwd/views/rule/data/getMenuItem"

export default [
  getMenuItem(xtm, '发布系统')
  , getMenuItem(xtm, '搬迁', 'jbxtbq')
  , ...jtphis
  , ...his
  , ...ydgw
  , getMenuItem(xtm, '公众号', 'gzh')
]