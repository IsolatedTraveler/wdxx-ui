import { computed, ref } from "vue"
import { dealFile } from "./deal"

export default function () {
  const formData = ref({
    root: 'E:/jtGit/web/his-flie/sc',
    html: '',
    js: ''
  }), code = computed(() => {
    return [
      {
        lx: 'markdown',
        code: [
          '替换html中lib/jquery-easyui为lib23/js/jquery-easyui相关的路径'
          , '替换html中public/css为public23/css相关的路径'
        ].join('\n')
      }
    ]
  })
  function deal() {
    var { root, html, js } = formData.value
    dealFile(root, html, js).then(res => {
      console.log(res)
    }).catch(e => {
      console.log(e)
    })
  }
  return {
    formData,
    code,
    deal
  }
}