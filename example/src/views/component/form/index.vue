<template>
  <div class="component-form">
    <z-form :disabled="disabled">
      <z-input disabled></z-input>
      <z-input></z-input>
    </z-form>
  </div>
</template>
<script lang="ts">
export default {
  name: 'component-form',
  data(){
    return {
      disabled: false
    }
  },
  mounted(){
    setTimeout(() => {
      this.disabled = !this.disabled
    }, 10*1000);
  }
}
</script>
<style lang="scss">
.component-form{
  width: 100%;
}
</style>
