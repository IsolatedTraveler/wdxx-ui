<template>
	<div class="vf-field-checkbox-wrapper" ref="checkboxwrapper">
		<div class="vf-field vf-field-checkbox">
			<div :id="'checkbox-'+name" :class="['checkbox-check', {'active': curValue === true}]" @click="toggle">
				<span v-if="curValue === true" class="fa fa-check"></span>
			</div>
			<span class="checkbox-label" @click.self="toggle">{{ label }}<slot></slot></span>
			<span class="badge fa fa-question item-help" v-if="help !== ''" data-toggle="tooltip" data-original-title="" :title="help"></span>
		</div>
		<div v-if="error !== false">
			<span class="label label-danger" >{{ error }}</span>
		</div>
	</div>
</template>

<style lang="less">
	@import '~uiStyle';

	.vf-field-checkbox-wrapper {
		margin-bottom: 15px;
	}
	.vf-field-checkbox {
		.badge {
			display: inline-block !important;
		}
		.checkbox-check {
			display: inline-block;
    		text-align: center;
			vertical-align: middle;
			margin: 0;
			padding: 0;
			width: 22px;
			height: 22px;
			cursor: pointer;
			border: @checkbox-border;
			&:hover {
				border: @checkbox-border-hover;
				box-shadow: inset 0 0px 1px darken(#000000, 5%), 0 0 8px fade(@checkbox-bg, 40%);
			}
			&.active {
				background-color: @checkbox-bg;
				line-height: 0;
				padding: 3px;
			}
			&.active:hover {
				border-color: @checkbox-bg;
			}
			span {
				color: @checkbox-color;
			}
		}
		input {
			visibility: hidden;
		}
		min-height: 10px;
		.checkbox-label {
			cursor: pointer;
			opacity: 0.9;
			&:hover {
				opacity: 1;
			}
		}
	}
</style>

<script>
	require('font-awesome-webpack');

	export default {
		props: {
			label: {
				default: '',
				required: false
			},
			name: {
				required: true,
			},
			value: {
				default: false,
				type: Boolean
			},
			help: {
				default: '',
				required: false,
				type: String
			}
		},
		methods: {
			getValue: function() {
				return this.curValue;
			},
			toggle: function() {
				this.curValue = !this.curValue;

				this.$events.fire('vf-checkbox-change', this.name, this.curValue);
				this.$events.fire('vf-checkbox-change-'+this.name, this.curValue);
			},
			setValue: function(value) {
				this.curValue = value;
			},
			getForm: require('../methods/get-form.js')
		},
		watch: {
			value: function(newVal) {
				this.setValue(newVal);
			},
			curValue: function(newVal, oldVal) {
				this.$emit('change', newVal, oldVal);
			}
		},
		data: function() {
			return {
				isField: true,
				curValue: '' ,
				error: false
			}
		},
		mounted: function() {
			this.curValue = this.value;

			var vm = this;

			this.$on('parseError', function(error) {
				vm.error = error;
			});

			vm.$events.listen('cleanFormErrors', function(error) {
				vm.error = false;
			});

			this.$events.listen('model-loaded', function(form) {
				if (form == vm.getForm()) {
					vm.getForm().requireValue(vm.name);
				}
			});

			$(vm.$refs.checkboxwrapper).find('.badge').tooltip({html: true});
		}
	};
</script>
