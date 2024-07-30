import { useCssInit, useFlexMixins, debounce } from "@ui/hooks"
import { computed, onMounted, ref, SetupContext, watch } from "vue"
import { ArticleEmits, ArticleProps } from "./article"
export const useArticle = (props: ArticleProps, _emit: SetupContext<ArticleEmits>['emit']) => {
  // 已加载几个子组件
  var loadIndex = 0
    // 总共有多少子组件
    , dataLen = 0
  const _ref = ref<HTMLDivElement>(), _content = ref<HTMLDivElement>(),
    itemRefs = ref<any[]>([])
    , { _class, classVal, styleVal } = useCssInit(props, 'article', { cssClass: [], classAdd: [] })
    // 左侧菜单选中值
    , val = ref('')
    , height = ref(200)
    // 当前加载序号
    , index = ref(0)
    // 是否禁用滚动触发修改左侧菜单值，点击左侧菜单触发滚动，此时禁用滚动触发修改左侧菜单值
    , diabledScroll = ref(false)
    // 菜单数据特殊处理
    , data = computed(() => {
      if (loadIndex) {
        loadIndex = 0
        loadNext(loadIndex)
      }
      const data = JSON.parse(JSON.stringify(props.data || []))
      dataLen = data.length
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
      const i = data._i
      diabledScroll.value = true
      loadNext(i).then((refs) => {
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
    },
    loadNext = (end: number) => {
      const arr: Promise<void>[] = [], refs = itemRefs.value
      end += props.loadNum
      while (loadIndex < end && loadIndex < dataLen) {
        if (refs[loadIndex])
          arr.push(refs[loadIndex].show())
        loadIndex++
      }
      return Promise.all(arr).then(() => refs)
    }
  useFlexMixins({ flex: 'row' }, classVal, styleVal, _ref)
  onMounted(() => {
    if (_ref.value) {
      height.value = _ref.value.clientHeight / 4
    }
    watch(() => props.defVal, (v) => {
      if (v) {
        props.data.forEach((it, i) => {
          if (it.id == v) {
            selected({ ...it, _i: i })
          }
        })
      }
    }, { immediate: true })
    loadNext(0)
  })
  watch(() => index.value, (v, o) => {
    val.value = props.data[v].id
  })
  return {
    _ref,
    _class,
    val,
    index,
    data,
    selected,
    setRef,
    _content,
    diabledScroll,
    loadNext,
    height
  }
}