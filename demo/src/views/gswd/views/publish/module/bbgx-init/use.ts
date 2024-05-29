import { magicPost } from "@/api"
import { format } from "@/api/util"
import { computed, ref } from "vue"

export default function () {
  const formData = ref({
    bbh: `v1.0.${format(new Date(), 'yyyyMMdd')}.01`,
    ms: '',
    fbdq: []
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
    magicPost('/242/magic/BB01/m-bbxx', obj).then((e) => {
      console.log(/违反唯一约束条件.*HEALTHCLOUD.T_BBXX_BBH/.test(e.message))
      if (e.code === 1 || /违反唯一约束条件.*HEALTHCLOUD.T_BBXX_BBH/.test(e.message)) {

      } else {
        throw e.message
      }
    }).catch((e) => {
      console.log(e.message)
      alert(e.message)
    })
  }
  return { code, formData, init }
}