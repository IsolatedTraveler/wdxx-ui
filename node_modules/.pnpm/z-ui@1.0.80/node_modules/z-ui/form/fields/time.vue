<template>
	<div class="vf-field vf-field-time form-group">
		<label v-if="getForm() ? getForm().option('showLabel') : label != false" for="">{{ label }}</label>
		<input ref="input" type="text" :class="classes" v-model="curValue" :placeholder="label">
		<span class="label label-danger" v-if="error !== false">{{ error }}</span>
	</div>
</template>

<style lang="less">
	@import '~uiStyle';
	.vf-field-time {
		input {
			.field-focus(@field-focus);
			height: @field-height;
			&.size-sm {
				height: 30px;
    			padding: 4px 10px;
			}
		}
	}
</style>

<script>
	require('jquery-datetimepicker');
	require("jquery-datetimepicker/jquery.datetimepicker.css");

	$.datetimepicker.setLocale('de');

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
			step: {
				default: 30,
				required: false,
				type: Number
			},
			size: {
				default: 'md',
				type: String
			}
		},
		methods: {
			getValue: function() {
				return this.curValue;
			},
			setValue: function(newVal) {
				this.curValue = newVal;
			},
			getForm: require('../methods/get-form.js')
		},
		computed: {
			classes: function() {
				return [this.getForm() ? this.getForm().option('fieldClass') : 'form-control', 'size-'+this.size];
			}
		},
		watch: {
			value: function(newVal) {
				this.setValue(newVal);
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

			$(this.$refs.input).datetimepicker({
				datepicker:false,
				format:'H:i',
				step: vm.step,
				onChangeDateTime: function(dp, $input) {
					vm.curValue = $input.val();
				}
			});

			var vm = this;

			this.$on('parseError', function(error) {
				vm.error = error;
			});

			vm.$events.listen('cleanFormErrors', function(error) {
				vm.error = false;
			});
		}
	};
</script>
