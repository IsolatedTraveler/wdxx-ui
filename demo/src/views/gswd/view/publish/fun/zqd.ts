interface GetQdml {
  [k: string]: Function
}
const getQdml: GetQdml = {
  tomcat: function (fileName: string) {
    return [
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
    }
  ]
}
export function zqd(lx: string, fileName: string) {
  return [
    {
      lx: 'bash',
      code: [
        '# 自启动',
        'cd /etc/systemd/system',
        `vi ${lx}.service`,
        `# 拷贝以下代码`,
      ].join('\n')
    }, {
      lx: 'bash',
      code: [
        '[Unit]',
        `Description=${lx} service`,
        'After=network.target',
        '[Service]',
        'Type=forking',
        getQdml[lx]?.(fileName) || '',
        'PrivateTmp=true',
        'Restart=on-failure[3]',
        'RestartSec=10',
        'TimeoutStartSec=60s',
        'TimeoutStopSec=60s',
        '[Install]',
        'WantedBy=multi-user.target'
      ].join('\n')
    }, {
      lx: 'bash',
      code: [
        `chmod 644 /etc/systemd/system/${lx}.service`,
        `systemctl enable ${lx}.service`
      ].join('\n')
    }, ...dscq(lx)
  ]
}