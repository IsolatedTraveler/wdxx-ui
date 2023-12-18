import { provide } from "vue";
import { provideWrap, provideWrapId } from "@ui/vars/hooks";

export const useProvideWrap = (val: provideWrap) => {
  provide(provideWrapId, val)
}