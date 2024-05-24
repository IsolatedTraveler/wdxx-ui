import { magicPost } from "@/api"
import { format } from "@/api/util"
import { computed, ref } from "vue"

export default function () {
  const formData = ref({
    bbh: `v1.0.${format(new Date(), 'yyyyMMdd')}.01`,
    ms: ''
  })
  // 版本信息数据
  const code = computed(() => {
    const { bbh } = formData.value
    return [
      'git checkout blank',
      `git checkout -b ${bbh}`,
      `robocopy "D:\\bat\\config\\v1.0.20231212.01" "E:\\publish\\${bbh}" /E`
    ].join('\n')
  })
  function init() {
    const obj = formData.value
    magicPost('242/BB01/m-bbxx', obj)
  }
  return { code, formData, init }
}