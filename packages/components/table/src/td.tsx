import { SetupContext } from "vue"
export default function tdSlot({body, data, checked, type, style}: any, {emit}: SetupContext) {
  function check() {
    emit('update:checked', checked ? false : data || !checked)
  }
  return body ? body({checked: !!checked, check, data}) : 
  type === 'check' ? (<div class={{'jt-active': checked, 'jt-check-item': true}} style={style}
    onClick={check}
  >
    <input type="checkbox" checked={checked}/>
  </div>) : ''
}
tdSlot.props = ['type', 'body', 'data', 'id', 'checked', 'selected', 'style']
tdSlot.emit = ['update:checked', 'update:selected']