import { PopEmits, PopProps } from "@ui/components/pop/src/pop";
import { InjectionKey, watch, unref, ref, onUnmounted, Ref, onMounted, SetupContext } from "vue";
import {  Instance} from '@popperjs/core'
import { createPopperInstance, destroyPopperInstance } from "./createPopperInstance";
import {  manageEvent } from "./hide";
export interface ProvidePop {
  relativeElem: Ref<HTMLElement>
  popElem: Ref<HTMLElement | undefined>
}
export const providePopId: InjectionKey<ProvidePop> = Symbol('pop')


export const useProvidePop = (props: PopProps, emit: SetupContext<PopEmits>['emit'], _ref: Ref<HTMLElement>, styleVal: any) => {
  const relativeElem = ref<HTMLElement>(document.body)
  var popperInstance: Instance | undefined, elem: any
  function init(relative: HTMLElement | null = null) {
    relativeElem.value = relative || document.body
    if (relative) {
      new ResizeObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.target === relative) {
            styleVal.minWidth = entry.contentRect.width + 'px'
          }
        });
      }).observe(relative!)
    }
  }
  watch(() => props.show, (v) => {
    if (v) {
      popperInstance=createPopperInstance(unref(relativeElem), unref(_ref), popperInstance)
      setTimeout(() => {
        popperInstance?.update()
      }, 0)
    }
    if (popperInstance) {
      manageEvent(popperInstance, !!v)
    }
  }, { immediate: true })
  onUnmounted(() => {
    elem && document.body.removeChild(_ref.value || elem)
    destroyPopperInstance(popperInstance)
  })
  onMounted(() => {
    elem = _ref.value
    elem && document.body.appendChild(elem)
  })
  return {
    init
  }
}