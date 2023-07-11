<template>
  <div class="component-callKit">
    <z-call-kit v-if="isStart" :single="true" :media="media" :local-id="uid" />
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
      uid: Math.floor(Math.random() * 100) + ''
    }
  },
  computed: {
    isStart() {
      return !!Object.values(this.media).length
    }
  },
  methods: {
    join() {
      join({ channel: this.room, uid: this.uid }, this.media)
    }
  },
  beforeUnmount() {
    if (this.isStart) {
      leave()
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
