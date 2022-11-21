<template>
	<div class="cp-tabs">
		<ul class="nav nav-tabs tabs-nav">
			<li v-for="(title, ind) in titles" :class="{'active': active == ind}">
				<a @click.prevent="activate(title)">
					{{ title }}
				</a>
			</li>
		</ul>
		<div :class="{'container-fluid': container}">
			<slot></slot>
		</div>
	</div>
</template>

<style lang="less">
	@import "~uiStyle";
	
	.cp-tabs {
		.tabs-nav {
			padding: 0 15px;
			margin: 0 0 10px;
			borrder-bottom-color: @borders1;
			& > li {
				margin-right: 10px;
				cursor: pointer;
				&:last-child {margin-right: 0;}
				& > a {
					cursor: pointer;
					border-top: 4px solid rgba(0,0,0,0);
					color: @tabs-color;
					&:hover {
						border-top: 4px solid @tabs-hover-bg;
					}
				}
			}
			& > li.active > a {
				color: @tabs-active-color;
				background-color: @tabs-active-bg;
			}
		}
	}
</style>

<script>
	module.exports = {
		data: function() {
			return {
				titles: []
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

				vm.$children.forEach(function(c, index) {
					if(c.$data.isTab) {
						vm.titles.push(c.$props.title);
					}
				});
			},
			activate: function(title) {
				this.$children.forEach(function(child) {
					if (child.$props && child.$data.isTab) {
						child.$emit('changestate', child.$props.title, title == child.$props.title);
					}
				});
			},
		},
		mounted: function() {
			var vm = this;

			this.buildNav();
		}
	};
</script>
