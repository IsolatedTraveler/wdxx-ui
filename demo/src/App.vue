<template>
  <div id="app" class="wd_flex">
    <!-- <wd-mask v-show="load" class="maskzzj" shape="loading" /> -->
    <router-view class="wd_flex wd_abs" />
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
body {
  user-select: none;
}

#app {
  width: 100%;
  height: 100%;

  >.maskzzj {
    z-index: 999999;
  }

  >.wd_auto {
    width: 100%;
    position: relative;
    background: #f2f2f2;
    margin-bottom: 72px;

    &.other {
      margin: 0;
    }
  }

  >.header {
    height: 80px;
    width: 100%;
    background-color: #4887e6;
    line-height: 80px;
    font-size: 36px;
    font-weight: bolder;
    color: #fff;
    background-image: url(@img/zjlx_header.png);
    background-repeat: no-repeat;
    background-position: 20px center;

    &.other {
      color: #4887e6;
      background-color: unset;
      background-image: url(@img/logo_text.png);
    }
  }

  >.bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 14px;
    right: 0;
    flex-flow: column;
    align-items: flex-start;
    line-height: 28px;
    padding: 8px 12px;
    z-index: 99;

    &.other {
      flex-flow: row;
      justify-content: space-between;
      height: 28px;
      color: #fff;
      bottom: 0;

      span {
        color: #fff;
      }
    }

    span {
      color: #4887e6;
      font-size: 16px;
    }
  }
}

html {
  .wd_msg.wd_pop.wd_flex>div {
    max-width: 600px;
    font-size: 30px;
  }
}
</style>
