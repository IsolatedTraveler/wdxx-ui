<template>
  <z-flex class="base-login" col justify="around" align="around" wrap>
    <div class="top"></div>
    <z-flex justify="around">
      <img src="/img/login/dl_bj.png">
      <div class="login"></div>
    </z-flex>
    <div class="bottom"></div>
  </z-flex>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'base-login'
})
</script>
<style lang="scss">
.base-login {
  background: #327add;
  overflow: auto;

  .login,
  img {
    height: 21em;
    min-height: 252px;
  }

  .login {
    min-width: 360px;
    width: 3.5rem;
  }
}
</style>