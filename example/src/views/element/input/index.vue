<template>
  <div class="element-input">
    <z-input v-model="a"></z-input>
  </div>
</template>
<script>
export default {
  name: 'element-input',
  data() {
    return {
      a:1
    }
  },
  methods: {
  }
}
</script>
<style lang="scss">
.element-input {}
</style>
