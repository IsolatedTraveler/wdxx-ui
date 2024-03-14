<template>
  <div>
    tomcat安装
    <z-code v-for="(it, i) in code" :key="i" :data="it.code" :type="it.lx"></z-code>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue';
import { zqd } from '../fun';

const fileName = ref('tomcat8')
defineOptions({
  name: 'publish-tomcat'
})
const code = computed(() => {
  return [
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
        `mv apache-tomcat-8.5.64 ${fileName.value}`,
        `rm -rf ./${fileName.value}/webapps/*`
      ].join('\n')
    }, {
      lx: 'bash',
      code: [
        `# 拷贝发版代码至/home/${fileName.value}/webapps目录`,
        `./${fileName.value}/bin/startup.sh `
      ].join('\n')
    },
    ...zqd('tomcat', fileName.value)
  ]
}) 
</script>
<style lang="scss">
// .java {}</style>
