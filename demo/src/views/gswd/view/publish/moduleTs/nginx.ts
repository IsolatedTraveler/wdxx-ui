
import { computed, ref } from 'vue';
import { clearRz, vim } from '../code/linux/vim';
import { zqd } from '../fun';
function getLocation(name: string, dz: string) {
  if (dz) {
    return [
      `    location /jtphis/${name}/ {`,
      `      proxy_pass  ${dz};`,
      '    }'
    ].join('\n')
  }
  return ''
}
export function userNginx() {
  const formData = ref({
    jbjk: 'http://127.0.0.1:7890/jtphis/',
    fbd: '',
    magic: 'http://127.0.0.1:7901/mgapi/',
    urpt: 'http://127.0.0.1:7801/ureport/',
    minioWeb: 'http://127.0.0.1:9001/browser/',
    minio: 'http://127.0.0.1:9000/'
  }), code = computed(() => {
    const { jbjk, fbd, magic, urpt, minioWeb, minio } = formData.value
    return [{
      lx: 'bash',
      code: [
        'yum -y install gcc zlib zlib-devel pcre-devel openssl openssl-devel pcre-devel',
        'cd /usr/local/',
        'mkdir nginx/',
        'cd nginx'
      ].join('\n')
    }, {
      lx: 'bash',
      code: [
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
        'firewall-cmd --permanent --query-port=8080/tcp'
      ].join('\n')
    }, {
      lx: 'bash',
      code: vim([
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
        "  server {",
        "    listen       8080;",
        "    server_name  127.0.0.1;",
        "    location / {",
        "      root  /home/jt-mis/static-resource/;",
        "    }",
        "    location /jtphis/ {",
        `      proxy_pass  ${jbjk};`,
        "    }",
        getLocation('wxzf', fbd ? `http://wx.cdjtwx.com/${fbd}api/rest/` : ''),
        getLocation('magic', magic),
        getLocation('urpt', urpt),
        getLocation('minio-web', minioWeb),
        getLocation('minio', minio),
        "    location /jtmis/{",
        "      proxy_pass http://127.0.0.1:8080/jtphis/;",
        "    }",
        "    error_page   500 502 503 504  /50x.html;",
        "    location = /50x.html {",
        "      root   html;",
        "    }",
        "  }",
        "}"
      ].filter(it => it).join('\n'), '/usr/local/nginx/conf/nginx.conf')
    }, {
      lx: 'bash',
      code: [
        `# 日志清理`,
        clearRz([
          'cd /usr/local/nginx/logs/'
          , 'true > access.log'
          , 'true > error.log'
        ].join('\n'))
      ].join('\n')
    }, ...zqd('nginx', '')
    ]
  })
  return { formData, code }
}