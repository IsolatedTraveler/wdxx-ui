import { useCssInit } from "@ui/hooks"
import { defineAsyncComponent,     onUnmounted, ref, SetupContext, shallowRef, watch } from "vue"
import { ArticleItemEmits, ArticleItemProps } from "./item"
import {  EventUpdate, EventUpdateIndex } from "@ui/vars"
export const useArticleItem = (props: ArticleItemProps, emit: SetupContext<ArticleItemEmits>['emit']) => {
  var lastTop = window.innerHeight + 20, isLoaded = false, showing:Promise<void>, showResolve:any, showReject:any
  const _ref = ref<HTMLDivElement>(), { _class } = useCssInit(props, 'article-item', { cssClass: [], classAdd: [] })
  , judge = ref(false), comV = shallowRef(props.com ? defineAsyncComponent(() => {
    return new Promise((resolve,reject) => {
      props.com().then((c: any) => {
        resolve(c.default)
        setTimeout(() => {
          showResolve()
        }, 0)
        stopWatch()
      }).catch(reject);
    })
  }) : null)
  , options:IntersectionObserverInit = {rootMargin: '300px 0px 300px 0px', threshold: [0,0.8, 1]}, callback:IntersectionObserverCallback = (entries:IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      const { intersectionRatio, intersectionRect: { top } } = entry
      if (intersectionRatio && !props.disabled) {
      if (lastTop > top) {
          // 向下滚动
          emit(EventUpdateIndex, Number(props.data._i) + 1)
          if (intersectionRatio > 0.8) {
            emit(EventUpdate, props.data.id)
          }
        } else if (lastTop < top) {
          // 向上滚动
          emit(EventUpdateIndex,  Number(props.data._i) - 1)
          if (intersectionRatio == 1) {
            emit(EventUpdate, props.data.id)
          }
        }
        lastTop = top
      }
    })
  },
  observer:IntersectionObserver = new IntersectionObserver(callback, options)
  ,show=() => {
    if (isLoaded) {
      return Promise.resolve()
    } else if (judge.value) {
      return showing
    } else {
      return showing = new Promise((resolve, reject) => {
        judge.value = true
        showResolve = resolve
        showReject = reject
      }).then(() => {
        observer.observe(_ref.value as HTMLElement)
      })
    }
  },
  stopWatch = watch(() => props.index == props.data._i, (v) => {
    if (v) {
      show()
    }
  }, {immediate:true})
  ,scroll = () => {
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