<template>
	<div class="vf-field vf-field-number form-group">
		<label v-if="getForm() ? getForm().option('showLabel') : label != false" for="">{{ label }}</label>

		<input type="text" :class="classes" v-model="curValue" :placeholder="label" v-if="!hasAddons" v-mask="mask">

		<div v-if="hasAddons" class="input-group" ref="addon">
			<input type="text" :class="getForm().option('fieldClass')" v-model="curValue" :placeholder="label" v-mask="mask">
			<div class="input-group-addon" v-if="help != ''">
				<span class="fa fa-question input-help" data-toggle="tooltip" data-original-title="" :title="help"></span>
			</div>
			<div class="input-group-addon" v-if="info != ''">
				<span class="fa fa-info input-info" data-toggle="tooltip" data-original-title="" :title="info"></span>
			</div>
		</div>

		<span class="label label-danger" v-if="error !== false">{{ error }}</span>
	</div>
</template>

<style lang="less">
	@import '~uiStyle';
	.vf-field-number {
		input {
			.field-focus(@field-focus);
			height: @field-height;
		}
		label {
			color: @field-label-color;
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
	require('bootstrap');

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
				return parseInt(this.curValue);
			},
			setValue: function(newVal) {
				this.curValue = newVal;
			},
			getForm: require('../methods/get-form.js')
		},
		watch: {
			value: function(newVal) {
				this.setValue(newVal);
			}
		},
		computed: {
			hasAddons: function() {
				return this.help != '' || this.info != '';
			},
			classes: function() {
				return [this.getForm() ? this.getForm().option('fieldClass') : 'form-control', 'size-'+this.size];
			}
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

			$(this.$refs.addon).find('.input-help').tooltip();
			$(this.$refs.addon).find('.input-info').tooltip();
		}
	};
</script>
