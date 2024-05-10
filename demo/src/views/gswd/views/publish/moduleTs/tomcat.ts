import { computed, ref } from "vue"
import { zqd } from "../fun"
import { linux } from "../code"
import { clearRz } from "../code/linux/vim"

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
          `rm -rf ./${lj}/webapps/*`,
          `rm -rf ./apache-tomcat-8.5.64.tar.gzs`,
          linux.fileContentRepalce('/home/tomcat8/conf/server.xml', '7080', '7890'),
          linux.fileContentRepalce('/home/tomcat8/conf/server.xml', '8080', '7890')
        ].join('\n')
      }, {
        lx: 'bash',
        code: [
          `# 拷贝发版代码至/home/${lj}/webapps目录`,
        ].join('\n')
      }, {
        lx: 'bash',
        code: [
          `# 日志清理`,
          clearRz([
            `cd /home/${lj}/logs/`
            , 'true > catalina.out'
            , 'ls |grep -v catalina.out | xargs rm'
          ].join('\n'))
        ].join('\n')
      },
      ...zqd('tomcat', lj, lx)
    ]
  })

  return { code, formData }
}