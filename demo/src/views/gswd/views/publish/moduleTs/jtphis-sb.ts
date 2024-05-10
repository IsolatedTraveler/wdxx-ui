import { computed, ref } from "vue";
import { linux } from "../code";

export function useJtphisSb() {
  const fileSite = '/home/tomcat8/webapps/jtphis/WEB-INF/classes/',
    formData = ref({
      dbUrl: '192.168.0.242/orcl',
      dbName: 'healthcloud',
      dbPwd: 'healthcloud',
      fwlj: 'http://192.168.0.242:7080/jtphis/',
      bjip: '192.168.0.242',
      redis: '192.168.0.242'
    }), code = computed(() => {
      var obj = formData.value
      return [
        {
          lx: 'bash',
          code: [
            linux.fileContentRepalceArr(fileSite + 'system.properties', [
              { reg: 'db.url=jdbc:oracle:thin:@192.168.0.242/orcl', rep: 'db.url=jdbc:oracle:thin:@' + obj.dbUrl }
              , { reg: 'db.username=healthcloud', rep: 'db.username=' + obj.dbName }
              , { reg: 'db.password=healthcloud#2023', rep: 'db.password=' + obj.dbPwd }
              , { reg: '192.168.0.242', rep: obj.bjip }
              , { reg: '192.168.0.242', rep: obj.redis }
            ])
            , linux.fileContentRepalce(fileSite + 'config.txt', '192.168.0.242', obj.bjip)
          ].join('\n')
        }, {
          lx: 'bash',
          code: [
            `sql刷新路径：${obj.fwlj}rest/refreshSql/#{mkbh}`,
            `存储过程刷新路径：${obj.fwlj}rest/reloadPrody`,
            `浏览器发版刷新路径：${obj.fwlj}rest/refreshFileList`
          ].join('\n')
        }
      ]
    })
  return { code, formData }
}