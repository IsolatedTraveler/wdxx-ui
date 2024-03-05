import { FormEmits, FormProps } from "@ui/components/form/src/form";
import { SetupContext, provide } from "vue";
import { useInjectForm } from "../use-inject/form";
import { provideFormId } from "@ui/vars/hooks";
export const useProvideForm = (props: FormProps, emit: SetupContext<FormEmits>['emit']) => {
  provide(provideFormId, useInjectForm(props, emit))
}