import { useCssInit } from "@ui/hooks"
import { watch, ref, SetupContext } from "vue"
import { CodeEmits, CodeProps } from "./code"
import hljs from "highlight.js";
export const useCode = (props: CodeProps, _emit: SetupContext<CodeEmits>['emit']) => {
  const _ref = ref<HTMLButtonElement>(), { _class } = useCssInit(props, 'code')
    , _code = ref<HTMLElement>(), size = ref<number>(1), len = ref<number>(.5)
    , tip = ref<string>('复制'), showCopy = ref<boolean>(false)
  watch(() => _code.value, (el: any) => {
    if (el) {
      hljs.highlightBlock(el)
      size.value = (props.data || '').split('\n').length
    } else {
      size.value = 1
    }
    len.value = ((size.value + 1) + '').length / 2
  }, { immediate: true })
  function copy() {
    navigator.clipboard.writeText(props.data + '\n').then(() => {
      tip.value = '复制成功'
      setTimeout(() => {
        tip.value = '复制'
      }, 3000);
    }).catch((e) => {
      tip.value = '复制失败：' + e.message
    })
  }
  return {
    _ref,
    _class,
    _code,
    size
    , len
    , copy
    , tip
    , showCopy
  }
}