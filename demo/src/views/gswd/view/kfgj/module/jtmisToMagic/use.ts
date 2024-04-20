import { computed, ref } from "vue"
const ly = [
  { id: 1, mc: '/public/js/commonUtil.js' }
]
const zysx = [
  [],
  [
    'commonHttppost方法需要在末尾添加.data.list',
    'convertKeysToLowerCase去掉该方法，注意是否影响逻辑',
    'initTreedata方法第三个参数需删除'
  ]
]
const alertFa = [
  ['jtUtil.', 'commonUtil.',]
  , ['jtUtil.errorTrace', 'JsErrorTrace',]
  , ['.initShortcutKey', '.initShortcutKey']
  , ['.setShortcutKeys', '.setShortcutKeys']
  , ['.initBaseBar', '.initBaseBar']
  , ['.commonHttppost', '.commonQueryHttppost']
  , ['.commonHttppost', '.commonCommitHttppost']
  , ['.getCommonDic', '.getCommonDic']
  , ['.filterDicData', '.filterDicData']
  , ['.filterComboboxData', '.filterComboboxData']
  , ['.initDadaGrid_tab', '.initDadaGrid_tab']
  , ['.initTreedata', '.initTreedata']
  , ['.getCommonCombobox', '.getCommonCombobox']
  , ['.dataGridPageChange', '.dataGridPageChange']
  , ['.loadDataGrigPageData', '.loadDataGrigPageData']
  , ['jtUtil.dicget', 'jthisJsObject.jthis.dicget']
  , ['jtUtil.possessMkqx', 'jthisJsObject.jthis.mkqxhas']
]
const HtmlFa = [
  ['"bodydiv"', '"bodydiv"']
  , ['"topmenu"', '"topmenu"']
  , ['"topbutton"', '"topbutton"']
]
function dealHtml(code: string, ly: number) {
  code = code.replace(/\/public\/js\/commonUtil.js/g, '/lib23/js/jtUtil.js')
  code = code.replace(/\/public\/js\/jquery.zclip.min.js/g, '/lib23/js/jquery/jquery.zclip.min.js')
  code = code.replace(/\/lib\/jquery-easyui\//g, '/lib23/js/jquery-easyui/')
  code = code.replace(/\/public\/css\//g, '/public23/temp/')
  code = code.replace(/\/public\/js\//g, '/public23/js/')
  return dealJs(code, ly)
}
function dealJs(code: string, ly: number) {
  alertFa.forEach((it) => {
    const key = it[ly], v = it[0]
    if (key !== v) {
      const k = key.replace(/\./, '\\.'), reg = new RegExp(k, 'g')
      console.log(reg)
      code = code.replace(reg, v)
    }
  })
  code = code.replace(/JsErrorTrace/g, 'jtUtil.errorTrace')
  return code
}
export default function () {
  const formData = ref({
    ly: 1
  }), code = ref<Array<{ lx: string, code: any }>>([{
    lx: 'markdown',
    code: [
      '替换html中public/js/commonUtil.js为lib23/js/jtUtil.js相关的路径'
      , '替换html中public/js/jquery.zclip.min.js为lib23/js/jquery/jquery.zclip.min.js相关的路径'
      , '替换html中lib/jquery-easyui为lib23/js/jquery-easyui相关的路径'
      , '替换html中public/css为public23/css相关的路径'
      , '替换html中public/js为public23/js相关的路径'
      , HtmlFa.map(it => {
        const key = it[formData.value.ly], v = it[0]
        if (key !== v) {
          return `替换js中${key}为${v}`
        }
        return null
      }).filter(it => it).join('\n')
      , alertFa.map(it => {
        const key = it[formData.value.ly], v = it[0]
        if (key !== v) {
          return `替换js中${key}为${v}`
        }
        return null
      }).filter(it => it).join('\n')
    ].join('\n')
  }])
    , codeV = computed(() => {
      const { ly } = formData.value, v: Array<{ lx: string, code: any }> = JSON.parse(JSON.stringify(code.value))
      return [{
        lx: 'markdown',
        code: zysx[ly].join('\n'),
      }, ...v.map(it => {
        it.lx = it.lx.replace(/(text)\//, '')
        if (it.lx === 'javascript') {
          it.code = dealJs(it.code, ly).trim()
        } else if (it.lx === 'html') {
          it.code = dealHtml(it.code, ly).trim()
        }
        return it
      })]
    })
  return {
    formData,
    code,
    codeV,
    ly
  }
}