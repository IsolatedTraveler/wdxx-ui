import { withInstall } from '@ui/utils'
import Article from './src/article.vue'
export const ZArticle = withInstall(Article)
export * from './src/article'
export type {ArticleInstance} from './src/instance'
export default ZArticle