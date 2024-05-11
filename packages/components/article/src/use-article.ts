import { useCssInit, useFlexMixins, debounce } from "@ui/hooks"
import { computed, ref, SetupContext } from "vue"
import { ArticleEmits, ArticleProps } from "./article"
export const useArticle = (props: ArticleProps, _emit: SetupContext<ArticleEmits>['emit']) => {
  const _ref = ref<HTMLDivElement>(), _content = ref<HTMLDivElement>(),
    itemRefs = ref<any[]>([])
    , { _class, classVal, styleVal } = useCssInit(props, 'article', { cssClass: [], classAdd: [] })
    // 左侧菜单选中值
    , val = ref('')
    // 当前加载序号
    , index = ref(0)
    // 是否禁用滚动触发修改左侧菜单值，点击左侧菜单触发滚动，此时禁用滚动触发修改左侧菜单值
    , diabledScroll = ref(false)
    // 菜单数据特殊处理
    , data = computed(() => {
      const data = JSON.parse(JSON.stringify(props.data || []))
      val.value = data[0]?.id
      return data.map((it: any, i: number) => {
        it._i = i
        return it
      })
    })
    // 设置菜单对应组件
    , setRef = (el: any, index: number) => {
      if (el) {
        // 把当前元素的ref存入数组中
        itemRefs.value[index] = el;
      }
    }
    // 点击左侧菜单触发事件
    , selected = (data: any) => {
      // 加载异步组件
      const i = data._i, refs = itemRefs.value, arr: Promise<void>[] = [], next = i + 2
      diabledScroll.value = true
      for (let j = 0; j < next; j++) {
        if (refs[j])
          arr.push(refs[j].show())
      }
      Promise.all(arr).then(() => {
        onScroll(refs, i)
      })
    }
    , onScroll = (refs: any, i: number) => {
      const delayScroll = debounce((judge: any) => {
        if (judge === false) {
          diabledScroll.value = false
          _content.value?.removeEventListener('scroll', delayScroll)
        } else {
          refs[index.value].show().then(() => {
            refs[i].scroll()
            delayScroll(false)
          })
        }
      }, 50)
      _content.value?.addEventListener('scroll', delayScroll, { passive: true })
      refs[i].scroll()
      delayScroll(false)
    }
    // 页面滚动触发事件
    , scroll = (v: any) => {
      console.log(v)
    }
  useFlexMixins({ flex: 'row' }, classVal, styleVal, _ref)

  return {
    _ref,
    _class,
    val,
    index,
    data,
    selected,
    setRef,
    scroll,
    _content,
    diabledScroll
  }
}