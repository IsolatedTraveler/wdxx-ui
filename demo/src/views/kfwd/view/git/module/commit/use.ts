import { computed, ref } from "vue"

export function useCommit() {
  const formData = ref({}), code = computed(() => {
    return [
      {
        code: [
          '# 进行中'
        ].join('\n'),
        lx: 'bash'
      }, {
        code: [
          '# 完成'
        ].join('\n'),
        lx: 'bash'
      }, {
        code: [
          '# 进修改提交信息'
        ].join('\n'),
        lx: 'bash'
      }, {
        code: [
          '# 保持原提交信息不变，仅添加文件'
        ].join('\n'),
        lx: 'bash'
      }, {
        code: [
          '# 修改信息并添加文件'
        ].join('\n'),
        lx: 'bash'
      }
    ]
  })
  return { formData, code }
}