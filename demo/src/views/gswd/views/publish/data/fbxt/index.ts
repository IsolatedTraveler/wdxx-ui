import * as obj from './obj'
import { FbxtId, FbxtItem } from './type'
export * from './type'
export const fbxt: FbxtItem[] = Object.values(obj)
  , fbxtObj: Record<FbxtId, FbxtItem> = obj