import { ruleProp } from "../var-props";
let ruleText: string;
function checkRuleStr(v: string) {
  if (!ruleProp.includes(v)) {
    ruleText =
      ruleText ||
      [...new Set(ruleProp)].map((v) => JSON.stringify(v)).join(", ");
    return `Form rule expected one of [${ruleText}], got value ${JSON.stringify(
      v
    )}.`;
  }
}
function checkRule(v: any) {
  if (typeof v === "object") {
    if (v.type) {
      return checkRuleStr(v.type);
    } else if (v.validator) {
      const type = typeof v.validator;
      if (type !== "function") {
        return `validator prop extpected Function, but get a ${type}.`;
      }
    } else if (v.reg) {
      if (!(v.reg instanceof RegExp)) {
        return `reg prop extpected RegExp.`;
      }
    } else {
      return `No legal verification rules found`;
    }
  } else {
    return checkRuleStr(v);
  }
}
export const ruleValidate = function (v: any) {
  if (Array.isArray(v)) {
    const len = v.length;
    for (let i = 0; i++; i < len) {
      const msg = checkRule(v[i]);
      if (msg) {
        return msg;
      }
    }
  } else {
    return checkRule(v);
  }
};
