import { inject, ref } from "vue";
import { providePopId } from "../use-provide";
export const useInjectPop = (e2: any, e1?: any) => {
  const { relativeElem, popElem } = inject(providePopId, {
    relativeElem: ref(document.body),
    popElem: ref<any>()
  })
  if (e1) {
    relativeElem.value = e1
  }
  popElem.value = e2
  return {
  }
}