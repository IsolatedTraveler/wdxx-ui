import { EventSelectData } from "@ui/vars"
import { computed, ref } from "vue"
export function useCommit() {
  const formData = ref({ type: '', name: '', email: '', url: '' }), code = computed(() => {
    const { name, email, url } = formData.value
    return [
      {
        code: [
          '# 针对项目配置用户信息'
          , `git config user.name "${name}"`
          , `git config user.email "${email}"`
        ].join('\n'),
        lx: 'bash'
      }, {
        code: [
          '# 获取SSH密钥'
          , `ssh-keygen -t rsa -b 4096 -C "${email}"`
        ].join('\n'),
        lx: 'bash'
      }, {
        code: [
          '# 变更仓库地址',
          , `git remote set-url origin "${url}"`
        ].join('\n'),
        lx: 'bash'
      }
    ]
  })
  function selectType({ data, selected }: EventSelectData) {
    if (selected) {
      const obj = formData.value
      obj.email = data.email
      obj.name = data.name
    }
  }
  return { formData, code, selectType }
}