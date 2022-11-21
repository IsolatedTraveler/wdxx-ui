<template>
	<div :class="['clearfix', 'cp-button-bar', {'margin-top-sm': margin, 'margin-bottom-sm': margin}]">
		<slot></slot>
	</div>
</template>

<style lang="less">
	@import "~uiStyle";

	.cp-button-bar {
		white-space: nowrap;
		font-size: 0;
		& > span.popover-wrap, & > .cp-link {
			display: inline-block;
			font-size: 12px;
			border-radius: 3px;
			vertical-align: middle;
			&:not(:first-child) {
				&, & > .btn {
					border-top-left-radius: 0;
					border-bottom-left-radius: 0;
				}
			}
			&:not(:last-child) {
				&, & > .btn {
					border-top-right-radius: 0;
					border-bottom-right-radius: 0;
				}
			}

			& + .popover-wrap > .btn, & + .btn {
				margin-left: -1px;
				position: relative;
				&:hover {
					z-index: 2;
				}
			}
			&:first-child:hover {
				position: relative;
				z-index: 2;
			}
		}
	}
</style>

<script>
	export default {
		props: {
			margin: {
				type: Boolean,
				default: true,
				required: false
			}
		}
	};
</script>
