import { PopProps } from "@ui/components/pop/src/pop";
import { InjectionKey, watch, nextTick, unref, ref, onUnmounted, Ref, onMounted } from "vue";
import { createPopper, Instance } from '@popperjs/core'
export interface ProvidePop {
  relativeElem: Ref<HTMLElement>
  popElem: Ref<HTMLElement | undefined>
}
export const providePopId: InjectionKey<ProvidePop> = Symbol('pop')
export const useProvidePop = (props: PopProps, _ref: Ref<HTMLElement>, styleVal: any) => {
  const relativeElem = ref<HTMLElement>(document.body)
  var popperInstance: Instance | null
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
  function createPopperInstance() {
    var e1 = unref(relativeElem), e2 = unref(_ref)
    destroyPopperInstance()
    if (e1 && e2) {
      popperInstance = createPopper(e1, e2, {
        placement: 'bottom',
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, 5]
            }
          }
        ]
      })
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
    document.body.removeChild(_ref.value!)
    destroyPopperInstance()
  })
  onMounted(() => {
    document.body.appendChild(_ref.value!)
  })
  return {
    init
  }
}