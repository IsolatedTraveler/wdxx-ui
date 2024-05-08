import { computed, ref } from "vue"
function getCode(type: string, desc: string, detail: string) {
  let jyms = `${type}():${desc}`
  return [
    [
      jyms,
      detail
    ].filter(it => it).join('\\n\\n'),
    [
      jyms + '[WIP]',
      detail
    ].filter(it => it).join('\\n\\n')
  ].map(it => `"${it}"`)
}
export function useCommit() {
  const formData = ref({ type: '', desc: '', detail: '' }), code = computed(() => {
    const { type, desc, detail } = formData.value, [code, codeJxz] = getCode(type, desc, detail)
    return [{
      code: [
        '# 进行中',
        'git add .',
        'git commit -m ' + codeJxz
      ].join('\n'),
      lx: 'bash'
    }, {
      code: [
        '# 完成',
        'git add .',
        'git commit -m ' + code
      ].join('\n'),
      lx: 'bash'
    }, {
      code: [
        '# 仅修改提交信息',
        'git add .',
        'git commit --amend -m ' + code
      ].join('\n'),
      lx: 'bash'
    }, {
      code: [
        '# 保持原提交信息不变，仅添加文件',
        'git commit --amend'
      ].join('\n'),
      lx: 'bash'
    }, {
      code: [
        '# 修改信息并添加文件',
        'git add .',
        'git commit --amend -m ' + code
      ].join('\n'),
      lx: 'bash'
    }
    ]
  })
  return { formData, code }
}