<template>
  <div class="git-commit">
    <z-code v-for="(it, i) in code" :key="i" :data="it.code" :type="it.lx"></z-code>
  </div>
</template>
<script lang="ts" setup>
import { useCommit } from './use'
defineOptions({
  name: 'git-commit'
})
const { code } = useCommit()
</script>
<style lang="scss">
.git-commit {
  flex-basis: 0;
  flex-grow: 1;
}
</style>
