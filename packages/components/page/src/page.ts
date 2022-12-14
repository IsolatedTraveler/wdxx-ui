import { ExtractPropTypes, PropType } from "vue";
export const pageProps = {
  disabled: Boolean as PropType<boolean>
}
export const pageEmits = {
}
export type PageProps = ExtractPropTypes<typeof pageProps>
export type PageEmits = typeof pageEmits