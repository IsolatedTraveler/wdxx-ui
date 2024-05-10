import { debounce, useCssInit, useFlexMixins } from "@ui/hooks"
import { computed, ref, SetupContext, watch } from "vue"
import { ArticleEmits, ArticleProps } from "./article"
export const useArticle = (props: ArticleProps, _emit: SetupContext<ArticleEmits>['emit']) => {
  const _ref = ref<HTMLDivElement>(), itemRefs = ref<any[]>([])
    , { _class, classVal, styleVal } = useCssInit(props, 'article', { cssClass: [], classAdd: [] })
    , val = ref(''), index = ref(0), judge = ref(true), data = computed(() => {
      const data = JSON.parse(JSON.stringify(props.data || []))
      val.value = data[0]?.id
      return data.map((it: any, i: number) => {
        it._i = i
        return it
      })
    }), setRef = (el: any, index: number) => {
      if (el) {
        // 把当前元素的ref存入数组中
        itemRefs.value[index] = el;
      }
    }, selected = (data: any) => {
      const i = data._i, refs = itemRefs.value, arr: Promise<void>[] = [], next = i + 2
      judge.value = false
      for (let j = 0; j < next; j++) {
        if (refs[j])
          arr.push(refs[j].show())
      }
      Promise.all(arr).then(() => {
        index.value = i
        refs[i].scroll()
      })
    },
    delayFun = debounce(() => {
      judge.value = false
    }, 500)
  watch(() => index.value, () => {
    delayFun()
  })
  useFlexMixins({ flex: 'row' }, classVal, styleVal, _ref)
  return {
    _ref,
    _class,
    val,
    index,
    data,
    selected,
    setRef,
    judge
  }
}