import { computed, ref } from "vue"
import { zqd } from "../fun"

export function useTomcat() {
  const formData = ref({ lx: 'tomcat', lj: 'tomcat8' }), code = computed(() => {
    const obj = formData.value, lj = obj.lj, lx = obj.lx
    return [
      {
        lx: 'bash',
        code: [
          'cd /home'
        ].join('\n')
      }, {
        lx: 'bash',
        code: [
          '# 拷贝apache-tomcat-8.5.64.tar.gz到当前目录',
          'tar -xvf apache-tomcat-8.5.64.tar.gz',
          `mv apache-tomcat-8.5.64 ${lj}`,
          `rm -rf ./${lj}/webapps/*`
        ].join('\n')
      }, {
        lx: 'bash',
        code: [
          `# 拷贝发版代码至/home/${lj}/webapps目录`,
        ].join('\n')
      },
      ...zqd('tomcat', lj, lx)
    ]
  })

  return { code, formData }
}