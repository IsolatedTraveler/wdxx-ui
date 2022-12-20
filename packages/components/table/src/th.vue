<template>
  <slot>
    <col ref="el" :style="style" :name="name" :data-id="id"/>
  </slot>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { thProps } from './th'
import { useTh as setup } from './use-th'
export default defineComponent({
  name: 'z-th',
  props: thProps,
  setup
})
</script>