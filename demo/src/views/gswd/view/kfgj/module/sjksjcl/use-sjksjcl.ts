import { ref } from "vue";
interface UseSjksjclFormData {
  bm?: string
}
export function useSjksjcl() {
  const formData = ref<UseSjksjclFormData>({ bm: 'z_xtyh' })
    , _table = ref()
  function getTabCol() {
    _table.value.getData(formData.value.bm || '')
  }
  return { formData, getTabCol, _table }
}