<template>
	<div :class="classes">
		<router-link v-if="hasRight && route != false" :to="{name: route, params: params}" :target="target">
			<span v-if="realIcon" :class="['fa', 'fa-'+realIcon]">
				&nbsp;
			</span>
			<slot>{{ realLabel }}</slot>
		</router-link>
		<a v-if="hasRight && (route == false)"
			:href="href"
			:target="target"
	 		@click="open"
		>
			<span :class="['fa', 'fa-'+this.realIcon]" v-if="realIcon">&nbsp;</span>
			<slot>{{ realLabel }}</slot>
		</a>
	</div>
</template>

<style lang="less">
	@import '~uiStyle';
	.cp-link {
		padding: 0;
		a {
			color: white;
			padding: 6px 12px;
			line-height: 20px;
			height: 32px;
			display: block;
			font-size: 14px;
			&:hover {
				text-decoration: none;
			}
		}
		&.btn-link {
			outline: 0;
			&:focus, &:active {
				background: transparent;
				border-color: transparent;
				outline: 0;
				a {
					color: lighten(@primary,  20%);
				}
			}
			a {
				color: @primary;
				padding: 2px 10px;
				line-height: 16px;
				height: 16px;
			}
		}
		&.btn-sm {
			height: 24px;
			a {
				padding: 2px 7px;
				line-height: 18px;
				height: 22px;
				font-size: 11px;
				&:hover {
					text-decoration: none;
				}
			}
		}
	}
</style>

<script>
	module.exports = {
		props: {
			type: {
				required: false,
				type: String,
				default: 'primary'
			},
			size: {
				required: false,
				type: String,
				default: 'size-default'
			},
			href: {
				type: String,
				default: ''
			},
			icon: {
				required: false,
				type: String,
				default: ''
			},
			route: {
				type: String,
				default: ''
			},
			add: {
				type: Boolean,
				default: false
			},
			right: {
				default: undefined,
				required: false
			},
			target: {
				default: '_SELF'
			},
			params: {
				default: function() {return {};}
			},
			event: {
				default: '',
				type: String
			},
			cls: {}
		},
		methods: {
			open: function(e) {
				this.$emit('click');

				if (this.href == '') {
					e.preventDefault();
				}

				if (this.event != '') {
					e.preventDefault();
					this.$emit('event', this.event);
				}
			}
		},
		computed: {
			realLabel: function() {
				if (this.add) {
					return 'Hinzufügen';
				}
			},
			realIcon: function() {
				if (this.add) {
					return 'plus';
				}

				return this.icon;
			},
			classes: function() {
				return ['cp-link', 'btn', 'btn-'+this.type, 'btn-'+this.size, 'btn-group-item', this.cls];
			},
			hasRight: function() {
				return this.$user == undefined || this.right == undefined || this.$user.hasRight(this.right);
			}
		}
	};
</script>
