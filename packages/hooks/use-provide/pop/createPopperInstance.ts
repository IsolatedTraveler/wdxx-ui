import { Instance, createPopper } from "@popperjs/core"
import { flipToEdgeModifier } from "./flipToEdgeModifier"

export function destroyPopperInstance(popperInstance:Instance | undefined) {
  popperInstance?.destroy?.()
  popperInstance = undefined
}
export function createPopperInstance(e1:HTMLElement,e2:HTMLElement,popperInstance:Instance | undefined):Instance|undefined {
    if (e1 && e2 && !popperInstance) {
      return createPopper(e1, e2, {
        placement: 'bottom-start',
        strategy: "fixed",
        modifiers: [
          flipToEdgeModifier(),
          {
            name: 'offset',
            options: {
              offset: [0, 5]
            }
          }, {
            name: 'eventListeners',
            options: {
              scroll: true,
              resize: true
            }
          }
        ]
      })
    }
    return popperInstance
}