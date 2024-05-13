import { read, utils, writeFile } from 'xlsx'
interface DateFormats {
  [key: string]: any
  'M+': number
  'd+': number
  'h+': number
  'm+': number
  's+': number
  'q+': number
  S: number
}
function format(date: Date, fmt = 'yyyy/MM/dd hh:mm:ss'): string {
  var o: DateFormats = {
    "M+": date.getMonth() + 1, //月份
    "d+": date.getDate(), //日
    "h+": date.getHours(), //小时
    "m+": date.getMinutes(), //分
    "s+": date.getSeconds(), //秒
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
    "S": date.getMilliseconds() //毫秒
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}
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