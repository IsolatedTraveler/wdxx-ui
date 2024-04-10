<template>
  <div class="scroll">
    <z-form v-model="formData" flex="row" wrap>
      <z-form-item label="发版地区：" basis="25%">
        <z-select name="fbd" :data="fbdq"></z-select>
      </z-form-item>
      <z-form-item label="旧版接口：" basis="25%">
        <z-input name="jbjk"></z-input>
      </z-form-item>
      <z-form-item label="magic" basis="25%">
        <z-input name="magic"></z-input>
      </z-form-item>
      <z-form-item label="ureport" basis="25%">
        <z-input name="urpt"></z-input>
      </z-form-item>
      <z-form-item label="minio后台" basis="25%">
        <z-input name="minioWeb"></z-input>
      </z-form-item>
      <z-form-item label="minio接口" basis="25%">
        <z-input name="minio"></z-input>
      </z-form-item>
    </z-form>
    <z-code v-for="(it, i) in code" :key="i" :data="it.code" :type="it.lx"></z-code>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { vim } from '../code/linux/vim';
import { zqd } from '../fun';
import { fbdq } from "../data"

defineOptions({
  name: 'publish-nginx'
})
const formData = ref({
  jbjk: 'http://127.0.0.1:7890/jtphis/',
  fbd: 'smq',
  magic: 'http://127.0.0.1:7901/mgapi/',
  urpt: 'http://127.0.0.1:7801/ureport/',
  minioWeb: 'http://127.0.0.1:9001/browser/',
  minio: 'http://127.0.0.1:9000/'
})
const code = computed(() => {
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
        "  server {",
        "    listen       8080;",
        "    server_name  127.0.0.1;",
        "    location / {",
        "      root  /home/jt-mis/static-resource/;",
        "    }",
        "    location /jtphis/ {",
        `      proxy_pass  ${jbjk};`,
        "    }",
        "    location /jtphis/wxzf/{",
        `      proxy_pass  http://wx.cdjtwx.com/${fbd}api/rest/;`,
        "    }",
        "    location /jtphis/magic/{",
        `      proxy_pass ${magic};`,
        "    }",
        "    location /jtphis/urpt/{",
        `      proxy_pass ${urpt};`,
        "    }",
        "    location /jtphis/minio-web/{",
        `      proxy_pass ${minioWeb};`,
        "    }",
        "    location /jtphis/minio/{",
        `      proxy_pass ${minio};`,
        "    }",
        "    location /jtmis/{",
        "      proxy_pass http://127.0.0.1:8080/jtphis/;",
        "    }",
        "    error_page   500 502 503 504  /50x.html;",
        "    location = /50x.html {",
        "      root   html;",
        "    }",
        "  }",
        "}"
      ].join('\n'), '/usr/local/nginx/conf/nginx.conf')
    ].join('\n')
  }, ...zqd('nginx', '')
  ]
})
</script>

<style lang="scss">
.scroll {
  overflow: auto;
  height: 100%;
  flex-grow: 1;
  flex-basis: 0;
}
</style>
