<template>
  <div class="jdsl">
    <div class="title">{{ title }}</div>
    <div class="sm">{{ sm }}</div>
    <div class="slnr">
      <component :is="com" />
      <!-- 控制按钮 -->
      <!-- <z-code type="html" :data="1"></z-code> -->
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    sm: {
      type: String,
      default: ''
    },
    com: {
      type: Object,
      required: true
    }
  },
  async mounted() {
    const { template, script, styles } = this.com;
    console.log(template)
    console.log(script)
    console.log(styles)
  }
}
</script>
<style lang="scss">
.jdsl {
  .title {
    font-size: 1.8em;
    font-weight: bold;
  }

  .title,
  .sm {
    line-height: 2em;
  }

  .sm {
    margin-bottom: .8em;
  }

  &,
  .slnr {
    width: 100%;
    padding: 1em;
    box-sizing: border-box;
  }

  .slnr {
    border: 1px solid var(--color-border-2);
  }
}
</style>
