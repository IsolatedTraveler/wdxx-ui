import { provide, Slots, InjectionKey, inject } from "vue"
import { ObjAny } from "@ui/vars"
export interface ProvideThId {
  add?: Function
}
export const provideThId:InjectionKey<ProvideThId> = Symbol('th')
export const useProvideTh = (slots: Slots, headV: ObjAny) => {
  provide(provideThId, {
    add() {

    }
  })
}
export const useInjectTh = (headV: ObjAny) => {
  const {head} = inject(provideThId, {})
  headV.rowspan = headV.rowspan + 1
  if (head) {
    head.colspan = head.colspan + 1
  }
}