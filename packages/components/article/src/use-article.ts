import { useCssInit } from "@ui/hooks"
import { ref, SetupContext } from "vue"
import { ArticleEmits, ArticleProps } from "./article"
export const useArticle = (props: ArticleProps, _emit: SetupContext<ArticleEmits>['emit']) => {
  const _ref = ref<HTMLDivElement>(), { _class } = useCssInit(props, 'article', { cssClass: [], classAdd: [] })
  return {
    _ref,
    _class
  }
}