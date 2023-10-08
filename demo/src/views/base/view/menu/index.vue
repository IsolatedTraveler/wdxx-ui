<template>
  <z-flex class="base-menu" col>
    <div class="xtxx"></div>
    <z-flex auto="1" class="xtxq">
      <z-flex span="10em" wrap class="left">
        <z-tree @checked="changePage"></z-tree>
      </z-flex>
      <z-flex col class="content" auto="1">
        <div class="title"></div>
        <router-view v-slot="{ Component, route }" v-if="lx === 'route'">
          <keep-alive :include="tabUrl">
            <component :is="Component" :key="route.name" class="router" />
          </keep-alive>
        </router-view>
        <iframe :src="url" frameborder="0" v-else-if="lx === 'iframe'"></iframe>
        <z-flex auto="1" class="router" v-else>
          <input type="file" @change="change">
        </z-flex>
      </z-flex>
    </z-flex>
  </z-flex>
</template>
<script lang="ts">
import { hisPost } from '@/api';
import { defineComponent } from 'vue';
import { ZBtn } from 'z-uis';
const xlsx = require("xlsx")
  , reg = /(非法身份证号!|已经在伊克布拉格村卫生室建档！)/
let errData = [], cfData
  , judge = false, len = 0
export default defineComponent({
  name: 'base-menu',
  data() {
    return {
      tabUrl: [],
      lx: '',
      url: ''
    };
  },
  methods: {
    changePage() {
    },
    change(e) {
      const reader = new FileReader()
      reader.readAsBinaryString(e.target.files[0])
      reader.onload = this.getFlieData
    },
    getFlieData(ev) {
      const excel = xlsx.read(ev.target.result, { type: "binary", cellDates: true }),
        data = xlsx.utils.sheet_to_json(excel.Sheets[excel.SheetNames[0]])
      this.dealData(data).finally(() => {
        cfData = errData.filter(({ bz }) => reg.test(bz))
        console.log(cfData)
      }).finally(this.dealErr)
    },
    async dealData(data) {
      const len = data.length
      for (let i = 0; i < len;) {
        const arr = []
        for (let j = 0; j < 10 && i < len; j++) {
          const v = data[i++]
          v && arr.push(this.save(v))
        }
        await Promise.all(arr)
      }
    },
    dealErr() {
      if (judge && errData.length !== len) {
        console.log('dealErr')
        const data = JSON.parse(JSON.stringify(errData))
        len = errData.length
        judge = false
        errData = []
        this.dealData(data.filter(({ bz }) => !reg.test(bz))).finally(this.dealErr)
      } else {
        console.log(JSON.stringify([].concat(cfData, errData)))
      }
    },
    save(data) {
      try {
        data = Object.assign({ fs: '1', datasource_sjly: '03', xgjgid: '后台建档', gljgid: '343', bbh: '2021', zzbh: '-', xzzdm: '150626102001', czlx: '1-户籍', zy: '5-生产、运输设备操作人员及有关人员', hgda: '1', gfda: '1', wgdm: '150626102001', cjjgid: '343', xx: '5-不详', rh: '3-不详' }, data)
        this.sync(data)
        return hisPost('/rest/commitData/020302/1', data).catch(res => {
          data.bz = res.msg || res.message
          console.log(data.bz)
          if (!judge && data.bz === '输入【】系统已经存在！请检查后重新输入') {
            judge = true
          }
          errData.push(data)
        })
      } catch (e: any) {
        data.bz = e.message
        errData.push(data)
        console.log(e.message)
        return Promise.resolve()
      }
    },
    sync(data) {
      data.xb = data.xb == '男' ? '1-男' : '2-女'
      data.hyzk = data.hyzk == '已婚' ? '2-已婚' : data.hyzk == '未婚' ? '1-未婚' : data.hyzk == '离异' ? '4-离异' : '-'
      data.hjdzdm = data.xzzdm
      data.hjdzmph = data.xzzmph
      data.ywgms = '1-无'
      data.sss = '无'
      data.wss = data.sss
      data.bls = data.ywgms
      data.jbs = data.ywgms
      data.sxs = data.ywgms
      data.jzsfq = data.ywgms
      data.jzsmq = data.ywgms
      data.jzszn = data.ywgms
      data.jzsxdjm = data.ywgms
      data.ycbs = data.ywgms
      data.cjqk = '1-无残疾'
      data.cfpfss = '4-烟囱'
      data.rllx = '6-其他'
      data.ys = '1-自来水'
      data.cs = '1-卫生厕所'
      data.qcl = '1-无'
      data.cygx = []
      data.ysid = data.ysxm = data.xgrid = data.xgrxm = data.cjrid = data.cjrxm = data.xgjgid
      data.csrq = data.sfzh.substr(6, 8)
    }
  },
  components: { ZBtn }
})
</script>
<style lang="scss">
.base-menu {
  width: 100%;
  height: 100%;

  >.xtxx {
    flex-basis: 3em;
    width: 100%;
    border-bottom: 1px solid #dcdcdc;
  }

  >.xtxq {
    width: 100%;

    >.content {
      border-left: 1px solid #dcdcdc;

      >.title {
        flex-basis: 2em;
        border-bottom: 1px solid #dcdcdc;
      }

      >.router {
        flex-grow: 1;
        height: 100%;
      }
    }
  }
}
</style>