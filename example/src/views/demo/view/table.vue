<template>
  <div class="demo-table">
    <z-table>
      <z-th label="0" name="0" min-width="20em" fixed="left"></z-th>
      <z-th label="1" name="1" min-width="20em"></z-th>
      <z-th label="2" name="2" min-width="20em"></z-th>
      <z-th label="3.3">
        <z-th label="3.3">
          <z-th label="3.3.3" name="3" min-width="20em"></z-th>
          <z-th label="3.3.4" name="4" min-width="20em"></z-th>
          <z-th label="3.3.5" name="5" min-width="20em" v-if="show"></z-th>
          <z-th label="3.3.6" name="6" min-width="20em"></z-th>
        </z-th>
        <z-th label="3.7" name="7" min-width="20em">
        </z-th>
      </z-th>
      <z-th label="8" name="8" fixed="right" min-width="20em"></z-th>
    </z-table>
    <!-- <z-table page></z-table> -->
  </div>
</template>
<script lang="ts">
export default {
  label: 'demo-table',
  data() {
    return {
      show: false
    }
  },
  mounted() {
    // setTimeout(() => {
    //   this.show = true
    // }, 3000)
    // setTimeout(() => {
    //   // this.show = false
    // }, 12000)
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
