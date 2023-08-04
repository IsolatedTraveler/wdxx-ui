<template>
  <div class="component-form">
    <z-form v-model="obj">
      <z-form-item label="测试">
        <z-input label="测试" size="md" name="v"></z-input>
      </z-form-item>
      <z-form name="cs">
        <z-input name="0"></z-input>
        <z-input name="1"></z-input>
        <z-input name="2"></z-input>
      </z-form>
      <z-input v-model="obj.cs1"></z-input>
    </z-form>
  </div>
</template>
<script lang="ts">
export default {
  name: 'component-form',
  data() {
    return {
      disabled: false,
      obj: { cs1: '45' }
    }
  },
  mounted() {
    setTimeout(() => {
      this.disabled = !this.disabled
    }, 10 * 1000);
  }
}
</script>
<style lang="scss">
.component-form {
  width: 100%;
}
</style>
