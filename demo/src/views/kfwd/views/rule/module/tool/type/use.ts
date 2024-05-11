import { pascalCase } from "@/api/tyfw/doc/designate";
import { getAnnotaitionType, getMarkDownCode } from "@/components/base";
import { ref } from "vue";

export default function () {
  // 类型基础信息
  const formData = ref({ val: '', name: '', split: '|', desc: '' })
  // 类型可选参数  根据类型基础信息val字段自动生成
  const annotationName = ref<string[]>([])
  // 类型可选参数注释值
  const annotationData = ref<any>({})
  const text = ref('')
  function getText() {
    const { name, desc } = formData.value, typeVal = annotationName.value, data = annotationData.value
    text.value = [
      '**定义内容**',
      getMarkDownCode(`export type ${pascalCase(name)} = ${typeVal.join(' | ')}`, 'typescript'),
      '**注释内容**',
      getMarkDownCode(getAnnotaitionType(desc, typeVal.map(it => ([it, data[it]]))), 'typescript')
    ].join('\n')
  }
  function getAnnotationName() {
    const { val, split } = formData.value
    annotationName.value = val.split(split || '|').map(it => it.trim())
  }
  return {
    formData,
    annotationData,
    annotationName,
    text,
    getAnnotationName,
    getText
  }
}