import { withInstall } from '@ui/utils'
import Upload from './src/upload.vue'
export const ZUpload = withInstall(Upload)
export * from './src/upload'
export type {UploadInstance} from './src/instance'
export default ZUpload