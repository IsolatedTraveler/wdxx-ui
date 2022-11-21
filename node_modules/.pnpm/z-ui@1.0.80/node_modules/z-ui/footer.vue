<template>
	<div :style="style" class="cp-wrap cp-footer">
		
	</div>
</template>

<style lang="less">
	.cp-wrap.cp-z-ui-footer {
		
	}
</style>

<script>
	export default {
		props: {
			height: {
				default: 0,
				required: true,
				type: Number
			}
		},
		data: function() {
			return  {

			};
		},
		computed: {
			style: function() {
				return {
					"height": this.height+'px',
					"min-height": this.height+'px',
					'flex': '0 0 '+this.height+'px'
				};
			}
		},
		mounted: function() {

		}
	}
</script>
