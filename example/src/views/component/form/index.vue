<template>
  <div class="component-form">
    <login></login>
  </div>
</template>
<script lang="ts">
import Login from "./login.vue";
export default {
  name: 'component-form',
  components: { Login },
  data() {
    return {
    }
  }
}
</script>
<style lang="scss">
.component-form {
  width: 100%;
}
</style>
