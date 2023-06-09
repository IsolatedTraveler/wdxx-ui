import base from './base'
import element from './element'
export default [
  {
    path: '/base',
    redirect: '/base/rmzn',
    title: '基础说明',
    children: base
  }, {
    path: '/element',
    redirect: '/element/btn',
    title: '页面元素',
    children: element
  }
]