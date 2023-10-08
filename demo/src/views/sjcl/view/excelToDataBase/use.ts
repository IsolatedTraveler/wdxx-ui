import { SetupContext, ref } from "vue"
import { SeEmits, SeProps } from "./prop"
const xlsx = require("xlsx")
const fileElem: HTMLInputElement = document.createElement('input')
fileElem.type = 'file'
export const seUse = (props: SeProps, emit: SetupContext<SeEmits>['emit']) => {
  const _ref = ref<HTMLButtonElement>(), excelImport = function () {
    fileElem.click()
  }, excelData = ref([])
  fileElem.onchange = function ({ target }) {
    const files = (target as HTMLInputElement).files
    if (files && files.length) {
      const reader = new FileReader()
      reader.readAsBinaryString(files[0])
      reader.onload = getFlieData
    }
  }
  function getFlieData({ target: { result } }) {
    const excel = xlsx.read(result, { type: "binary", cellDates: true })
    excelData.value = xlsx.utils.sheet_to_json(excel.Sheets[excel.SheetNames[0]])
  }
  console.log(props, emit)
  return {
    _ref,
    excelImport,
    excelData
  }
}