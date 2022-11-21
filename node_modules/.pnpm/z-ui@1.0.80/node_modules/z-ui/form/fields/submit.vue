<template>
	<popover :content="error" title="Etwas ist schief gelaufen" ref="popover" look="danger">
		<button id="submit" ref="button" type="submit" :class="['btn btn-primary btn-submit vf-field vf-field-submit', this.cls]" @click="setValues()"><slot>{{ label }}</slot></button>
	</popover>
</template>

<style lang="less">
	@import '~uiStyle';

	.vf-field.vf-field-submit {
		&.btn-link {
			color: @primary;
			padding: 2px 10px;
			line-height: 14px;
			height: 18px;
			outline: 0;
			&:focus, &:active {
				background: transparent;
				border-color: transparent;
				outline: 0;
				color: lighten(@primary,  20%);
			}
			a {
				color: @primary;
				padding: 2px 10px;
				line-height: 16px;
				height: 16px;
			}
		}
		.btn-group > & {
			display: inline-block;
			float: none;
		}
	}
</style>

<script>
	require('bootstrap');
	
	export default {
		props: {
			confirm: {
				required: false,
				type: String,
				default: ''
			},
			name: {
				type: String,
				default: '',
				required: false
			},
			value: {
				default: '',
				required: false
			},
			cls: {default: ''}
		},
		data: function() {
			return {
				error: false,
				isSubmit: true
			};
		},
		methods: {
			getForm: require('../methods/get-form.js'),
			getValue: function() {
				return this.value;
			},
			setValues: function() {
				this.setConfirm();
			},
			setConfirm: function() {
				if (this.confirm) {
					this.getForm().setConfirm(this.confirm);
				} else {
					this.getForm().resetConfirm();
				}
			}
		},
		components: {
			'popover': require('z-vuestrap2/popover.vue')
		},
		computed: {
			label: function() {
				return this.getForm().option('submitLabel');
			}
		},
		mounted: function() {
			var vm = this;

			this.$on('parseError', function(error) {
				vm.error = error;
				vm.$refs.popover.$emit('show');
			});
		}
	};
</script>
