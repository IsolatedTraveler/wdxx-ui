import { provide, SetupContext } from "vue";
import { useInjectFormItem } from "../use-inject/form-item";
import { FormItemEmits, FormItemProps } from "@ui/components";
import { provideFormId } from "@ui/vars";
export const useProvideFormItem = (props: FormItemProps, emit: SetupContext<FormItemEmits>['emit']) => {
  const obj = useInjectFormItem(props, emit)
  provide(provideFormId, obj)
  return obj
}