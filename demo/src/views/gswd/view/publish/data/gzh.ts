import { ref, computed } from "vue";
import { PublishCode } from "./type";
import { uuid } from "@/assets/js";
interface Zfcs {
  name: string
  mc: string
}
interface ZfcsObj {
  [key: string]: Array<Zfcs>
}
interface FormData {
  wwdz?: string
  fbd?: string
  jgid?: string
  zffs: string
  yxq?: number
  APPID?: string
  MCHID?: string
  PRIVATEKEY?: string
  Appsecret?: string
}
const zfcs = {
  '1': [
    { name: 'MCHID', mc: '商户号' },
    { name: 'PRIVATEKEY', mc: '微信支付平台API密钥' }
  ]
} as ZfcsObj
function getSql(jgid: string, zffs: string, data: any) {
  return (zfcs[zffs] || []).map(({ name }) => {
    return getPayParamSql(jgid, zffs, name, data[name])
  }).join('\n')
}
function getPayParamSql(jgid: string, zffs: string, paramcode: string, val: string) {
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
function getPayPortSql(jgid: string, zffs: string, yxq: number) {
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
export default function useGzh() {
  const lx = ref<number>(1), formData = ref<FormData>({
    fbd: 'xjh', yxq: 1, zffs: '1', jgid: '15', APPID: 'wxdfc68f2e36a2279e'
    , MCHID: '', PRIVATEKEY: '', Appsecret: ''
  }), data = [
    { id: 0, mc: '自有ip' },
    { id: 1, mc: 'frp' }
  ], wwdz1 = computed(() => {
    var data = formData.value, url = data.wwdz || ''
    if (lx.value == 1) {
      url = `http://${data.fbd}.frp.cdjtwx.com:81/`
    }
    return url
  }), nginxC = computed(() => {
    const data = formData.value, fbd = data.fbd
    return [
      '# 拷贝以下内容到nginx',
      `    location /${fbd}api {`,
      `      proxy_pass http://127.0.0.1:8080/${fbd}api/;`,
      `    }`,
      `    location /${fbd}ww {`,
      `      proxy_pass ${wwdz1.value};`,
      `    }`,
      `    location /${fbd}api/rest/queryDataBySql {`,
      `      proxy_pass ${wwdz1.value}jtphis/rest/queryDataBySql/;`,
      `    }`,
      `    location /${fbd}api/rest/commitData {`,
      `      proxy_pass ${wwdz1.value}jtphis/rest/commitData/;`,
      `    }`
    ].join('\n')
  }), code = computed(() => {
    const data = formData.value, fbd = data.fbd, jgid = data.jgid || ''
      , zffs = data.zffs || '', yxq = data.yxq || 1
    return [
      {
        lx: 'bash',
        code: [
          'cd /usr/share/nginx/wx',
          'mkdir ' + fbd + 'wx',
          'cp -r smqwx/* ' + fbd + 'wx',
          `sed -i 's/smq/${fbd}/g' /usr/share/nginx/wx/${fbd}wx/app/mobile/static/lib/config.js`,
          `sed -i 's/smq/${fbd}/g' /usr/share/nginx/wx/${fbd}wx/jggzh/static/lib/config.js`,
          `sed -i 's/smq/${fbd}/g' /usr/share/nginx/wx/${fbd}wx/pay/static/lib/config.js`
        ].join('\n')
      }, {
        lx: 'bash',
        code: [
          'cd /home/tomcat-7/webapps',
          'mkdir ' + fbd + 'api',
          'cp -r smqapi/* ' + fbd + 'api',
          `sed -i 's/http:\\/\\/smq.frp.cdjtwx.com:81\\//${wwdz1.value.replace(/\//g, '\\/')}/g' /home/tomcat-7/webapps/${fbd}api/WEB-INF/classes/system.properties`
        ].join('\n')
      }, {
        lx: 'bash',
        code: nginxC.value
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
      }, {
        lx: 'sql',
        code: [
          getPayPortSql(jgid, zffs, yxq),
          getPayParamSql(jgid, zffs, 'ALLPAY_URL', `https://wx.cdjtwx.com/${fbd}wx/`),
          // getPayParamSql(jgid, '1', 'NOTIFY_URL', `https://wx.cdjtwx.com/${fbd}wx/`),
          getPayParamSql(jgid, zffs, 'APPID', data.APPID || ''),
          getPayParamSql(jgid, zffs, 'SECRETKEY', data.Appsecret || ''),
          getSql(jgid, zffs, data),
          'commit;'
        ].join('\n')
      }, {
        lx: 'bash',
        code: [
          `公众号URL：https://wx.cdjtwx.com/${fbd}wx/jggzh/index.html?oid=#{jgid}`,
          `公众号支付页面URL：https://wx.cdjtwx.com/${fbd}wx/app/mobile/pay.html?jgid=#{jgid}&id=#{id}&zffs=#{zffs}`,
          `公众号支付接口URL：https://wx.cdjtwx.com/${fbd}api/rest/h5payall?jgid=#{14}&no=#{zfno}`,
        ].join('\n')
      }, lx.value == 1 ? {
        lx: 'bash',
        code: [
          `sed -i 's/172.16.10.3/127.0.0.1/g' /home/frp/frpc.ini`,
          `sed -i 's/smq/${fbd}/g' /home/frp/frpc.ini`
        ].join('\n')
      } : ''
    ].filter(it => it) as Array<PublishCode>
  }), zfcsV = computed(() => zfcs[formData.value.zffs])
  return {
    lx,
    data,
    code,
    formData,
    zfcsV
  }
}