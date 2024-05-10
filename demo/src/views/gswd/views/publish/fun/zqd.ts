import { vim } from "../code/linux/vim"

interface GetQdml {
  [k: string]: Function
}
const getQdml: GetQdml = {
  tomcat: function (fileName: string) {
    return [
      `Environment="JAVA_HOME=/usr/lib/jvm/jdk1.8.0_333"`,
      'Environment="JRE_HOME=/usr/lib/jvm/jdk1.8.0_333/jre"',
      `ExecStart=/home/${fileName}/bin/startup.sh`,
      `ExecStop=/home/${fileName}/bin/shutdown.sh`,
    ].join('\n')
  },
  nginx: function () {
    return `ExecStart=/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf
ExecReload=/usr/local/nginx/sbin/nginx -s reload
ExecStop=/usr/local/nginx/sbin/nginx -s quit`
  }
}
function dscq(lx: string) {
  return [
    {
      lx: 'bash',
      code: [
        'crontab -e',
        '# 拷贝以下代码'
      ].join('\n')
    }, {
      lx: 'bash',
      code: [
        `0 3 * * * systemctl restart ${lx}.service`
      ].join('\n')
    }, {
      lx: 'bash',
      code: [
        `0 3 * * * /etc/systemd/system/clear.log.sh`
      ].join('\n')
    }
  ]
}
export function zqd(lx: string, fileName: string, bm: string = lx) {
  const zqdml = vim([
    '[Unit]',
    `Description=${bm} service`,
    'After=network.target',
    '[Service]',
    'Type=forking',
    getQdml[lx]?.(fileName) || '',
    'PrivateTmp=true',
    'Restart=on-failure',
    'RestartSec=10',
    'StartLimitIntervalSec=600',
    'StartLimitBurst=5',
    'TimeoutStartSec=60s',
    'TimeoutStopSec=60s',
    '[Install]',
    'WantedBy=multi-user.target'
  ].join('\n'), `/etc/systemd/system/${bm}.service`)
  return [{
    lx: 'bash',
    code: [
      '# 自启动',
      zqdml,
      `chmod 644 /etc/systemd/system/${bm}.service`,
      `systemctl enable ${bm}.service`,
      `systemctl stop ${bm}.service`,
      `systemctl start ${bm}.service`,
      `systemctl status ${bm}.service`
    ].join('\n')
  }, {
    lx: 'bash', code: [
      '# 测试',
      `systemctl restart ${bm}.service`,
      `systemctl status ${bm}.service`
    ].join('\n')
  }, ...dscq(bm)
  ]
}