<template>
  <div class="component-callKit">
    <z-call-kit v-if="isStart" :media="media" @leave="leave" single :local-id="uid" />
    <div v-else>
      <input type="text" v-model="uid"><z-btn @click.stop="join">加入</z-btn>
    </div>
  </div>
</template>
<script lang="ts">
import { join, leave } from './RTC/index'

export default {
  name: 'component-callKit',
  data() {
    return {
      media: {},
      room: '',
      uid: '',
      isStart: false
    }
  },
  mounted() {
    this.getData()
    if (this.room && this.uid) {
      this.join()
    }
  },
  methods: {
    join() {
      join({ channel: this.room, uid: this.uid }, this.media).then(() => {
        this.isStart = true
      })
    },
    getData() {
      const arr = (location.href.split('?').pop() || '').split('&')
      arr.forEach(it => {
        let arr = it.split('=');
        (this as any)[arr[0] as string] = arr[1]
      })
    },
    leave(id: string) {
      leave()
      this.isStart = false
    }
  }
}
</script>
<style lang="scss">
.component-callKit {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
</style>
