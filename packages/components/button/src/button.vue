<template>
  <button
    ref="_ref"
  >
    <template >
      <slot v-if="$slots.loading" name="loading" />
    </template>
    <span>
      <slot />
    </span>
  </button>
</template>

<script lang="ts">
// import { ElIcon } from '@element-plus/components/icon'
// import { useNamespace } from '@element-plus/hooks'
import { useButton } from './use-button'
// import { buttonEmits, buttonProps } from './button'
import { useButtonCustomStyle } from './button-custom'

export default {}
// defineOptions({
//   name: 'ElButton',
// })

// const props = defineProps(buttonProps)
// const emit = defineEmits(buttonEmits)

// const buttonStyle = useButtonCustomStyle(props)
// const ns = useNamespace('button')
// const { _ref, _size, _type, _disabled, shouldAddSpace, handleClick } =
//   useButton(props, emit)

// defineExpose({
//   /** @description button html element */
//   ref: _ref,
//   /** @description button size */
//   size: _size,
//   /** @description button type */
//   type: _type,
//   /** @description button disabled */
//   disabled: _disabled,
//   /** @description whether adding space */
//   shouldAddSpace,
// })
</script>
