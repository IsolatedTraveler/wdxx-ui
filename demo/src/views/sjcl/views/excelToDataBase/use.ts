import { Ref, SetupContext, ref } from "vue"
import { SeEmits, SeProps } from "./prop"
const xlsx = require("xlsx")
const fileElem: HTMLInputElement = document.createElement('input')
fileElem.type = 'file'
export const seUse = (_props: SeProps, _emit: SetupContext<SeEmits>['emit']) => {
  const _ref = ref<HTMLButtonElement>(), excelImport = function () {
    fileElem.click()
  }, excelData: Ref<Array<any>> = ref([]), excelKeys = ref([])
  fileElem.onchange = function ({ target }) {
    const files = (target as HTMLInputElement).files
    if (files && files.length) {
      const reader = new FileReader()
      reader.readAsBinaryString(files[0])
      reader.onload = getFlieData
    }
  }
  function getFlieData({ target: { result } }) {
    const excel = xlsx.read(result, { type: "binary", cellDates: true }),
      data = xlsx.utils.sheet_to_json(excel.Sheets[excel.SheetNames[0]])
    data.splice(100)
    excelData.value = data
    excelKeys.value = Object.keys(data[0]).map(id => ({ id, title: id }))
  }
  return {
    _ref,
    excelImport,
    excelData,
    excelKeys
  }
}