<template>
  <div>
    <z-code v-for="(it, i) in code" :key="i" :data="it.code" :type="it.lx"></z-code>
  </div>
</template>
<script lang="ts" setup>
const code = [
  {
    lx: 'bash',
    code: [
      'cd /usr/local/src/',
      'tar -zxvf jdk-8u333-linux-x64.tar.gz',
      'mv jdk1.8.0_333 /usr/lib/jvm/',
      'cd /etc/',
      'vi /etc/profile'
    ].join('\n')
  }, {
    lx: 'bash',
    code: [
      '#拷贝以下代码到当前打开文件末尾',
      'export JAVA_HOME=/usr/lib/jvm/jdk1.8.0_333',
      'export JRE_HOME=$JAVA_HOME/jre',
      'export PATH=$PATH:$JAVA_HOME/bin',
      'export CLASSPATH=.:$JAVA_HOME/lib:$JRE_HOME/lib'
    ].join('\n')
  }, {
    lx: 'bash',
    code: [
      'source /etc/profile',
      'java -version',
      'javac -version'
    ].join('\n')
  }
]
</script>
<style lang="scss">
// .java {}
</style>
