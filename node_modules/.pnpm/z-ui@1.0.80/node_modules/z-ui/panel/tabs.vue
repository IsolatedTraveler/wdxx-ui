<template>
	<div class="cp-panel-tabs">
		<ul class="nav nav-tabs tabs-nav">
			<li v-for="($props, ind) in $children" :class="{'active': active == ind}">
				<a @click.prevent="activate(child.$props.index)">
					{{ title }}
				</a>
			</li>
		</ul>
		<div :class="{'container-fluid': container}">
			<slot></slot>
		</div>
	</div>
</template>



<script>
	module.exports = {
		data: function() {
			return {
				indexes: []
			};
		},
		props: {
			container: {
				default: false,
				type: Boolean
			}
		},
		computed: {
			active: function() {
				var active = this.$children.findIndex(function(c) {
					return c.$data.isTab && c.$data.isActive == true;
				});
				return active;
			} 
		},
		methods:{
			buildNav: function() {
				var vm = this;

				vm.$children.forEach(function(c) {
					if(c.$data.isTab) {
						vm.indexes.push(c.$props.index);
					}
				});
			},
			activate: function(title) {
				this.$events.fire('activate-panel-tab', title);
			},
		},
		mounted: function() {
			var vm = this;

			this.buildNav();
		}
	};
</script>
