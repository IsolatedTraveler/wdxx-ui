<template>
  <div id="app">
    <!-- <wd-mask v-show="load" class="maskzzj" shape="loading" /> -->
    <router-view class="router" />
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      date: new Date(),
      jgmc: ''
    }
  },
  computed: {
    load() {
      return false
    }
  }
}
</script>
<style lang="scss">
#app {
  width: 100%;
  height: 100%;

  >.router {
    width: 100%;
    height: 100%;
  }
}
</style>
