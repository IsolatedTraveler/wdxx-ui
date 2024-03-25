import { uuid } from "@/assets/js"
import { formItem } from "./formItem"
import { linuxCopyDirectory, linuxFileContentRepalce } from "../../code"

export function getSql(jgid: string, zffs: string, data: any) {
  return (formItem[zffs] || []).map(({ name }) => {
    return getPayParamSql(jgid, zffs, name, data[name])
  }).join('\n')
}
export function getPayParamSql(jgid: string, zffs: string, paramcode: string, val: string) {
  return [
    'insert into pay_org_port_param',
    '  (id, portid, orgid, paramcode, paramvalue, isactive)',
    'values',
    `  ('${uuid()}', '${zffs}', '${jgid}', '${paramcode}', '${val}', 1);`,
    'update pay_org_port_param',
    `   set paramvalue = '${val}',`,
    '       isactive = 1',
    ` where portid = '${zffs}'`,
    `   and orgid = '${jgid}'`,
    `and paramcode = '${paramcode}';`
  ].join('\n')
}
export function getPayPortSql(jgid: string, zffs: string, yxq: number) {
  return [
    'insert into pay_org_port',
    '  (id, orgid, pay_id, isactive, starttime, endtime)',
    'values',
    `  ('${uuid()}', '${jgid}', '${zffs}', 1, sysdate - 1, sysdate + INTERVAL '${yxq}' YEAR);`,
    'update pay_org_port',
    `   set endtime = sysdate + INTERVAL '${yxq}' YEAR,`,
    '       isactive = 1',
    ` where pay_id = '${zffs}'`,
    `   and orgid = '${jgid}';`
  ].join('\n')
}
export function getSqSql(yxq: number, jgid: string) {
  return ['0004'].map((cslx) => {
    return [
      'insert into app_config_sq',
      '  (cslx, jgid, sfsq, cjrxm, cjrid, cjsj)',
      'values',
      `  ('${cslx}', '${jgid}', sysdate + INTERVAL '${yxq}' YEAR, '管理员', '0', sysdate);`,
      'update app_config_sq',
      `   set sfsq = sysdate + INTERVAL '${yxq}' YEAR`,
      ` where cslx = '${cslx}'`,
      `   and jgid = '${jgid}';`
    ].join('\n')
  }).join('\n')
}
export function getNginxC(fbd: string, wwdz: string) {
  const fileSite = `/usr/share/nginx/wx/${fbd}wx/`
  return [{
    lx: 'bash',
    code: [
      'cd /usr/share/nginx/wx',
      linuxCopyDirectory('smqwx', fbd + 'wx'),
      linuxFileContentRepalce(`${fileSite}app/mobile/static/lib/config.js`, 'smq', fbd),
      linuxFileContentRepalce(`${fileSite}jggzh/static/lib/config.js`, 'smq', fbd),
      linuxFileContentRepalce(`${fileSite}pay/static/lib/config.js`, 'smq', fbd),
      'cd /home/tomcat-7/webapps',
      linuxCopyDirectory('smqapi', fbd + 'api'),
      linuxFileContentRepalce(`/home/tomcat-7/webapps/${fbd}api/WEB-INF/classes/system.properties`,'http:\\/\\/smq.frp.cdjtwx.com:81\\/',wwdz.replace(/\//g, '\\/'))
    ].join('\n')
  }, {
    lx: 'bash',
    code: [
      '# 拷贝以下内容到nginx',
      `    location /${fbd}api {`,
      `      proxy_pass http://127.0.0.1:8080/${fbd}api/;`,
      `    }`,
      `    location /${fbd}ww {`,
      `      proxy_pass ${wwdz};`,
      `    }`,
      `    location /${fbd}api/rest/queryDataBySql {`,
      `      proxy_pass ${wwdz}jtphis/rest/queryDataBySql/;`,
      `    }`,
      `    location /${fbd}api/rest/commitData {`,
      `      proxy_pass ${wwdz}jtphis/rest/commitData/;`,
      `    }`
    ].join('\n')
  }, {
    lx: 'bash',
    code: [
      '/usr/sbin/nginx -s reload'
    ].join('\n')
  }, {
    lx: 'bash',
    code: [
      '# 第三方发版',
      'cd /home',
      '# 拷贝发版工具中frp到其中'
    ].join('\n')
  }, {
    lx: 'bash',
    code: [
      'vi /lib/systemd/system/frpc.service',
      '# 拷贝以下内容'
    ].join('\n')
  }, {
    lx: 'bash',
    code: [
      '[Unit]',
      'Description=frpc service',
      'After=network.target syslog.target',
      'Wants=network.target',
      '[Service]',
      'Type=simple',
      '#启动服务的命令（此处写你的frps的实际安装目录）',
      'ExecStart=/home/frp/frpc -c /home/frp/frpc.ini',
      '[Install]',
      'WantedBy=multi-user.target'
    ].join('\n'),
  }, {
    lx: 'bash',
    code: [
      'chmod +x /home/frp/frpc',
      'systemctl enable frpc',
      'systemctl start frpc'
    ].join('\n')
  }
  ]
}