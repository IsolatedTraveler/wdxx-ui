import { useCssInit, useFlexMixins } from "@ui/hooks"
import {  computed, ref, SetupContext } from "vue"
import { ArticleEmits, ArticleProps } from "./article"
export const useArticle = (props: ArticleProps, _emit: SetupContext<ArticleEmits>['emit']) => {
  const _ref = ref<HTMLDivElement>(),itemRefs=ref<any[]>([]), { _class, classVal, styleVal } = useCssInit(props, 'article', { cssClass: [], classAdd: [] })
  ,val = ref(''), judge = ref(false), index = ref(0), data = computed(() => {
    return JSON.parse(JSON.stringify(props.data || [])).map((it:any,i:number) => {
      it._i = i
      return it
    })
  }),setRef = (el:any, index:number) => {
    if (el) {
      // 把当前元素的ref存入数组中
      itemRefs.value[index] = el;
    }
  },selected = (data:any) => {
    const i = data._i, refs = itemRefs.value, arr = [], current =refs[i], next =refs[i+1]
    judge.value= true
    for(let j =0; j < i ;j++) {
      arr.push(refs[j]?.show())
    }
    arr.push(current?.show())
    arr.push(next?.show())
    Promise.all(arr).then(() => {
      index.value = i
      current?.scroll()
      judge.value= false
    })
  }
  useFlexMixins({flex: 'row'}, classVal, styleVal, _ref)
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