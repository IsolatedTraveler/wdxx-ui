import { FormItemsProps } from "@ui/components/form-items/src/form-items";
import { InjectionKey, provide } from "vue";
import { useInjectFormItems } from "../use-inject/form-items";
import { ProvideForm } from "./form";

export const provideFormItemsId:InjectionKey<ProvideForm> = Symbol('form-items')
export const useProvideFormItems = (props: FormItemsProps) => {
  provide(provideFormItemsId, useInjectFormItems(props))
}