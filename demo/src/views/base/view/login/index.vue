<template>
  <z-flex class="base-login" flex="col" justify="around" align="around" wrap>
    <div class="top"></div>
    <z-flex class="main">
      <img src="/img/login/dl_bj.png">
      <z-flex flex="col" self="stretch" justify="center" align="center">
        <z-form class="login">
          <p>登录</p>
          <z-form-item>
            <z-input></z-input>
          </z-form-item>
          <z-form-item>
            <z-input></z-input>
          </z-form-item>
          <z-form-item>
            <z-check>记住用户</z-check>
            <z-check>记住密码</z-check>
          </z-form-item>
          <z-btn state="primary" size="lg" full>登录</z-btn>
        </z-form>
      </z-flex>
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

  .botton,
  .top {
    max-width: 92vw;
    min-width: 660px;
    width: 67em;
  }

  .main {

    img,
    .login {
      max-width: 46vw;
      min-width: 330px;
    }

    img {
      width: 38em;
    }

    .login {
      padding: 1em;
      width: 29em;
      background-color: var(--color-font-3);
    }
  }
}
</style>