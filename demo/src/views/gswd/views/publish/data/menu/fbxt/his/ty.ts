import {getMenuItem} from '@/views/kfwd/views/rule/data/getMenuItem';
import {xtm} from './var';
const ml = 'ty';
export default [
  getMenuItem(ml, '通用', '', xtm),
  getMenuItem(ml, '第三方插件', 'third'),
  getMenuItem(ml, '登录校验', 'login'),
  getMenuItem(ml, '系统参数', 'xtcs'),
  getMenuItem(ml, '字典', 'zd'),
  getMenuItem(ml, '电子发票', 'dzfp')
];
