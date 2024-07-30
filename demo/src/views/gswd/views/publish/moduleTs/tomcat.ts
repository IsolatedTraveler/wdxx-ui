import { computed, ref } from "vue"
import { zqd } from "../fun"
import { linux } from "../code"
import { clearRz } from "../code/linux/vim"
import { getMarkDownCode } from "@/components/base"

export function useTomcat() {
  const formData = ref({ lx: 'tomcat', lj: 'tomcat8' }), code = computed(() => {
    const obj = formData.value, lj = obj.lj, lx = obj.lx, zdqd = zqd('tomcat', lj, lx).map(it => it.code)
    return [
      getMarkDownCode([
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
      getMarkDownCode([zdqd[3], zdqd[4]].join('\n'), 'bash'),
      '服务信息',
      getMarkDownCode([
        `1. 安装路径:/home/tomcat8/`,
        `2. 启动命令：systemctl restart tomcat.service`,
        `3. 查看是否启动成功：systemctl status tomcat.service`,
        `4. 后端代码发版路径：/home/tomcat8/webapps/`,
        `5. 前端代码发版路径：/home/jt-mis/static-resource/`,
        `6. 登录页面路径：http://#{ip}:8080/app/webs/login_v1/login.html`,
        `7. sql刷新路径：http://#{ip}:8080/jtmis/rest/refreshSql/#{mkbh}`,
        `8. 存储过程刷新路径：http://#{ip}:8080/jtmis/rest/reloadPrody`,
        `9. 浏览器发版刷新路径：http://#{ip}:8080/jtmis/rest/refreshFileList`
      ].join('\n'))
    ]
  })

  return { code, formData }
}