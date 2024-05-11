interface GetAnnotaitionFunctionParamParams {
  name: string
  type: string
  desc: string
  required: Boolean
  def?: string
}
interface GetAnnotaitionFunctionParamRes {
  type: string
  desc: string
}
export function getAnnotaitionFunction(desc: string, params: GetAnnotaitionFunctionParamParams[], res: GetAnnotaitionFunctionParamRes = {} as any) {
  return [
    '/**',
    ` * @description ${desc}`,
    ' *',
    // v: 变量名   t: 变量类型  m: 变量描述   d: 变量默认值  r: 是否必填
    ...params.map(({ name, type, desc, required, def }) => {
      name = def ? `${name} = ${def}` : name
      name = required ? name : `[${name}]`
      return ` * @param {${type}} ${name} - ${desc}`
    }),
    ` * @returns {${res.type}} ${res.desc}`,
    '*/'
  ].filter(it => it).join('\n')
}