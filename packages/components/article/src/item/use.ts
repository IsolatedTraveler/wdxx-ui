import { useCssInit } from "@ui/hooks"
import { DefineComponent, onUnmounted, ref, SetupContext, shallowRef, watch } from "vue"
import { ArticleItemEmits, ArticleItemProps } from "./item"
import { EventUpdate, EventUpdateIndex } from "@ui/vars"
export const useArticleItem = (props: ArticleItemProps, emit: SetupContext<ArticleItemEmits>['emit']) => {
  var lastTop = window.innerHeight + 20, showPromise: Promise<void>
  const _ref = ref<HTMLDivElement>(), { _class } = useCssInit(props, 'article-item', { cssClass: [], classAdd: [] })
    , comV = shallowRef(), judge = ref(false)
    , options: IntersectionObserverInit = { rootMargin: '300px 0px 300px 0px', threshold: [0, 0.8, 1] },
    setVal = (add: number = 1) => {
      if (props.disabled) return
      if (Number(props.index) + add != props.data._i) return
      emit(EventUpdate, props.data.id)
    },
    callback: IntersectionObserverCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        const { intersectionRatio, intersectionRect: { top } } = entry
        if (intersectionRatio) {
          if (lastTop > top) {
            // 向下滚动
            emit(EventUpdateIndex, Number(props.data._i) + 1)
            if (intersectionRatio > 0.8) {
              setVal(1)
            }
          } else if (lastTop < top) {
            // 向上滚动
            emit(EventUpdateIndex, Number(props.data._i) - 1)
            if (intersectionRatio == 1) {
              setVal(-1)
            }
          }
          lastTop = top
        }
      })
    },
    loadComponent = (): Promise<void> => {
      judge.value = true
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
    , show = () => {
      if (showPromise) return showPromise
      return showPromise = loadComponent().then(() => {
        observer.observe(_ref.value as HTMLElement)
      })
    },
    stopWatch = watch(() => props.index == props.data._i, (v) => {
      if (v) {
        show()
      }
    }, { immediate: true })
    , scroll = async () => {
      _ref.value?.scrollIntoView()
    }
  onUnmounted(() => {
    observer.disconnect()
  })
  return {
    _ref,
    _class,
    comV,
    judge,
    scroll,
    show
  }
}