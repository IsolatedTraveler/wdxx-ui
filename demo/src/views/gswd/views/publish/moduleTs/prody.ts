import { ref } from "vue"
import { dealSqlData, getPrody, getTableCol } from "../fun"

export function usePrody() {
  const formData = ref({ fwq: '242', bb: '', where: `mkbh='080901' and ywdm = 1` }), code = ref(['']), talbe = 'prody', primary = ['MKBH', 'YWDM']
  function getCode() {
    var obj = formData.value, arr = obj.bb.split('.'), bb = '', tj = obj.where
    if (tj) {
      if (arr[2]) {
        bb = talbe + '_' + arr[2].substring(2) + arr[3]
      }
      Promise.all([
        getTableCol(talbe, obj.fwq),
        getPrody(tj, obj.fwq)
      ]).then(([col, { data, ccgc }]) => {
        col = col.filter(({ col }) => col != 'URL' && col != 'ROW_ID')
        data.forEach((it: any) => {
          it.SQL = (it.SQL || '').trim()
        })
        const { i, b, d } = dealSqlData(data, col, talbe, tj, primary, bb)
        code.value = [
          ['-- 新增存储过程调用方案', b, d, i, 'commit;'].filter(it => it).join('\n'),
          ccgc
        ]
      })
    } else {
      code.value = ['条件不能为空']
    }
  }
  return { code, formData, getCode }
}