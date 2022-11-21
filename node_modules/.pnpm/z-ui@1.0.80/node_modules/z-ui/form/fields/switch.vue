<template>
	<div class="vf-field-switch-wrapper">
		<span class="switch-label">{{ label }}<slot></slot></span>
		<div class="vf-field-switch-row">
			<span v-if="left != undefined" :class="['switch-icon-left', 'fa', 'fa-'+left.icon]" :style="styleLeft"></span>
			<div class="vf-field-switch-container" ref="switchField" @click="change">
				<div class="vf-field-switch" ref="switchField">
					<span class="vf-field-switch-inner" :style="{left: leftPos+'%'}"></span>
				</div>
			</div>
			<span v-if="left != undefined" :class="['switch-icon-right', 'fa', 'fa-'+right.icon]" :style="styleRight"></span>
		</div>
		<div v-if="error !== false">
			<span class="label label-danger" >{{ error }}</span>
		</div>
	</div>
</template>

<style lang="less">
	@import "~uiStyle";

	.vf-field-switch-wrapper {
		.vf-field-switch-row {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			& > span {
				flex: 0 0 auto;
				line-height: @field-height;
				font-size: 20px;
				font-weight: bold;
				opacity: 0.6;
			}
			.vf-field-switch-container {
				cursor: pointer;
				box-shadow: inset 0px 0px 4px rgba(0,0,0,0.7);
				border: @switch-bg solid 2px;
				flex: 0 1 80px;
				background: @switch-bg;
				border-radius: @field-height / 2;
				height: @field-height;
				padding-left: @field-height / 2;
				padding-right: (@field-height - 8) / 2;
				& > div {
					position: relative;
					.vf-field-switch-inner {
						transition: left 0.2s;
						border-radius: (@field-height - 4) / 2;
						margin-left: @field-height / 2 * -1;
						height: (@field-height - 4);
						width: (@field-height - 4);
						position: absolute;
						background-color: rgba(255,255,255,0.2);
						display: inline-block;
					}
				}
			}
		}
		margin-bottom: 15px;
		.switch-label {
			font-weight: bold;
			color: @field-label-color;
			margin-bottom: 5px;
			display: block;
		}
		& *:focus {
			outline: none !important;
			-webkit-appearance: none;
		}
	}
</style>

<script>
	require('font-awesome-webpack');

	export default {
		data: function() {
			return {
				isField: true,
				curValue: null,
				error: false
			}
		},
		props: {
			label: {
				default: '',
				required: false
			},
			name: {
				required: true,
			},
			value: {
				default: undefined,
			},
			left: {
				default: undefined
			},
			right: {
				default: undefined,
			},
			nullable: {
				default: false,
				type: Boolean
			},
			idprop: {	/* Property im Object, die ausgelesen wird	für unqiue ID */
				default: 'id',
				type: String,
				required: false
			},
			valueprop: {	/* Property im Object, die für Value-Display ausgesen wird */
				default: 'title',
				type: String,
				required: false
			},
			options: {
				default: undefined
			}
		},
		computed: {
			styleLeft: function() {
				if (this.left == undefined) {
					return '';
				}
				if (this.left.color) {
					return 'color: '+this.left.color;
				}
			},
			styleRight: function() {
				if (this.right == undefined) {
					return '';
				}
				if (this.right.color != undefined) {
					return 'color: '+this.right.color;
				}
			},
			realOptions: function() {
				if (this.options != undefined) {
					return this.options;
				}
				if(this.nullable === true) {
					return [0, undefined, 1];
				}
				return [0, 1];
			},
			leftPos: function() {
				return this.curValue / (this.realOptions.length - 1) * 100;
			}
		},
		methods: {
			getValue: function() {
				return this.realOptions[this.curValue];
			},
			change: function() {
				this.setValue((this.curValue+1) % this.realOptions.length, this.curValue);
			},
			setValue: function(newVal, oldVal) {
				this.curValue = newVal;

				this.$events.fire('vf-switch-change', this.name, this.realOptions[newVal], this.realOptions[oldVal]);
				this.$events.fire('vf-switch-change-'+this.name, this.realOptions[newVal], this.realOptions[oldVal]);
			},
			listen: function() {
				var vm = this;

				if (vm.value) {
					vm.curValue = vm.value;
				}

				if (!this.getForm()) {return;}

				this.getForm().requireValue(this.name);

				this.$events.listen('model-loaded', function(form) {
					if (form == vm.getForm()) {
						vm.getForm().requireValue(vm.name);
					}
				}); 
			},
			getForm: require('../methods/get-form.js')
		},
		mounted: function() {
			var vm = this;

			this.curValue = this.realOptions.findIndex(function(v) {
				return v == vm.value;
			});

			this.$on('parseError', function(error) {
				vm.error = error;
			});

			vm.$events.listen('cleanFormErrors', function(error) {
				vm.error = false;
			});
		}
	};
</script>
