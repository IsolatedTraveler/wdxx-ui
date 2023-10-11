import base from './base'
import element from './element'
import component from './component'
export default [
  {
    path: '/base',
    name: 'base',
    redirect: '/base/rmzn',
    title: '基础说明',
    children: base
  }, {
    path: '/element',
    name: 'element',
    redirect: '/element/table',
    title: '页面元素',
    children: element
  }, {
    path: '/component',
    name: 'component',
    redirect: '/component/callKit',
    title: '组件元素',
    children: component
  }
]