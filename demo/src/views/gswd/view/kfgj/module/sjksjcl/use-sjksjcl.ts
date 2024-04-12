import { ref } from "vue";
import { TCol, getTableCol } from "../../../publish/fun";
interface UseSjksjclFormData {
  bm?: string
}
interface Col extends TCol {
  bz?: string
}
export function useSjksjcl() {
  const formData = ref<UseSjksjclFormData>({ bm: 'xtyh' }), tablCol = ref<Array<Col>>()
  function getTabCol() {
    const bm = formData.value.bm
    if (bm) {
      getTableCol(bm).then(res => {
        tablCol.value = res
      })
    }
    getTableCol(formData.value.bm || '').then()
  }
  return { formData, getTabCol, tablCol }
}