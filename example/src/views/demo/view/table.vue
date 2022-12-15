<template>
  <div class="demo-table">
    <z-table>
      <z-th label="1">
        <z-th label="1.2">
          <z-th label="1.1.1"></z-th>
          <z-th label="1.1.2"></z-th>
        </z-th>
        <z-th label="1.3">
        </z-th>
      </z-th>
      <z-th label="2"></z-th>
    </z-table>
    <z-table page></z-table>
  </div>
</template>
<script lang="ts">
export default {
  label: 'demo-table',
  data() {
    return {}
  },
  methods: {
  }
}
</script>
<style lang="scss">
.demo-table{
  width: 100%;
}
</style>
