import { ref, computed } from "vue";
import { PublishCode } from "./type";
export default function useGzh() {
  const lx = ref<number>(1), fbd = ref<string>('xjh'), data = [
    { id: 0, mc: '自有ip' },
    { id: 1, mc: 'frp' }
  ], wwdz = ref<string>(''), wwdz1 = computed(() => {
    var url = wwdz.value
    if (lx.value == 1) {
      url = `http://${fbd.value}.frp.cdjtwx.com:81/`
    }
    return url
  }), nginxC = computed(() => {
    return [
      '# 拷贝以下内容到nginx',
      `    location /${fbd.value}api {`,
      `      proxy_pass http://127.0.0.1:8080/${fbd.value}api/;`,
      `    }`,
      `    location /${fbd.value}ww {`,
      `      proxy_pass ${wwdz1.value};`,
      `    }`,
      `    location /${fbd.value}api/rest/queryDataBySql {`,
      `      proxy_pass ${wwdz1.value}jtphis/rest/queryDataBySql/;`,
      `    }`,
      `    location /${fbd.value}api/rest/commitData {`,
      `      proxy_pass ${wwdz1.value}jtphis/rest/commitData/;`,
      `    }`
    ].join('\n')
  }), code = computed(() => {
    return [
      {
        lx: 'bash',
        code: [
          'cd /usr/share/nginx/wx',
          'mkdir ' + fbd.value + 'wx',
          'cp -r smqwx/* ' + fbd.value + 'wx',
          `sed -i 's/smq/${fbd.value}/g' /usr/share/nginx/wx/${fbd.value}wx/app/mobile/static/lib/config.js`,
          `sed -i 's/smq/${fbd.value}/g' /usr/share/nginx/wx/${fbd.value}wx/jggzh/static/lib/config.js`,
          `sed -i 's/smq/${fbd.value}/g' /usr/share/nginx/wx/${fbd.value}wx/pay/static/lib/config.js`
        ].join('\n')
      }, {
        lx: 'bash',
        code: [
          'cd /home/tomcat-7/webapps',
          'mkdir ' + fbd.value + 'api',
          'cp -r smqapi/* ' + fbd.value + 'api',
          `sed -i 's/http:\\/\\/smq.frp.cdjtwx.com:81\\//${wwdz1.value.replace(/\//g, '\\/')}/g' /home/tomcat-7/webapps/${fbd.value}api/WEB-INF/classes/system.properties`
        ].join('\n')
      }, {
        lx: 'bash',
        code: nginxC.value
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
        lx: 'bash',
        code: [
          `公众号URL：https://wx.cdjtwx.com/${fbd.value}wx/jggzh/index.html?oid=#{jgid}`,
          `公众号支付页面URL：https://wx.cdjtwx.com/${fbd.value}wx/app/mobile/pay.html?jgid=#{jgid}&id=#{id}&zffs=#{zffs}`,
          `公众号支付接口URL：https://wx.cdjtwx.com/${fbd.value}api/rest/h5payall?jgid=#{14}&no=#{zfno}`,
        ].join('\n')
      }, lx.value == 1 ? {
        lx: 'bash',
        code: [
          `sed -i 's/172.16.10.3/127.0.0.1/g' /home/frp/frpc.ini`,
          `sed -i 's/smq/${fbd.value}/g' /home/frp/frpc.ini`
        ].join('\n')
      } : ''
    ].filter(it => it) as Array<PublishCode>
  })
  return {
    lx,
    data,
    code,
    fbd,
    wwdz
  }
}