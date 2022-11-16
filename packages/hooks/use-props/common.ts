import { buildProp } from "./base";
import { border, size } from "../var-props";
import { ruleValidate } from "./base.check";
export const useSizeProp = buildProp({
  type: String,
  values: size
})
export const useBorderProp = buildProp({
  type: String,
  values: border
})
export const useRuleProp = buildProp({
  type: [String, Object, Array],
  validator: ruleValidate
})