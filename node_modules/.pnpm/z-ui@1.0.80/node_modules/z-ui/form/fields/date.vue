<template>
	<div class="vf-field vf-field-date form-group">
		<label v-if="getForm().option('showLabel')" for="">{{ label }}</label>

		<input ref="input" type="text" :class="getForm().option('fieldClass')" v-model="curValue" :placeholder="label" v-if="!hasAddons">

		<div v-if="hasAddons" class="input-group" ref="addon">
			<input type="text" :class="getForm().option('fieldClass')" v-model="curValue" :placeholder="label">
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
	.vf-field-date {
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
	require('jquery-datetimepicker');
	var moment = require('moment');
	require("jquery-datetimepicker/jquery.datetimepicker.css");

	$.datetimepicker.setLocale('de');

	export default {
		data: function() {
			return {
				isField: true,
				curValue: '',
				error: false
			}
		},
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
			}
		},
		computed: {
			hasAddons: function() {
				return this.help != '' || this.info != '';
			}
		},
		methods: {
			getValue: function() {
				if (this.curValue == '') {
					return null;
				}
				return moment(this.curValue, 'DD.MM.YYYYY').format('YYYY-MM-DD');
			},
			setValue: function(newVal) {
				if (newVal.match('^[0-9]{4}-[0-9]{2}-[0-9]{2}$')) {
					this.curValue = newVal;
					return;
				}

				if (newVal.match('^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2}$')) {
					this.curValue = moment(newVal, 'YYYY-MM-DD HH:mm:ss').format('DD.MM.YYYY');
					return;
				}
			},
			getForm: require('../methods/get-form.js')
		},
		watch: {
			value: function(newVal) {
				this.setValue(newVal);
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
				datepicker:true,
				timepicker: false,
				format:'d.m.Y',
				scrollMonth: false,
				scrollTime: false,
				scrollInput: false,
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

			$(this.$refs.addon).find('.input-help').tooltip();
			$(this.$refs.addon).find('.input-info').tooltip();
		}
	};
</script>
