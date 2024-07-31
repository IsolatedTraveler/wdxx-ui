import { magicPost } from "@/api"
import { defineAsyncComponent, ref, shallowRef } from "vue"
import { bbCols, bbZt } from './bb.data'
export default function () {
  // 版本信息数据
  const data = ref([])
    , coms = import.meta.glob('./*/index.vue')
    // 查询条件
    , formData = ref({})
    , com = shallowRef<any>(null)
    , bbxx = ref()
  // 检索版本记录
  function search() {
    magicPost('/242/magic/BB01/s-bbjl', {}).then(({ data: { list } }) => {
      data.value = (list || []).map((it: any) => {
        it.zt_mc = bbZt[it.zt || 0]
        return it
      })
    })
  }
  search()
  function dtcz(lx: string, data: any) {
    const v: any = coms[`./${lx}/index.vue`]
    if (v) {
      com.value = defineAsyncComponent(() => v().then((c: any) => c.default))
    } else {
      com.value = null
    }
    bbxx.value = data
  }
  return {
    data
    , formData
    , search
    , cols: [...bbCols, { title: '操作', type: 'temp', id: '_cz' }]
    , dtcz
    , com
    , bbxx
  }
}