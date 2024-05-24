import { read, utils, writeFile } from 'xlsx'
import { format } from './date'

export function getXlsxData(res: ArrayBuffer, fmt = 'yyyy-MM-dd hh:mm:ss'): string[][] {
  const excel = read(res, { type: "binary", cellDates: true })
    , data = excel.Sheets[excel.SheetNames[0]]
  Object.values(data).forEach(it => {
    if (it.t == 'd') {
      it.t = 's'
      it.v = format(new Date(it.v), fmt)
    }
  })
  return utils.sheet_to_json(data, { header: 1 })
}
export function expExcel(data: any[], title: string) {
  const workbook = utils.book_new()
  data.map(({ title, data }) => {
    console.log(title, data)
    utils.book_append_sheet(workbook, utils.aoa_to_sheet(data), title)
  })
  writeFile(workbook, title)
}