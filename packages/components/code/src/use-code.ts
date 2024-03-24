import { useCssInit } from "@ui/hooks"
import { ref, SetupContext, computed } from "vue"
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
    , tip = ref<string>('复制'), showCopy = ref<boolean>(false)
    , len = ref(1)
    , code = computed(() => {
      const v = hljs.highlight(props.type, props.data).value, arr = v.split('\n'), lenv = ((arr.length + 1) + '').length / 2 + .5
      len.value = lenv
      return `<span class="z-fgx" style="left:${lenv + 1}em"></span>` + arr.map((it, i) => {
        return `<span class="z-xh"><i style="width: ${lenv}em;left:-${lenv + 1.6}em;">${i + 1}</i></span>` + it
      }).join('\n')
    })
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
  function getTop(i: number) {
    return 0
  }
  return {
    _ref
    , _class
    , code
    , len
    , copy
    , tip
    , showCopy
    , getTop
  }
}