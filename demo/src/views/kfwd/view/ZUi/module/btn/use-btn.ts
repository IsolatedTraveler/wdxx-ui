import {loadSlwd, LoadSlwdData} from '../../fun'

const data:LoadSlwdData[] = [
  {
    name: 'basic',
    prop: {
      title: '基础用法',
      sm: '使用shape、state和radius来定义按钮样式'
    }
  }
] 
export function useBtn() {
  return loadSlwd(import.meta.glob('./[!.index]*.vue'), data, 'btn')
}