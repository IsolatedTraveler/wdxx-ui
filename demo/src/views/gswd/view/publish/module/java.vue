<template>
  <div>
    java安装
    <z-code v-for="(it, i) in code" :key="i" :data="it.code" :type="it.lx"></z-code>
  </div>
</template>
<script lang="ts" setup>
import { vim } from '../code/linux/vim';

const code = [
  {
    lx: 'bash',
    code: [
      'cd /usr/local/src/'
    ].join('\n')
  }, {
    lx: 'bash',
    code: [
      '# 拷贝jdk-8u333-linux-x64.tar.gz到当前目录',
      'tar -zxvf jdk-8u333-linux-x64.tar.gz',
      'mv jdk1.8.0_333 /usr/lib/jvm/',
      '# 拷贝以下代码到当前打开文件末尾',
      vim([
        'export JAVA_HOME=/usr/lib/jvm/jdk1.8.0_333',
        'export JRE_HOME=$JAVA_HOME/jre',
        'export PATH=$PATH:$JAVA_HOME/bin',
        'export CLASSPATH=.:$JAVA_HOME/lib:$JRE_HOME/lib'
      ].join('\n'), '/etc/profile', true),
      'source /etc/profile',
      'java -version',
      'javac -version'
    ].join('\n')
  }
]
defineOptions({
  name: 'publish-java'
})
</script>
<style lang="scss">
// .java {}</style>
