<template>
  <div style="text-align: center;font-size: .56rem;line-height: 2;">load开发中</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { router } from '@/router';

export default defineComponent({
  name: 'base-menu',
  created() {
    setTimeout(() => {
      console.log(123)
      router.push({ path: 'baseMenu/qtxtHome' })
    }, 3000);
  }
})
</script>