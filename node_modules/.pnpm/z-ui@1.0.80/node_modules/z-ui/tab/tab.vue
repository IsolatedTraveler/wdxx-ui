<template>
	<div class="cp-w-child" :class="{'hidden': !this.isActive, 'container-fluid': container === true}">
		<slot></slot>
	</div>
</template>

<style lang="less">
	.cp-wizard {
		&.hidden {
			display: none;
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
			}
		},
		mounted: function() {
			var vm = this;

			vm.$on('changestate', function(title, state) {
				if (title == vm.title) {
					vm.isActive = state;
				}
			});

			vm.isActive = vm.active;
		}
	};
</script>
