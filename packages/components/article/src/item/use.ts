import { useCssInit } from "@ui/hooks"
import { DefineComponent, onUnmounted, ref, SetupContext, shallowRef, watch } from "vue"
import { ArticleItemEmits, ArticleItemProps } from "./item"
import {  EventUpdateIndex } from "@ui/vars"
const height = window.innerHeight
export const useArticleItem = (props: ArticleItemProps, emit: SetupContext<ArticleItemEmits>['emit']) => {
  // 借用该参数判断当前页面是向上滚动还是向下滚动
  var lastTop: number | undefined
  // 通过该参数判断是否触发滚动改变左侧菜单
  ,lastHeight: number | undefined
    // 该参数用来表示当前异步组件是否加载完成
    , showPromise: Promise<void>
    // 判断是否加载下一个组件 默认未加载
    ,observer: IntersectionObserver | undefined
  const _ref = ref<HTMLDivElement>()
    , { _class } = useCssInit(props, 'article-item', { cssClass: [], classAdd: [] })
    // 异步组件加载完成后的组件值
    , comV = shallowRef()
    // 观察组件是否进入视图的扩展参数
    , options: IntersectionObserverInit = { rootMargin: `0px 0px ${height}px 0px` }
    , setVal = ({height, lastHeight, judge, add}:any) => {
      if (props.disabled) return
      if (judge) {
        if (props.index + add == props.data._i) {
          emit(EventUpdateIndex, props.index + add)
        }
      } else if(props.index === props.data._i && lastHeight) {
        if (lastHeight > height) {
          emit(EventUpdateIndex, props.index + add)
        }
      }
    }
    // 观察组件是否进入视图的回调函数
    , callback: IntersectionObserverCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        const { intersectionRatio, boundingClientRect: { top }, intersectionRect:{height} } = entry
        if (intersectionRatio && lastTop === undefined) {
          props.next(props.data._i)
        } else if (lastTop !== undefined) {
          if (lastTop > top) {
            props.next(props.data._i)
            setVal({height, lastHeight, add: 1, judge: intersectionRatio==1})
          } else {
            setVal({height, lastHeight, add: -1, judge: intersectionRatio==1})
          }
        }
        lastTop = top
        lastHeight = height
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
    }
    , show = (judge = true) => {
      if (!judge) return
      if (showPromise) return showPromise
      return showPromise = loadComponent().then(() => {
        const el = _ref.value as HTMLDivElement, bl = Math.min(props.height / el.scrollHeight,0.25)
        options.threshold=[0, bl, bl*2, bl*3,1]
        observer = new IntersectionObserver(callback, options)
        observer.observe(el)
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
    observer && observer.disconnect()
  })
  return {
    _ref,
    _class,
    comV,
    scroll,
    show
  }
}