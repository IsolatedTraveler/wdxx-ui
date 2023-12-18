import { Ref, InjectionKey } from "vue";

export interface provideWrap {
  wrap: Ref<boolean>
}
export const provideWrapId: InjectionKey<provideWrap> = Symbol('wrap')