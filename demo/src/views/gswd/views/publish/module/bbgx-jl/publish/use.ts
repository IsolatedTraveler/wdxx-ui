import { magicPost } from "@/api"
import { computed, ref } from "vue"
import { bbFbCols, bbZt } from '../bb.data'
import { PublishProps } from "./publish"
import { fbdqObj } from "../../../data"
import { getMarkDownCode, getMarkDownTitle } from "@/components/base"
import { useCommit } from "@/views/kfwd/views/git/module/commit/use"
export default function (props: PublishProps) {
  // 版本信息数据
  const { formData, code } = useCommit(), data = ref<any>([]),
    content = computed(() => {
      const { bbh } = props, judge = data.value.filter((it: any) => it.zt != -1 && it.zt != 9).length
        , { fbdq } = formData.value, fwObj = fbdqObj[fbdq]
      return [
        judge ? [
          getMarkDownTitle('前端代码', 1),
          '前端修改代码标准化提交，方便后续版本信息维护。',
          getMarkDownTitle('节点提交', 2),
          getMarkDownCode('git checkout ' + bbh, 'bash'),
          getMarkDownCode([
            code.value[2].code,
            'git push origin ' + bbh
          ].join('\n'), 'bash'),
          getMarkDownTitle('归版（发版时合并至主程序）', 2),
          getMarkDownCode([
            'git checkout ' + fwObj.qh,
            'git merge ' + bbh
          ].join('\n'), 'bash')
        ].join('\n') : [
          getMarkDownTitle('终版（完全发版时合并至主程序）', 2),
          getMarkDownCode([
            'git checkout ' + fwObj.qh,
            'git merge ' + bbh,
            'git branch -d ' + bbh,
            'git push origin -d ' + bbh
          ].join('\n'), 'bash')
        ].join('\n'),
        getMarkDownTitle('备注', 2),
        '发布前先备份历史数据'
      ].join('\n')
    })
  // 查询条件
  // 检索版本记录
  function search() {
    magicPost('/242/magic/BB01/s-bbfbjl', { id: props.id }).then(({ data: { list } }) => {
      list = list || []
      formData.value.fbdq = list[0]?.fbdq
      data.value = list.map((it: any) => {
        const fwObj = fbdqObj[it.fbdq]
        it.zt_mc = bbZt[it.zt || 0]
        it.bbh = props.bbh
        it.fbdq_mc = fwObj?.mc
        it.server_ip = fwObj?.server_ip
        it.database_ip = fwObj?.database_ip
        it.database_url_ip = fwObj?.database_url_ip
        it.url_ip = fwObj?.url_ip
        return it
      })
    })
  }
  search()
  function publish(data: any) {
    magicPost('/242/magic//BB01/m-bbfbdq', { id: data.id, fbdq: data.fbdq, zt: 9 }).then(() => {
      search()
    })
  }
  function del(data: any) {
    magicPost('/242/magic//BB01/m-bbfbdq', { id: data.id, fbdq: data.fbdq, zt: -1 }).then(() => {
      search()
    })
  }
  formData.value.gn = props.ms || ''
  return {
    data
    , search
    , cols: [...bbFbCols, { title: '操作', type: 'temp', id: '_cz' }]
    , publish
    , del
    , content
    , formData
  }
}