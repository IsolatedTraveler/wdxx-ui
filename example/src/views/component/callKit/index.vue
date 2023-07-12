<template>
  <div class="component-callKit">
    <z-call-kit v-if="isStart" :media="media" @leave="leave" :main-id="mainId" />
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
      room: '123',
      uid: Math.floor(Math.random() * 100) + '',
      mainId: 'a45',
      isStart: false
    }
  },
  methods: {
    join() {
      join({ channel: this.room, uid: this.uid }, this.media, this.mainId).then(() => {
        this.isStart = true
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
  flex-grow: 1;
  box-sizing: border-box;
}
</style>
