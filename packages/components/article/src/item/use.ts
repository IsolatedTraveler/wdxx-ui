import { useCssInit } from "@ui/hooks"
import { DefineComponent, onUnmounted, ref, SetupContext, shallowRef, watch } from "vue"
import { ArticleItemEmits, ArticleItemProps } from "./item"
import { EventUpdate, EventUpdateIndex } from "@ui/vars"
export const useArticleItem = (props: ArticleItemProps, emit: SetupContext<ArticleItemEmits>['emit']) => {
  // 借用该参数判断当前页面是向上滚动还是向下滚动
  var lastTop: number | undefined = undefined
    // 该参数用来表示当前异步组件是否加载完成
    , showPromise: Promise<void>
    // 判断是否加载下一个组件 默认未加载
    , judge = true
  const _ref = ref<HTMLDivElement>()
    , { _class } = useCssInit(props, 'article-item', { cssClass: [], classAdd: [] })
    // 异步组件加载完成后的组件值
    , comV = shallowRef()
    // 观察组件是否进入视图的扩展参数
    , options: IntersectionObserverInit = { rootMargin: '300px 0px 300px 0px', threshold: [0, 0.3, 0.8, 1] }

    , setVal = (add: number = 1) => {
      if (props.disabled) return
      emit(EventUpdate, props.data.id)
    }
    // 观察组件是否进入视图的回调函数
    , callback: IntersectionObserverCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        const { intersectionRatio, intersectionRect: { top } } = entry
        if (intersectionRatio) {
          if (lastTop === undefined) {
            judge && emit(EventUpdateIndex, Number(props.data._i) + 1)
            judge = false
          } else if (lastTop > top) {
            // 向下滚动
            props.data.mc == '命名规范' && console.log(props.data.mc, intersectionRatio)
            judge && emit(EventUpdateIndex, Number(props.data._i) + 1)
            judge = false
            if (intersectionRatio > 0.8) {
              setVal(1)
            }
          } else if (lastTop < top) {
            // 向上滚动
            if (intersectionRatio == 1) {
              setVal(-1)
            }
          }
          lastTop = top
        }
      })
    },
    // 加载异步组件
    loadComponent = (): Promise<void> => {
      if (!props.com) return Promise.resolve()
      return new Promise((resolve, reject) => {
        try {
          props.com().then((c: { default: DefineComponent }) => {
            comV.value = c.default
            stopWatch()
            setTimeout(resolve, 0);
          }).catch(reject)
        } catch (e) {
          reject()
        }
      })
    },
    observer: IntersectionObserver = new IntersectionObserver(callback, options)
    , show = (judge = true) => {
      if (!judge) return
      if (showPromise) return showPromise
      return showPromise = loadComponent().then(() => {
        observer.observe(_ref.value as HTMLElement)
      })
    },
    stopWatch = watch(() => props.index == props.data._i, show, { immediate: true })
    , scroll = () => {
      _ref.value?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  onUnmounted(() => {
    observer.disconnect()
  })
  return {
    _ref,
    _class,
    comV,
    scroll,
    show
  }
}