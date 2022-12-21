import { ObjAny } from "@ui/vars"
import { setCss } from "@ui/hooks"
interface checkProps {
  key: string
  style:ObjAny
  checked?: boolean
  check?: (judge: any, id:string) => void
  data?:any
}
interface TdSlotProps extends checkProps {
  type: 'check' | 'radio' | ''
  selected?: boolean
  select?: (judge: any, obj: any) => void
  checkData?: ObjAny
  body?: Function
  name?: string
  label?: string | number
}
function getCheckHtml({key, style, checked, data, check}: checkProps) {
  if (key && check) {
    function checkV() {
      check?.(checked ? false : (data || true), data ? data[key] : '')
    }
    return <div class={{[setCss('active')]: checked, [setCss('check-item')]: true}} style={style}
      onClick={checkV}
    >
      <input type="checkbox" checked={checked as any}/>
    </div>
  }
}
function getRadioHtml({selected, select, data, key, style, label}: any) {
  if (key && data) {
    function checkV() {
      return selected ? select?.(null, null) : select?.(data[key], data)
    }
    return <div class={{[setCss('active')]: selected, [setCss('radio-item')]: true}} style={style}
      onClick={checkV}
    >
      <input type="radio" checked={selected as any}/>
    </div>
  } else if (label) {
    return <span style={style}>{label}</span>
  }
}
export default function tdSlot({data, key, name='', label, type, style, body, checked, checkData, check, selected, select}: TdSlotProps) {
  if (body) {
    return body()
  } else if (type == 'check') {
    checked = data ? (!!checkData?.[data[key]]) : (!!checked)
    return getCheckHtml({key, style, checked, data, check})
  } else if (type == 'radio') {
    return getRadioHtml({selected, select, data, key, style, label})
  }
  return <span style={style}>{data ? data[name] : label}</span>
}
export function tdthFixed(judge?: boolean) {
  return judge ? <td class="z-pos-sticky z-pos-sticky-left" style="left: 0"></td> :<th class="z-pos-sticky z-pos-sticky-left" style="left: 0"></th>
}