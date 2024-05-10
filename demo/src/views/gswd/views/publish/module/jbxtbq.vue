<template>
  <div class="jbxtbq">
    <z-code v-for="(it, i) in code" :key="i" :data="it.code" :type="it.lx"></z-code>
  </div>
</template>
<script lang="ts" setup>
import { linux } from "../code";
defineOptions({
  name: 'jbxtbq'
})
const fileSite = '/home/tomcat8/webapps/jtphis/WEB-INF/classes/system.properties'
  , jbbSite = '/home/tomcat8/webapps/'
  , code = [{
    lx: 'bash',
    code: [
      '# 用于搬迁旧版本布置',
      'cd /home',
      'mkdir jt-mis',
      'cd jt-mis',
      'mkdir static-resource',
      'cd static-resource',
      linux.copyDirectory(jbbSite + 'app', 'app'),
      linux.copyDirectory(jbbSite + 'getapp', 'getapp'),
      linux.fileContentRepalce(fileSite, 'rootPath=D:\\jtwx\\Tomcat8\\webapps\\getapp\\download\\updatedir', 'rootPath=/home/tomcat8/webapps/getapp/download/updatedir'),
      linux.fileContentRepalce(fileSite, 'rootPath=/home/tomcat8/webapps/getapp/download/updatedir', 'rootPath=/home/jt-mis/static-resource/getapp/download/updatedir')
    ].join('\n')
  }]
</script>
<style lang="scss">
.jbxtbq {
  flex-basis: 0;
  flex-grow: 1;
}
</style>
