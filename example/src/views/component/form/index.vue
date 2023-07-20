<template>
  <div class="component-form">
    <z-form :disabled="disabled">
      <z-input disabled></z-input>
      <z-input></z-input>
    </z-form>
  </div>
</template>
<script>
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
      alert(this.disabled)
    }, 10*1000);
  }
}
</script>
<style lang="scss">
.component-form{
}
</style>
