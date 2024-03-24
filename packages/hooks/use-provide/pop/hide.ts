import { Instance } from "@popperjs/core"

export function manageEvent(popperInstance:Instance, enabled: boolean) {
  popperInstance.setOptions((options) => ({
      ...options,
      modifiers: [
        ...options.modifiers||[],
        { name: 'eventListeners', enabled }
      ]
    })
  )
}