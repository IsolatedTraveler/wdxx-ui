import { PopProps } from "@ui/components/pop/src/pop";
import { InjectionKey, watch, nextTick, unref, ref, onUnmounted, Ref } from "vue";
import { createPopper, Instance } from '@popperjs/core'
export interface ProvidePop {
  relativeElem: Ref<HTMLElement>
  popElem: Ref<HTMLElement | undefined>
}
export const providePopId: InjectionKey<ProvidePop> = Symbol('pop')
export const useProvidePop = (props: PopProps) => {
  const relativeElem = ref<HTMLElement>(document.body), popElem = ref<HTMLElement>()
  var popperInstance: Instance | null
  function init(pop: any, relative: any = null) {
    popElem.value = pop
    relativeElem.value = relative || document.body
  }
  function createPopperInstance() {
    var e1 = unref(relativeElem), e2 = unref(popElem)
    destroyPopperInstance()
    if (e1 && e2) {
      popperInstance = createPopper(e1, e2, {})
      nextTick(() => {
        popperInstance?.update()
      })
    }
  }
  function destroyPopperInstance() {
    popperInstance?.destroy?.()
    popperInstance = null
  }
  watch(() => props.show, (v) => {
    if (v) {
      createPopperInstance()
    } else {
      destroyPopperInstance()
    }
  }, { immediate: true })
  onUnmounted(() => {
    destroyPopperInstance()
  })
  watch(() => unref(popElem), (v) => {
    console.log(v)
  }, { immediate: true })
  return {
    init
  }
}