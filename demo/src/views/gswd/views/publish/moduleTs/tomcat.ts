import { computed, ref } from "vue"
import { zqd } from "../fun"
import { linux } from "../code"
import { clearRz } from "../code/linux/vim"
import { getMarkDownCode } from "@/components/base"

export function useTomcat() {
  const formData = ref({ lx: 'tomcat', lj: 'tomcat8' }), code = computed(() => {
    const obj = formData.value, lj = obj.lj, lx = obj.lx, zdqd = zqd('tomcat', lj, lx).map(it => it.code)
    return [getMarkDownCode([
      '# 拷贝apache-tomcat-8.5.64.tar.gz到/home',
      'cd /home',
      'tar -xvf apache-tomcat-8.5.64.tar.gz',
      `mv apache-tomcat-8.5.64 ${lj}`,
      `rm -rf ./${lj}/webapps/*`,
      `rm -rf ./apache-tomcat-8.5.64.tar.gzs`,
      linux.fileContentRepalce('/home/tomcat8/conf/server.xml', '7080', '7890'),
      linux.fileContentRepalce('/home/tomcat8/conf/server.xml', '8080', '7890'),
      `# 日志清理`,
      clearRz([
        `cd /home/${lj}/logs/`
        , 'true > catalina.out'
        , 'ls |grep -v catalina.out | xargs rm'
      ].join('\n')),
      zdqd[0],
      zdqd[1]
    ].join('\n'), 'bash'),
      '定时重启',
    getMarkDownCode([
      `# 拷贝发版代码至/home/${lj}/webapps目录`,
      zdqd[2]
    ].join('\n'), 'bash'),
    getMarkDownCode([zdqd[3], zdqd[4]].join('\n'), 'bash')
    ]
  })

  return { code, formData }
}