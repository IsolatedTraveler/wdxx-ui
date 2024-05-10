import { ref } from "vue";
import { sqlFun } from "../../../publish/code";
import { TCol } from "../../../publish/fun";
interface UseSjksjclFormData {
  bm?: string
  lx: keyof typeof sqlFun
}
export function useSjksjcl() {
  const formData = ref<UseSjksjclFormData>({ bm: 'z_xtyh', lx: 'oracle' })
    , _table = ref(), tableData = ref<TCol[]>([]), code = ref([{ lx: 'sql', code: '' }])
  function getTabCol() {
    _table.value.getData(formData.value.bm || '')
  }
  function ExeFun(type: string) {
    const obj = formData.value, lx = obj.lx, fun = sqlFun[lx] || sqlFun.def
      , exe = fun[type as keyof typeof fun]
      , bm = (obj.bm || '').replace(/^z_/i, '')
    code.value = [exe(tableData.value, bm)]
  }
  return { formData, getTabCol, _table, tableData, code, ExeFun }
}