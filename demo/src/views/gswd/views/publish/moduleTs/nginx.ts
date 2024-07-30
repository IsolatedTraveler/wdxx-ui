
import { computed, ref } from 'vue';
import { clearRz, vim } from '../code/linux/vim';
import { zqd } from '../fun';
import { getMarkDownCode } from '@/components/base';
import { fbdqObj, InstitutionCode } from '../data';
const bzRoot = 'jtmis'
interface GetLocationParam {
  lx?: 'http' | 'magic'
  root?: string
}
function getLocation(name: string = '', dz: string, { root = '', lx = 'http' } = {} as GetLocationParam) {
  if (dz) {
    if (name) {
      name = `${name}/`
    }
    if (root) {
      root = `${root}/`
    }
    return [
      `    location /${root}${name} {`,
      `      proxy_pass  ${dz};`,
      lx === 'magic' ? magic() : http(),
      '    }'
    ].join('\n')
  }
  return ''
}
function magic() {
  return [
    '      proxy_http_version 1.1;',
    '      proxy_set_header Upgrade $http_upgrade;',
    '      proxy_set_header Connection "upgrade";',
    '      proxy_set_header Host $host;'].join('\n')
}
function http() {
  return [
    '      proxy_set_header Host $host;',
    '      proxy_set_header X-Real-IP $remote_addr;',
    '      proxy_set_header REMOTE-HOST $remote_addr;',
    '      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;',
    '      proxy_redirect default;'].join('\n')
}
export function userNginx() {
  const formData = ref<{
    [k: string]: string
    fbd: InstitutionCode
  }>({
    jbjk: 'http://127.0.0.1:7890',
    fbd: 'cq',
    magic: 'http://127.0.0.1:7901/mgapi/',
    urpt: 'http://127.0.0.1:7801/ureport/',
    minioWeb: 'http://127.0.0.1:9001/browser/',
    minio: 'http://127.0.0.1:9000/',
    root: 'jtphis',
    wxzf: '',
    protocol: 'http:'
  }), code = computed(() => {
    const { jbjk, fbd, magic, urpt, minioWeb, minio, root, wxzf, protocol } = formData.value, zdqd = zqd('nginx', '').map(it => it.code)
      , {
        server_url = []
        , login = '../app/webs/login_vl/login.html'
      } = fbdqObj[fbd] || {}
      , servers = server_url.map(it => protocol + '//' + it + '/')
    return [
      getMarkDownCode([
        'yum -y install gcc zlib zlib-devel pcre-devel openssl openssl-devel pcre-devel',
        'cd /usr/local/',
        'mkdir nginx/',
        'cd nginx'].join('\n')),
      getMarkDownCode([
        '# 拷贝nginx-1.22.1.tar.gz到当前目录',
        'tar -xvf nginx-1.22.1.tar.gz',
        'cd nginx-1.22.1',
        './configure --with-http_stub_status_module --with-http_ssl_module',
        'make',
        'make install',
        'cd /usr/local/nginx',
        'rm -rf ./nginx-1.22.1.tar.gz',
        'rm -rf ./nginx-1.22.1',
        '# 防火墙打开特定端口',
        'firewall-cmd --permanent --add-port=8080/tcp',
        'firewall-cmd --reload',
        'firewall-cmd --permanent --query-port=8080/tcp',
        vim([
          "#user  nobody",
          "worker_processes  2;",
          "#error_log  logs/error.log;",
          "#error_log  logs/error.log  notice;",
          "#error_log  logs/error.log  info;",
          "#pid        logs/nginx.pid;",
          "events {",
          "    worker_connections  1024;",
          "}",
          "http {",
          "  include       mime.types;",
          "  default_type  application/octet-stream;",
          "  #log_format  main  '$remote_addr - $remote_user [$time_local] \"$request\" '",
          "  #                  '$status $body_bytes_sent \"$http_referer\" '",
          "  #                  '\"$http_user_agent\" \"$http_x_forwarded_for\"';",
          "  #access_log  logs/access.log  main;",
          "  sendfile        on;",
          "  #tcp_nopush     on;",
          "  #keepalive_timeout  0;",
          "  keepalive_timeout  65;",
          "  #gzip  on;",
          "  map $http_upgrade $connection_upgrade {",
          "     default upgrade;",
          "     \"\" close;",
          "  }",
          "  server {",
          "    listen       8080;",
          "    server_name  127.0.0.1;",
          "    location / {",
          "      root  /home/jt-mis/static-resource/;",
          `      if ($http_origin ~* (http://127.0.0.1:8081|http://127.0.0.1:8080)) {`,
          "        add_header 'Access-Control-Allow-Origin' \"$http_origin\" always;",
          "      }",
          "    }",
          getLocation('', `${jbjk.replace(/\/$/g, '')}/${root.replace(/^\//g, '').replace(/\/$/g, '')}/`, { root: bzRoot }),
          getLocation('wxzf', wxzf ? wxzf : fbd ? `http://wx.cdjtwx.com/${fbd}api/rest/` : '', { root: bzRoot }),
          getLocation('magic', magic, { lx: 'magic', root: bzRoot }),
          getLocation('ureport', urpt, { root: '' }),
          getLocation('minio-web', minioWeb, { root: bzRoot }),
          getLocation('minio', minio, { root: bzRoot }),
          "    error_page   500 502 503 504  /50x.html;",
          "    location = /50x.html {",
          "      root   html;",
          "    }",
          "  }",
          "}"
        ].filter(it => it).join('\n'), '/usr/local/nginx/conf/nginx.conf'),
        `# 日志清理`,
        clearRz([
          'cd /usr/local/nginx/logs/'
          , 'true > access.log'
          , 'true > error.log'
        ].join('\n')),
        zdqd[0],
        zdqd[1]
      ].join('\n'), 'bash'),
      ' 定时重启',
      getMarkDownCode([
        zdqd[2]
      ].join('\n'), 'bash'),
      getMarkDownCode([zdqd[3], zdqd[4]].join('\n'), 'bash'),
      '服务信息',
      getMarkDownCode([
        `1. 安装路径：/usr/local/nginx`,
        `2. 配置文件路径：/usr/local/nginx/conf/nginx.conf`,
        `3. 启动命令：systemctl restart nginx.service`,
        `4. 查看是否启动成功：systemctl status nginx.service`
        , `5. 基础后台：${servers.join(';')}`
        , `6. 旧版代码登录地址：${servers.map(it => new URL(login, it).href).join(';')}`
        , `7. magic基础后台：${servers.map(it => new URL('magic', it).href).join(';')}`
      ].join('\n'))
    ]
  })
  return { formData, code }
}