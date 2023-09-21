<template>
  <z-flex class="component-tree">
    <z-tree :data="data" :cols="cols">
      <template #xm="{ data }">
        {{ data.xm }}
      </template>
    </z-tree>
    <z-tree :data="data" :alias="alias"></z-tree>
  </z-flex>
</template>
<script lang="ts">
export default {
  name: 'component-tree',
  data() {
    return {
      data: [
        {
          mc: '测试', id: 'cs', xm: '姓名', xb: '性别', child: [
            { mc: '测试1', id: 'cs1', xm: '姓名1', xb: '性别1' }
            , {
              mc: '测试2', id: 'cs2', xm: '姓名2', xb: '性别2', child: [
                { mc: '测试21', id: 'cs21', xm: '姓名21', xb: '性别21' }
              ]
            }
          ]
        }
      ],
      cols: [
        { id: 'xm', type: 'temp' },
        { id: 'mc', type: '' },
        { id: 'xb', type: 'z-input' }
      ],
      alias: {}
    }
  },
  methods: {
  }
}
</script>
<style lang="scss">
.component-tree {
  width: 100%;
}
</style>
