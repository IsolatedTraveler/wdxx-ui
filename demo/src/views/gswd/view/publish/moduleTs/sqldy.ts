import { ref } from "vue"
import { dealSqlData, getCodes, getTableCol } from "../fun"

export function useSqldy(talbe: string = 'sqldy', primary: string[] = ['MKBH', 'YWDM']) {
  const formData = ref({
    bb: 'v1.0.20240329.01',
    where: `(mkbh='000212' and ywdm ='7') or (mkbh='080113' and ywdm ='9') or (mkbh='000226' and ywdm in (1,'11')) or (mkbh='080114' and ywdm = 3)`,
    fwq: '242'
  })
    , code = ref('')
  function getCode() {
    var obj = formData.value, arr = obj.bb.split('.'), bb = '', tj = obj.where, backTable = ''
    if (tj) {
      if (arr[2]) {
        bb = arr[2].substring(2) + arr[3]
        backTable = talbe + '_' + bb
      }
      Promise.all([
        getTableCol(talbe, obj.fwq),
        getCodes(tj, talbe, obj.fwq)
      ]).then(([col, data]) => {
        col = col.filter(({ col }) => col != 'URL' && col != 'ROW_ID')
        data.forEach(it => {
          it.SQL = (it.SQL || '').trim()
        })
        const { i, b, d } = dealSqlData(data, col, talbe, tj, primary, backTable)
        code.value = [b, d, i, 'commit;'].filter(it => it).join('\n')
      })
    } else {
      code.value = '条件不能为空'
    }
  }
  return { code, formData, getCode }
}