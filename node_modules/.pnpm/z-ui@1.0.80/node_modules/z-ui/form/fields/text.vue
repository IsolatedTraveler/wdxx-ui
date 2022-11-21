<template>
	<div class="vf-field vf-field-text form-group">
		<label v-if="getOption('showLabel') && label !== false" for="">{{ label }}</label>

		<input type="text" :class="getOption('fieldClass')" v-model="curValue" :name="name" :placeholder="label" v-if="!hasAddons" v-mask="mask">

		<div v-if="hasAddons" class="input-group" ref="addon">
			<input type="text" :class="getForm().option('fieldClass')" v-model="curValue" :placeholder="label" v-mask="mask">
			<div class="input-group-addon" v-if="help != ''" v-tooltip="help">
				<span class="fa fa-question input-help"></span>
			</div>
			<div class="input-group-addon" v-if="info != ''" v-tooltip="info">
				<span class="fa fa-info input-info"></span>
			</div>
		</div>

		<span class="label label-danger" v-if="error !== false">{{ error }}</span>
	</div>
</template>

<style lang="less">
	@import '~uiStyle';
	.vf-field-text {
		input {
			.field-focus(@field-focus);
			height: @field-height;
    		padding: 6px 12px;
		}
		label {
			color: @field-label-color;
			text-align: left;
		}
		.input-group-addon > span {
			cursor: pointer;
			font-size: 14pt;
		}
		.input-group-addon:first-of-type {
			border-left: 0;
		}
	}
</style>

<script>
	export default {
		props: {
			label: {
				default: false,
				required: false
			},
			name: {
				required: true,
			},
			value: {
				default: '',
				type: String
			},
			help: {
				required: false,
				default: '',
				type: String
			},
			info: {
				required: false,
				default: '',
				type: String
			},
			mask: {
				required: false,
				default: '',
			}
		},
		methods: {
			getValue: function() {
				return this.curValue;
			},
			setValue: function(newVal) {
				this.curValue = newVal;
			},
			getForm: require('../methods/get-form.js'),
			getOption: require('../methods/get-form-option.js'),
		},
		watch: {
			value: function(newVal, oldVal) {
				this.setValue(newVal);
			},
			curValue: function(newVal, oldVal) {
				if (newVal != oldVal) {
					this.$emit('change', newVal, oldVal);
				}
			}
		},
		computed: {
			hasAddons: function() {
				return this.help != '' || this.info != '';
			}
		},
		directives: {
			tooltip: require('z-vuestrap2/tooltip.js').default
		},
		data: function() {
			return {
				isField: true,
				curValue: '',
				error: false
			}
		},
		mounted: function() {
			var vm = this;
			this.curValue = this.value;

			this.$events.listen('model-loaded', function(form) {
				if (form == vm.getForm()) {
					vm.getForm().requireValue(vm.name);
				}
			});

			var vm = this;

			this.$on('parseError', function(error) {
				vm.error = error;
			});

			vm.$events.listen('cleanFormErrors', function(error) {
				vm.error = false;
			});

			if(typeof $.fn.tooltip == 'function') {
				$(this.$refs.addon).find('.input-group-addon').tooltip();
			}
		}
	};
</script>
