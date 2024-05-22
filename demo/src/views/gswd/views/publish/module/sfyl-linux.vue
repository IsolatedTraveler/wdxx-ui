<template>
  <div class="sfyl-linux">
    <z-code v-for="(it, i) in code" :key="i" :data="it.code" :type="it.lx"></z-code>
  </div>
</template>
<script lang="ts" setup>
defineOptions({
  name: 'sfyl-linux'
})
const code = [
  {
    lx: 'bash', code: [
      '# 防火墙打开特定端口',
      'firewall-cmd --permanent --add-port=8080/tcp',
      'firewall-cmd --reload'
    ].join('\n')
  }
]
</script>
<style lang="scss">
.sfyl-linux {
  flex-basis: 0;
  flex-grow: 1;
}
</style>
