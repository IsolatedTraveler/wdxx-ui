import { defineComponent } from 'vue';
import {theadProps, TheadProps} from './prop'
import tdSlot, {tdthFixed} from '../td';
export default defineComponent({
  name: 'z-Thead',
  props: theadProps,
  setup(props: TheadProps, {}) {
    return () => {
      const cols = props.cols || []
      return <thead data-reload={props.reload}>
        {
          cols.map(tr => {
            return <tr>
              {
                tdthFixed()
              }
              {
                tr.map(({value: {show, id, class: _class, selfClass, posStyle, selfStyle, colspan, rowspan, type, style, label}}) => {
                  return <th v-show={show} id={id} class={[_class, selfClass]} style={[posStyle, selfStyle]}
                    colspan={colspan || 1} rowspan={rowspan || 1}
                    >
                    { tdSlot({key: props.rowKey || '', type, style, checked: props.checked, label, check: props.check}) }
                </th>
                })
              }
            </tr>
          })
        }
      </thead>
    }
  }
})