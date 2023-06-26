import { ComponentTableShape}  from '@ui/vars'
import {buildProp} from '@ui/utils'
export const useTableShapeProp = buildProp({
  key: 'shape',
  type: String,
  values: ComponentTableShape
})