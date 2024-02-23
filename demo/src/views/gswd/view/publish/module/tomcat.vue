<template>
  <div>
    tomcat安装
    <z-code v-for="(it, i) in code" :key="i" :data="it.code" :type="it.lx"></z-code>
  </div>
</template>
<script lang="ts" setup>
const code = [
  {
    lx: 'bash',
    code: [
      'cd /home'
    ].join('\n')
  }, {
    lx: 'bash',
    code: [
      '# 拷贝apache-tomcat-8.5.64.tar.gz到当前目录',
      'tar -xvf apache-tomcat-8.5.64.tar.gz',
      'mv apache-tomcat-8.5.64 jthis_tomcat8_1',
      'rm -rf ./jthis_tomcat8_1/webapps/*'
    ].join('\n')
  }, {
    lx: 'bash',
    code: [
      '# 拷贝发版代码至/home/jthis_tomcat8_1/webapps目录',
      './jthis_tomcat8_1/bin/startup.sh '
    ].join('\n')
  }
]
</script>
<style lang="scss">
// .java {}
</style>
