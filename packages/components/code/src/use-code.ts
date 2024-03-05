import { useCssInit } from "@ui/hooks"
import { watch, ref, SetupContext } from "vue"
import { CodeEmits, CodeProps } from "./code"
import hljs from "highlight.js";
var input: HTMLTextAreaElement
function copyIng(v: string): Promise<void> {
  if (navigator.clipboard) {
    return navigator.clipboard.writeText(v)
  } else {
    if (!input) {
      input = document.createElement('textarea');
      input.style.position = 'absolute';
      input.style.opacity = '0';
      document.body.appendChild(input)
    }
    input.value = v
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          input.select();
          document.execCommand('copy');
          resolve()
        } catch (e) {
          reject(e)
        }
      }, 0);
    })
  }
}
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
    copyIng(props.data + '\n').then(() => {
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