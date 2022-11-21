import {ComponentSize} from '@ui/vars'
import {buildProp} from '@ui/utils'
export const useSizeProp = buildProp({
  key: 'size',
  type: String,
  values: ComponentSize
})