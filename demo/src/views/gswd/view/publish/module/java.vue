<template>
  <div>
    <pre v-for="(it, i) in code" :key="i" v-code>
      <code :class="it.lx">{{ it.code }}</code>
    </pre>
  </div>
</template>
<script>

export default {
  name: 'java',
  data() {
    return {
      code: [
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
    }
  },
  methods: {
  }
}
</script>
<style lang="scss">
// .java {}
</style>
