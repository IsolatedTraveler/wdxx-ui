<template>
  <div>
    nginx安装
    <z-code v-for="(it, i) in code" :key="i" :data="it.code" :type="it.lx"></z-code>
  </div>
</template>
<script lang="ts" setup>
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
      ''
    ].join('\n')
  }, {
    lx: 'bash',
    code: [
      '/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf',
      '/usr/local/nginx/sbin/nginx -s reload # 重启'
    ].join('\n')
  }
]
</script>
<style lang="scss">
// .java {}
</style>
