import { provide, SetupContext } from "vue";
import { useInjectFormItems } from "../use-inject/form-items";
import { FormItemEmits, FormItemProps } from "@ui/components";
import { provideFormId } from "@ui/vars";

export const useProvideFormItems = (props: FormItemProps, emit: SetupContext<FormItemEmits>['emit']) => {
  provide(provideFormId, useInjectFormItems(props, emit))
}