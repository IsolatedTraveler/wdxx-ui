<template>
  <div class="fzzx-gx">
    <p>window 远程机上创建共享文件</p>
    <p>本地电脑上创建共享文件对应的映射</p>
    <z-code v-for="(it, i) in code" :key="i" :data="it.code" :type="it.lx"></z-code>
  </div>
</template>
<script lang="ts" setup>
defineOptions({
  name: 'fzzx-gx'
})
const code = [
  {
    lx: 'bash',
    code: [
      'net use X: \\192.168.0.185\ydgw /user:jtkf '
    ].join('\n')
  }
]
</script>
<style lang="scss">
.fzzx-gx {
  flex-basis: 0;
  flex-grow: 1;
}
</style>
