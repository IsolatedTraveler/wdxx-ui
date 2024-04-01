import {loadSlwd, LoadSlwdData} from '../../fun'

const data:LoadSlwdData[] = [
  {
    name: 'basic',
    prop: {
      title: '基础用法',
      sm: '使用shape、state和radius来定义按钮样式'
    }
  }, {
    name: 'disabled',
    prop: {
      title: '禁用状态',
      sm: '你可以使用 disabled 属性来定义按钮是否被禁用。<br/>使用 disabled 属性来控制按钮是否为禁用状态。 该属性接受一个 Boolean 类型的值。'
    }
  }, {
    name: 'size',
    prop: {
      title: '调整尺寸',
      sm: '除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。<br/>使用 size 属性额外配置尺寸，可使用 lg和sm两种值。'
    }
  }, {
    name: 'full',
    prop: {
      title: '满屏按钮',
      sm: '你可以使用 full 属性来定义按钮是否100%占满父元素宽度。<br/>使用 full 属性来控制按钮是否100%占满父元素宽度。 该属性接受一个 Boolean 类型的值。'
    }
  }
] 
export function useBtn() {
  return loadSlwd(import.meta.glob("./*.vue"), data, 'btn')
}