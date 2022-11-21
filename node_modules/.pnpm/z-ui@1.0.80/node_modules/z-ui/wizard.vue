<template>
	<div class="cp-wizard">
		<ul class="nav nav-pills wizard-nav">
			<li v-for="(title, ind) in titles" :class="['nav-item', {'active': active == ind}]" :style="{width: (100/titles.length)+'%'}">
				<a class="nav-link" @click="activate(title.title)" :id="'wizard-link-'+ind">
					<div class="wizard-icon">{{ title.index }}</div>
					{{ title.title }}
				</a>
			</li>
		</ul>
		<div class="container-fluid">
			<slot></slot>
			<div class="row">
				<div class="col-sm-6">
					<vf-submit></vf-submit>
				</div>
				<div class="col-sm-6">
					<div class="pull-right">
						<w-prev target="testwizard" id="prev">Zurück</w-prev>
						<w-next target="testwizard" id="next">Weiter</w-next>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="less">
	@import "~uiStyle";
	
	.cp-wizard {
		ul.wizard-nav {
			padding-bottom: 2px;
			margin-bottom: 10px;
			border-bottom: #eeeeee solid 1px;
			.nav-item {
				margin-left: 0;
				&.active .wizard-icon {
					background: @primary;
				}
				&.active a {
					background: none;
				}
				&:after {
					content: "";
					position: absolute;
					display: block;
					height: 4px;
					width: 100%;
					background: #eeeeee;
					top: 21px;
					z-index: 4;
				}
			}
			.wizard-icon {
				background: @borders1;
				margin: 0 auto;
				width: 25px;
				hwight: 25px;
				font-size: 10px;
				line-height: 25px;
				text-align: center;
				border-radius: 12px;
				color: white;
				font-weight: bold;
				margin-bottom: 5px;
			}
			a.nav-link {
				cursor: pointer;
				font-size: 10px;
				display: block;
				padding: 10px;
				z-index: 5;
				text-align: center;
				color: @font-color;
				&:hover {
					background: none;
					.wizard-icon {
						background: @primary;
					}
				}
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
			prev: {
				required: false,
				default: 'prev',
				type: String
			},
			next: {
				required: false,
				default: 'next',
				type: String
			}
		},
		computed: {
			active: function() {
				var active = this.$children.findIndex(function(c) {
					return c.$data.isWChild && c.$data.active == true;
				});
				this.updateButtons(active);
				return active;
			} 
		},
		components: {
			'w-next': require('./wizard/w-next.vue'),
			'w-prev': require('./wizard/w-prev.vue'),
			vfSubmit: require('./form/fields/submit.vue')
		},
		methods:{
			buildNav: function() {
				var vm = this;

				vm.$children.forEach(function(c, index) {
					if(c.$data.isWChild) {
						vm.titles.push({title: c.$props.title, subtitle: c.$props.subtitle, index: c.$props.index});
					}
				});
			},
			activate: function(title) {
				this.$children.forEach(function(child) {
					if (child.$props && child.$data.isWChild) {
						child.$emit('changestate', child.$props.title, title == child.$props.title);
					}
				});
			},
			updateButtons: function(active) {
				var vm = this;

				if (!(vm.$children[active+1] && vm.$children[active+1].$props && vm.$children[active+1].$data.isWChild)) {
					vm.$events.fire('deactivate-wizard-button', vm.next);
				} else {
					vm.$events.fire('activate-wizard-button', vm.next);
				}
				if (!(vm.$children[active-1] && vm.$children[active-1].$props && vm.$children[active-1].$data.isWChild)) {
					vm.$events.fire('deactivate-wizard-button', vm.prev);
				} else {
					vm.$events.fire('activate-wizard-button', vm.prev);
				}
			}
		},
		mounted: function() {
			var vm = this;

			this.buildNav();
			
			this.$on('next', function() {
				if (vm.$children[vm.active+1] && vm.$children[vm.active+1].$props && vm.$children[vm.active+1].$data.isWChild) {
					vm.activate(vm.$children[vm.active+1].$props.title);
				}
			});
			this.$on('prev', function() {
				if (vm.$children[vm.active-1] && vm.$children[vm.active-1].$props && vm.$children[vm.active-1].$data.isWChild) {
					vm.activate(vm.$children[vm.active-1].$props.title);
				}
			});
		}
	};
</script>
