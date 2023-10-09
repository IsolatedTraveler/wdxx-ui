<template>
  <z-flex auto="1" col class="sjcl-excel-to-data-base">
    <z-btn @click.stop="excelImport">excel导入</z-btn>
    <z-flex auto="1" class="z-scroll">
      <!-- <z-table></z-table> -->
      <table>
        <thead>
          <tr>
            <th></th>
            <th v-for="(it, i) in excelKeys" :key="it"
              :class="{ 'se-fixed': i < 3 || i > 10, 'se-fixed-right': i > 10, 'se-nomal': !(i < 3 || i > 10) }">
              {{ it }}</th>
            <th class="se-fixed"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="it in excelData" :key="it.sfzh">
            <td></td>
            <td v-for="(key, i) in excelKeys" :key="key"
              :class="{ 'se-fixed': i < 3 || i > 10, 'se-fixed-right': i > 10, 'se-nomal': !(i < 3 || i > 10) }">
              {{ it[key] || '' }}
            </td>
            <td class="se-fixed"></td>
          </tr>
          <tr>
            <td v-for="(key, i) in excelKeys" :key="key"
              :class="{ 'se-fixed': i < 3 || i > 10, 'se-fixed-right': i > 10, 'se-nomal': !(i < 3 || i > 10) }">
            </td>
            <td class="se-fixed"></td>
          </tr>
        </tbody>
      </table>
    </z-flex>
  </z-flex>
</template>
<script lang="ts" setup>
import { seUse } from './use';
import { seEmits, seProps } from './prop'
defineOptions({
  name: 'sjcl-excel-to-data-base'
})
const prop = defineProps(seProps)
const emit = defineEmits(seEmits)
const { _ref, excelImport, excelKeys, excelData } = seUse(prop, emit)
defineExpose({
  _ref
})
</script>
<style lang="scss">
.sjcl-excel-to-data-base {
  >.file {
    display: none;
  }

  .z-scroll {
    overflow: scroll;

    // table {

    //   thead {
    //     .se-fixed {
    //       z-index: 3;
    //     }
    //   }

    //   .se-fixed {
    //     &+.se-nomal {
    //       border-left: none;
    //     }
    //   }

    //   .se-fixed {
    //     position: sticky;
    //     background-color: white;

    //     &:has(+.se-nomal) {
    //       border-right: 5px solid red;
    //     }
    //   }

    //   // 非通用
    //   .se-fixed {

    //     &:nth-child(1) {
    //       left: 0;
    //     }

    //     &:nth-child(2) {
    //       left: 273.47px;
    //     }

    //     &:nth-child(3) {
    //       left: 315.5px;
    //     }

    //     &:nth-child(12) {
    //       width: 500px;
    //       right: 89.82px;
    //     }

    //     &:nth-child(13) {
    //       right: 4.67px;
    //     }

    //     &:nth-child(14) {
    //       right: 0;
    //     }
    //   }

    // }
  }
}
</style>
