<template>
  <div id="app" class="wd_flex">
    <wd-mask v-show="load" class="maskzzj" shape="loading" />
    <div class="header" :class="{ other: judge }">
    </div>
    <div class="wd_auto" :class="{ other: judge }">
      <router-view class="wd_flex wd_abs" />
    </div>
    <div class="bottom wd_flex" row :class="{ other: judge }">
      <span>欢迎您使用{{ jgmc }}自助服务系统，使用完毕后请取走您的凭条！</span>
      <span>{{ dateVal }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      date: new Date(),
      jgmc: ''
    }
  },
  computed: {
    load() {
      return this.$store.getters.load
    },
    dateVal() {
      let date = this.date.format('yyyy年MM月dd日 星期w a hh:mm'), a = ['天', '一', '二', '三', '四', '五', '六']
      date = date.replace('a', this.date.getHours() > 12 ? '下午' : '上午')
      date = date.replace('w', a[this.date.getDay()])
      return date
    },
    judge() {
      return this.$route.name === 'home'
    }
  },
  created() {
    setTimeout(() => {
      this.date = new Date()
      setInterval(() => {
        this.date = new Date()
      }, 60000)
    }, new Date(new Date(this.date.getTime() + 60000).format('yyyy-MM-dd hh:mm')) - this.date)
  },
  mounted() {
    setTimeout(() => {
      this.init()
    }, 2000)
  },
  methods: {
    init() {
      this.jgmc = this.$config.jgjc
      this.query.getPayType({ jgid: this.$config.jgid, pname: 'zzj' }).then(res => {
        if (res.code === '1' && res.data && res.data.length) {
          let config = { yw: {}, cs: {} }
          res.data.forEach(item => {
            config[item.jb === '3' ? 'cs' : 'yw'][item.jc] = item.val
          })
          this.$store.commit('config', config)
        } else {
          this.$msg.alert('未获取到支付方式配置信息')
        }
      }).catch(res => {
        this.$msg.alert('支付方式配置信息读取失败，网络连接超时')
      })
      this.query.getPayWay().then(res => {
        if (res.code === '1' && res.data && res.data.length) {
          let pay = res.data[0].pay.replace(1, '微信')
          pay = pay.replace(2, '支付宝')
          pay = pay.replace(',', '/')
          pay = pay.replace(/[0-9,]+/, '')
          this.$store.commit('payWay', pay)
        } else {
          this.$msg.alert('支付配置信息读取失败')
        }
      }).catch(res => {
        this.$msg.alert('支付配置信息读取失败，网络连接超时')
      })
    }
  }
}
</script>
<style lang="scss">
body {
  user-select: none;
}

#app {
  width: 100%;
  height: 100%;

  >.maskzzj {
    z-index: 999999;
  }

  >.wd_auto {
    width: 100%;
    position: relative;
    background: #f2f2f2;
    margin-bottom: 72px;

    &.other {
      margin: 0;
    }
  }

  >.header {
    height: 80px;
    width: 100%;
    background-color: #4887e6;
    line-height: 80px;
    font-size: 36px;
    font-weight: bolder;
    color: #fff;
    background-image: url(@img/zjlx_header.png);
    background-repeat: no-repeat;
    background-position: 20px center;

    &.other {
      color: #4887e6;
      background-color: unset;
      background-image: url(@img/logo_text.png);
    }
  }

  >.bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 14px;
    right: 0;
    flex-flow: column;
    align-items: flex-start;
    line-height: 28px;
    padding: 8px 12px;
    z-index: 99;

    &.other {
      flex-flow: row;
      justify-content: space-between;
      height: 28px;
      color: #fff;
      bottom: 0;

      span {
        color: #fff;
      }
    }

    span {
      color: #4887e6;
      font-size: 16px;
    }
  }
}

html {
  .wd_msg.wd_pop.wd_flex>div {
    max-width: 600px;
    font-size: 30px;
  }
}
</style>
