<template>
  <div class="scroll">
    nginx安装
    <z-code v-for="(it, i) in code" :key="i" :data="it.code" :type="it.lx"></z-code>
  </div>
</template>

<script lang="ts" setup>
import { zqd } from '../fun';

defineOptions({
  name: 'publish-nginx'
})
const code = [
  {
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
      'vim /usr/local/nginx/conf/nginx.conf'
    ].join('\n')
  }, {
    lx: 'bash',
    code: [
      '# 拷贝以下内容替换当前打开的文件',
      "#user  nobody;",
      "worker_processes  1;",
      "#error_log  logs/error.log;",
      "#error_log  logs/error.log  notice;",
      "#error_log  logs/error.log  info;",
      "#pid        logs/nginx.pid;",
      "events {",
      "    worker_connections  1024;",
      "}",
      "http {",
      "    include       mime.types;",
      "    default_type  application/octet-stream;",
      "    #log_format  main  '$remote_addr - $remote_user [$time_local] \"$request\" '",
      "    #                  '$status $body_bytes_sent \"$http_referer\" '",
      "    #                  '\"$http_user_agent\" \"$http_x_forwarded_for\"';",
      "    #access_log  logs/access.log  main;",
      "    sendfile        on;",
      "    #tcp_nopush     on;",
      "    #keepalive_timeout  0;",
      "    keepalive_timeout  65;",
      "    #gzip  on;",
      "   ",
      "  server {",
      "    listen       8080;",
      "    server_name  127.0.0.1;",
      "    location / {",
      "      proxy_pass  http://127.0.0.1:7080/;",
      "    }",
      "    location /jtphis/wxzf/{",
      "      proxy_pass  http://wx.cdjtwx.com/smqapi/rest/;",
      "    }",
      "    location /jtphis/magic/{",
      "      proxy_pass http://172.16.10.3:8089/api/;",
      "    }",
      "    error_page   500 502 503 504  /50x.html;",
      "    location = /50x.html {",
      "      root   html;",
      "    }",
      "  }",
      "}"
    ].join('\n')
  }, {
    lx: 'bash',
    code: [
      '/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf',
      '/usr/local/nginx/sbin/nginx -s reload # 重启'
    ].join('\n')
  }, ...zqd('nginx', '')
]
</script>

<style lang="scss">
.scroll {
  overflow: auto;
  height: 100%;
  flex-grow: 1;
}
</style>
