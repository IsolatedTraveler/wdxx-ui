<template>
	<div class="cp-panel-tab" :class="{'active': this.isActive, 'container-fluid': container === true}">
		<a @click="activate">
			{{ title }}
		</a>
	</div>
</template>

<style lang="less">
	@import "~uiStyle";
	
	.cp-panel-tab {
		margin-right: 10px;
		cursor: pointer;
		&:last-child {margin-right: 0;}
		background: #eee;
		& > a {
			cursor: pointer;
			border-top: 4px solid rgba(0,0,0,0);
			color: @tabs-color;
			font-weight: normal;
			font-size: 1.2em;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			padding: 5px 9px;
			display: block;
			&:hover {
				border-top: 4px solid @tabs-hover-bg;
			}
		}
		&.active {
			a {
				color: @tabs-active-color;
			}
			background-color: @tabs-active-bg;
		}
	}
</style>

<script>
	module.exports = {
		data: function() {
			return {
				isActive: false,
				isTab: true
			};
		},
		props: {
			title: {
				type: String,
				required: true
			},
			container: {
				type: Boolean,
				required: false,
				default: false
			},
			active: {
				type: Boolean,
				default: false
			},
			index: {
				default: '',
				required: true
			}
		},
		methods: {
			activate: function() {
				this.$events.fire('activate-panel-tab', this.index);
			}
		},
		mounted: function() {
			var vm = this;

			this.$events.listen('activate-panel-tab', function(index) {
				vm.isActive = index == vm.index;
				if (vm.isActive) {
					vm.$nextTick(function() {
						vm.$events.fire('update-scrollbar');
					});
				}
			});

			if (vm.active == true) {
				this.$events.fire('activate-panel-tab', this.index);
			}
		}
	};
</script>
