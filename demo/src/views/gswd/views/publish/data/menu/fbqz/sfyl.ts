import { getMenuItem } from "@/views/kfwd/views/rule/data/getMenuItem"
import { xtm } from "./var"
const ml = 'sfyl'
export default [
  getMenuItem(ml, '三方依赖', '', xtm)
  , getMenuItem(ml, 'java', 'java')
  , getMenuItem(ml, 'tomcat', 'tomcat')
  , getMenuItem(ml, 'nginx', 'nginx')
  , getMenuItem(ml, 'linux', 'linux')
]