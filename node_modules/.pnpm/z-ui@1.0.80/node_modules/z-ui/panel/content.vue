<template>
	<div class="cp-wrap cp-panel-content" v-show="this.isActive">
		<slot></slot>
	</div>
</template>

<style lang="less">
	.cp-wrap.cp-panel-content {
		overflow: hidden;
	}
</style>

<script>
	export default {
		data: function() {
			return  {
				isActive: false
			};
		},
		props: {
			active: {
				default: false,
				type: Boolean
			},
			index: {
				required: true
			}
		},
		mounted: function() {
			var vm = this;

			this.isActive = this.active;

			this.$events.listen('activate-panel-tab', function(index) {
				vm.isActive = index == vm.index;
			});
		}
	}
</script>
