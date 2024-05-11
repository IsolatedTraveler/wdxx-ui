type AnnotationItem = [string, string]
interface AnnotationParam {
  type: string
  name: string
}
export function getAnnotaitionEnum(desc: string, annotation: AnnotationItem[], param?: AnnotationParam) {
  return [
    '/**',
    ` * @description ${desc}`,
    ' *',
    param ? ` * @enum {${param.type}} ${param.name}` : ' * @enum',
    ' *',
    annotation.map(([v, m]) => {
      try {
        v = JSON.parse(v)
      } catch { }
      return ` * - ${v}: ${m}`
    }).join('\n'),
    '*/'
  ].filter(it => it).join('\n')
}