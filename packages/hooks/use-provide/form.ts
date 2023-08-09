import { FormProps } from "@ui/components/form/src/form";
import { provide } from "vue";
import { useInjectForm } from "../use-inject/form";
import { provideFormId } from "@ui/vars/hooks";
export const useProvideForm = (props: FormProps) => {
  provide(provideFormId, useInjectForm(props))
}