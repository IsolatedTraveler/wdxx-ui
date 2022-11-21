<template>
	<div ref="container" class="cp-wrap cp-z-ui-grid">
		<slot></slot>
	</div>
</template>

<style lang="less">
	.cp-wrap.cp-z-ui-grid {
		height: 100%;
		display: grid;
		grid-template-rows: repeat(auto-fill, minmax(100px, 1fr));
		grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
		grid-gap: 15px;
		& > article {
			grid-row: ~"1 / -1";
		}
		& > article, & > aside {
			height: 100%;
			& > .cp-wrap {height: 100%; .panel {height: 100%; margin-bottom: 0;}}
			.panel-body {
    			flex: 0 1 100%;
			}
		}
		& > aside {
			&.rows-2 {
				grid-row: span 2;
			}
			&.rows-stretch {
				grid-row: ~"1 / -1";
			}
		}
	}
</style>

<script>
	export default {
		data: function() {
			return  {

			};
		},
		mounted: function() {
			var vm = this;
		}
	}
</script>
