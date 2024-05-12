import { fileImport, getXlsxData } from "@/api/util"
import { computed, ref } from "vue"
import { colsObj, deal } from "./deal"
import { CwglZddbLx } from "./use.arr"
interface CwglZddbData {
  drlx: CwglZddbLx
  dclx: CwglZddbLx
}
export const seUse = () => {
  const _ref = ref<HTMLButtonElement>()
  ,formData = ref<CwglZddbData>({drlx:'zfb',dclx:'ssj'})
  ,glData = ref<any>({})
  , excelData = ref<any[]>([])
  , data = computed(() => {
    const gl = glData.value, keys = Object.keys(gl).filter(key => gl[key]).map(key => ({key, reg: gl[key] === 'null' ? null : new RegExp(gl[key])}))
    return excelData.value.filter((it) => {
      for(let {key, reg} of keys) {
        if (!reg) {
          return !it[key]
        }else if (!reg.test(it[key])) {
          return false
        }
      }
      return true
    })
  })
  , cols = computed(() => {
    const {dclx, drlx} = formData.value
    , cols = dclx  ? colsObj[dclx] : []
    , colsId = cols.map((it:any) => it.id)
    , lyCols = (drlx ? colsObj[drlx] : []).filter((it:any) => !colsId.includes(it.id))
    return [{title:'序号', type: 'xh', id: 'xh'}, ...cols,...lyCols]
  })
  , excelExport = () => {}
  , excelImport = () => {
    fileImport().then(getXlsxData).then((res) => {
      const {drlx, dclx} = formData.value
      excelData.value=deal(res, drlx,dclx)
    })
  }
  return {
    _ref,
    formData,
    glData,
    excelImport,
    excelExport,
    data,
    cols
  }
}