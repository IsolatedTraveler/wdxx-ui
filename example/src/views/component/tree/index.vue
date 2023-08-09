<template>
  <div class="component-tree">
    <z-tree alias data></z-tree>
  </div>
</template>
<script>
export default {
  name: 'component-tree',
  data() {
    return {
      data: []
    }
  },
  methods: {
  }
}
</script>
<style lang="scss">
.component-tree {}
</style>
