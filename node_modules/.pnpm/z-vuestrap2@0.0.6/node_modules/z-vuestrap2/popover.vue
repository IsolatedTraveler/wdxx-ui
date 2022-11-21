<template>
	<span class="popover-wrap" ref="wrapper">
		<div :class="['popover', 'popover-'+look, realArrowClass]" ref="popover" :style="{'display': 'block', display: realDisplay, 'width': width+'px', 'top': top+'px', 'left': left+'px'}">
			<div class="popover-title" v-if="title != undefined">
				<span class="realtitle">{{ title }}</span><span class="close fa fa-close" @click="visible = false"></span>
			</div>
			<div class="popover-content" v-if="content != undefined">
				{{ content }}
			</div>
		</div>
		
		<slot></slot>
	</span>
</template>

<style lang="less">
	@import "~vuestrapStyle.less";

	.popover-wrap {
		position: relative !important;
	}

	.popover-default {
		.v-popover-variant(@popover-default-bg, @popover-default-border, @popover-default-text);
	}

	.popover-info {
		.v-popover-variant(@popover-info-bg, @popover-info-border, @popover-info-text);
	}

	.popover-warning {
		.v-popover-variant(@popover-warning-bg, @popover-warning-border, @popover-warning-text);
	}

	.popover-success {
		.v-popover-variant(@popover-success-bg, @popover-success-border, @popover-success-text);
	}

	.popover-danger {
		.v-popover-variant(@popover-danger-bg, @popover-danger-border, @popover-danger-text);
	}

</style>

<script>
	export default {
		data: function() {
			return {
				left: 0,
				top: 0,
				visible: false,
				arrowClass: false,
				arrowRules: []
			}
		},
		props: {
			title: {
				require: false,
				default: undefined,
			},
			content: {
				require: false,
				default: undefined,
			},
			width: {
				default: 250,
				typee: Number,
				required: false
			},
			look: {
				required: false,
				default: 'default'
			}
		},
		computed: {
			realDisplay: function() {
				return (this.visible) ? 'block' : 'none';
			},
			realArrowClass: function() {
				return this.arrowClass ? this.arrowClass : '';
			}
		},
		methods: {
			show: function() {
				this.visible = true;
				this.$nextTick(function() {
					this.setPosition();
				});
			},
			setPosition: function() {
				var vm = this;

				if (vm.arrowClass && vm.arrowRules.length) {
					vm.arrowClass = false;
					this.purgeRules();
				}

				var popoverWidth = $(this.$refs.popover).outerWidth();
				var popoverHeight = $(this.$refs.popover).outerHeight();
				var togglerOffset = $(this.$refs.popover).next().offset();
				var togglerWidth = $(this.$refs.popover).next().outerWidth();
				var togglerHeight = $(this.$refs.popover).next().outerHeight();

				this.left = (popoverWidth * -1) / 2 + togglerWidth / 2;
				this.top = (popoverHeight + 15) * -1;

				if (togglerOffset.left + (togglerWidth + popoverWidth) / 2 + 10 > $(window).width()) {
					this.left = $(window).width() - togglerOffset.left - popoverWidth - 10;
					var popoverOffset = $(this.$refs.popover).offset();
					var arrowPosition = (togglerOffset.left - $(window).width() + 10 + popoverWidth + togglerWidth / 2) + 'px';

					vm.arrowClass = 'arrow-' + Math.random().toString(36).substr(2,10);

					vm.insertRule('.'+vm.arrowClass+'::before {left: '+arrowPosition+' !important}', 0);
					vm.insertRule('.'+vm.arrowClass+'::after {left: '+arrowPosition+' !important}', 1);
				}

			},
			insertRule: function(rule, index) {
				this.arrowRules.push(document.styleSheets[0].insertRule(rule, 0));
			},
			purgeRules: function() {
				this.arrowRules.forEach(function(rule) {
					document.styleSheets[0].deleteRule(rule);
				});
				this.arrowRules = [];
			}
		},
		mounted: function() {
			var vm = this;

			this.$on('show', function() {
				vm.show();
			});

			this.$events.on('windowwidth', function(width) {
				if (vm.visible) {
					vm.setPosition();
				}
			});
		}
	}
</script>
