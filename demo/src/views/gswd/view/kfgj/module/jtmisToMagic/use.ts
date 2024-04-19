import { computed, ref } from "vue"
const ly = [
  { id: 1, mc: '/public/js/commonUtil.js' }
]
const alertFa = [
  ['jtUtil.', 'commonUtil.',],
  ['jtUtil.errorTrace', 'JsErrorTrace',]
  , ['.initShortcutKey', '.initShortcutKey']
  , ['.setShortcutKeys', '.setShortcutKeys']
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
      return v.map(it => {
        it.lx = it.lx.replace(/(text)\//, '')
        if (it.lx === 'javascript') {
          it.code = dealJs(it.code, ly)
        } else if (it.lx === 'html') {
          it.code = dealHtml(it.code, ly)
        }
        return it
      })
    })
  return {
    formData,
    code,
    codeV,
    ly
  }
}