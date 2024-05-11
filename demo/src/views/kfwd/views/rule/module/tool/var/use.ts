import { getAnnotaitionType, getMarkDownCode } from "@/components/base";
import { computed, ref, watch } from "vue";

export default function () {
  // 类型基础信息
  const formData = ref({ val: '', name: '', split: '|' })
  // 类型可选参数  根据类型基础信息val字段自动生成
  const annotationName = ref<string[]>([])
  // 类型可选参数注释值
  const annotationData = ref<any>({})
  const text = computed(() => {
    const { name } = formData.value, typeVal = annotationName.value, data = annotationData.value
    return [
      '**定义内容**',
      getMarkDownCode(`export type ${name} = ${typeVal.join(' | ')}`, 'typescript'),
      '**注释内容**',
      getMarkDownCode(getAnnotaitionType('', typeVal.map(it => ([it, data[it]]))), 'typescript')
    ].join('\n')
  })
  watch(() => ({ v: formData.value.val, s: formData.value.split }), ({ v, s }) => {
    annotationName.value = v.split(s || '|').map(it => it.trim())
  })
  return {
    formData,
    annotationData,
    annotationName,
    text
  }
}