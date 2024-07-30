export * from './type'
import * as obj from './obj'
import { FbdqObj, InstitutionCode } from './type'
export const fbdq: FbdqObj[] = Object.values(obj)
  , fbdqObj: Record<InstitutionCode, FbdqObj> = obj