<template>
  <z-flex ref="_ref" :class="_class">
    <z-media :class="{ 'z-call-kit--remote': _mainClassJudge, 'z-call-kit--main': !_mainClassJudge }" v-bind="main"
      :key="main?.userId" @click.stop="click(main?.userId)"></z-media>
    <z-media v-if="single" v-show="singleMedia"
      :class="{ 'z-call-kit--remote': !_mainClassJudge, 'z-call-kit--main': _mainClassJudge }" v-bind="singleMedia"
      @click.stop="click(singleMedia?.userId)"></z-media>
    <z-flex class="z-call-kit--multi" wrap ref="_refMulti" v-else>
      <z-media v-for="(it) in medias" :key="it.userId" :auto="multiWidth" :order="it.userId == localId ? 1 : 2"
        v-bind="it" @click.stop="click(it.userId)"></z-media>
    </z-flex>
  </z-flex>
</template>
<script lang="ts" setup>
import { callKitEmits, callKitProps } from './call-kit'
import { useCallKit } from './use-call-kit'
import ZFlex from '@ui/components/flex/src/flex.vue'
import ZMedia from '@ui/components/media/src/media.vue'
defineOptions({
  name: 'z-call-kit'
})
const props = defineProps(callKitProps)
const emit = defineEmits(callKitEmits)
function click(id: string = '') {
  if (props.single) {
    clickId.value = id
  } else if (props.mainId == props.localId && props.mainId != id) {
    // 提示是否切换主讲人权限
    // 切换主讲人
  }
}
const { _ref, _class, main, clickId, singleMedia, medias, _refMulti, multiWidth, _mainClassJudge } = useCallKit(props, emit)
defineExpose({
  ref: _ref
})
</script>