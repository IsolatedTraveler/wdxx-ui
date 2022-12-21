<template>
  <div class="demo-table">
    <z-table :data="data" page row-key="8">
      <z-th label="-1" type="check"/>
      <z-th label="0" name="0" min-width="25em"></z-th>
      <z-th label="1" name="1" min-width="25em"></z-th>
      <z-th label="2" name="2" min-width="25em"></z-th>
      <z-th label="3.3">
        <z-th label="3.3">
          <z-th label="3.3.3" name="3" min-width="10em"></z-th>
          <z-th label="3.3.4" name="4" min-width="10em"></z-th>
          <z-th label="3.3.5" name="5" min-width="10em" v-if="show"></z-th>
          <z-th label="3.3.6" name="6" min-width="10em"></z-th>
        </z-th>
        <z-th label="3.7" name="7" min-width="10em">
        </z-th>
      </z-th>
      <z-th label="8" name="8" fixed="right" min-width="10em"></z-th>
      <template #page="data">
        <el-pagination background :="data" :total="325" 
          v-model:page-size="pageSize"
          v-model:current-page="currentPage"
        />
      </template>
    </z-table>
    <!-- <z-table page></z-table> -->
  </div>
</template>
<script lang="ts">
export default {
  label: 'demo-table',
  data() {
    return {
      show: false,
      data: [],
      pageSize: 10,
      currentPage: 3
    }
  },
  mounted() {
    const data: Array<any> = []
    for(let i = 0; i < 20; i++) {
      const obj: any = {}
      for(let j = 0; j < 9; j++) {
        obj[j] = `${i}${j}`
      }
      data.push(obj)
    }
    setTimeout(() => {
      this.data = data as Array<never>
    }, 1000)
  },
  methods: {
  }
}
</script>
<style lang="scss">
.demo-table{
  width: 100%;
  height: 100%;
}
.z-table{
  height: 50%;
}
// 公共样式
.z-grow{
  flex: auto;
  width: 100%;
}
.z-wrap{
  overflow: auto;
}
.z-pos-sticky{
  position: sticky;
  z-index: 1;
}
.z-table{
  overflow: hidden;
  thead{
    position: sticky;
    z-index: 2;
    top: 0;
    tr:first-child{
      th{
        border-top: 1px solid #dcdcdc;
      }
    }
  }
  tbody{
    tr{
      &:last-child td{
        position: sticky;
        bottom: 0;
      }
      &:nth-last-child(2) td{
        border-bottom: none;
      }
    }
  }
  tr{
    th, td{
      border-right: 1px solid #dcdcdc;
      border-bottom: 1px solid #dcdcdc;
      padding: 0;
      background-color: #fff;
      >span{
        display: inline-block;
        padding: 6px;
        line-height: 1em;
        white-space: nowrap;
      }
      &.z-pos-sticky-right::before{
        content: '';
        display: inline-block;
        position: absolute;
        height: 100%;
        top: 0;
        border-left: 1px solid #dcdcdc;
        left: -1px;
      }
    }
  }
}
</style>
