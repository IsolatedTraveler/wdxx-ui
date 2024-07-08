import { expExcel, fileImport, getXlsxData } from "@/api/util"
import { computed, ref } from "vue"
import { colsObj, deal } from "./deal"
import { CwglZddbLx } from "./use.arr"
import { sheets } from "./deal/mb_data"
interface CwglZddbData {
  drlx: CwglZddbLx
  dclx: CwglZddbLx
  ly: string
}
export const seUse = () => {
  const _ref = ref<HTMLButtonElement>()
    , _table = ref<any>()
    , formData = ref<CwglZddbData>({ drlx: 'zfb', dclx: 'ssj', ly: '' })
    , glData = ref<any>()
    , excelData = ref<any[]>([])
    , data = computed(() => {
      const gl = glData.value, keys = Object.keys(gl || {}), keysTj: any[] = []
      for (let key of keys) {
        const it = gl[key]
        if (!it) continue
        if (typeof it === 'string') {
          keysTj.push({ key, reg: it === 'null' ? null : new RegExp(it) })
        } else if (it.length) {
          keysTj.push({ key, reg: new RegExp(it.join('|')) })
        }
      }
      return excelData.value.filter((it) => {
        for (let { key, reg } of keysTj) {
          if (!reg) {
            return !it[key]
          } else if (!reg.test(it[key])) {
            return false
          }
        }
        return true
      })
    })
    , cols = computed(() => {
      const { dclx, drlx } = formData.value
        , cols = dclx ? colsObj[dclx] : []
        , colsId = cols.map((it: any) => it.id)
        , lyCols = (drlx ? colsObj[drlx] : []).filter((it: any) => !colsId.includes(it.id))
      return [{ title: '序号', type: 'xh', id: 'xh' }, ...cols, ...lyCols]
    })
    , excelExport = () => {
      const { dclx } = formData.value
        , excelData = data.value
        , cols = dclx ? colsObj[dclx] : []
        , title = cols.map(it => it.title)
        , sheet = sheets[dclx].map(mc => {
          return {
            title: mc,
            data: [title]
          }
        })
      excelData.forEach((it) => {
        sheet.map(({ title, data }) => {
          if (it.jylx === title) {
            data.push(cols.map(({ id }) => it[id]))
          }
        })
      })
      expExcel(sheet, '导出表格.xls')
    }
    , excelImport = () => {
      fileImport().then(getXlsxData).then((res) => {
        const { drlx, dclx, ly } = formData.value
        excelData.value = deal(res, drlx, dclx, ly)
      })
    }
  return {
    _ref,
    formData,
    glData,
    excelImport,
    excelExport,
    data,
    cols,
    _table
  }
}