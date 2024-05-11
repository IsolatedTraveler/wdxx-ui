export interface MarkdownList {
  mc: string
  child?: MarkdownList[]
}
export function getMarkDownList(arr: MarkdownList[], jb: number = 0): string {
  const zbf = (jb ? ' '.repeat(jb * 4) : '') + '- '
  return arr.map(({ mc, child }: MarkdownList) => {
    if (child)
      return zbf + mc + '\n' + getMarkDownList(child, jb + 1)
    return zbf + mc
  }).join('\n')
}