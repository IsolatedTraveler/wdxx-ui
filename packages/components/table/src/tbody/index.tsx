import { defineComponent } from 'vue';
import tdSlot, {tdthFixed} from '../td';
import {tbodyProps, TbodyProps} from './prop'
export default defineComponent({
  name: 'z-tbody',
  props: tbodyProps,
  setup(props: TbodyProps, {}) {
    return () => {
      const data = props.data || [], key = props.rowKey || '', callback = props.callback, cols = props.cols, len = cols?.length,
      checkData = props.checkData
      return <tbody data-reload={props.reload}>
        {
          data.length ? data.map((it, i) => {
            const id = key ? it[key] : i, tr = callback?.(it, i)
            return <tr key={id} class={tr?.class} style={tr?.style}>
              {
                tdthFixed(true)
              }
              {
                cols?.map(({value: {id, show, class: _class, selfClass, posStyle, selfStyle, body, name = '', type, style}}) => {
                  const td = tr?.[name]
                  return <td v-show={show}
                  class={[_class, selfClass, td?.class]}
                  style={[posStyle, selfStyle, td?.style]}>
                    {
                      tdSlot({data: it, key, name, type, style, body, checkData, check: props.check})
                    }
                  </td>
                })
              }
            </tr>
          }) : <tr></tr>
        }
        <tr>
          <td colspan={len}></td>
        </tr>
      </tbody>
    }
  }
})