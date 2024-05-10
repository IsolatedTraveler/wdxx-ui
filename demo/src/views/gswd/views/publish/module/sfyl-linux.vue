<template>
  <div class="sfyl-linux">
  </div>
</template>
<script lang="ts" setup>
defineOptions({
  name: 'sfyl-linux'
})
const code = [
  {
    lx: 'bash', cdoe: [
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
