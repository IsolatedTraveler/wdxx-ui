import { magicPost } from "@/api"
import { ref } from "vue"
import { bbFbCols, bbZt } from '../bb.data'
import { PublishProps } from "./publish"
import { fbdqObj } from "../../../data"
export default function (props: PublishProps) {
  // 版本信息数据
  const data = ref([])
  // 查询条件
  // 检索版本记录
  function search() {
    magicPost('/242/magic/BB01/s-bbfbjl', { id: props.id }).then(({ data: { list } }) => {
      data.value = (list || []).map((it: any) => {
        it.zt_mc = bbZt[it.zt || 0]
        it.bbh = props.bbh
        it.fbdq_mc = fbdqObj[it.fbdq]?.mc
        return it
      })
    })
  }
  search()
  function publish(data: any) {
    magicPost('/242/magic//BB01/m-bbfbdq', { id: data.id, fbdq: data.fbdq, zt: 9 }).then((res) => {

    })
  }
  function del(data: any) {
    magicPost('/242/magic//BB01/m-bbfbdq', { id: data.id, fbdq: data.fbdq, zt: -1 }).then((res) => {

    })
  }
  return {
    data
    , search
    , cols: [...bbFbCols, { title: '操作', type: 'temp', id: '_cz' }]
    , publish
    , del
  }
}