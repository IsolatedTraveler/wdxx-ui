<template>
	<div class="vf-field vf-field-password form-group">
		<label v-if="getForm().option('showLabel')" for="">{{ label }}</label>

		<input type="password" :name="name" :class="getForm().option('fieldClass')" v-model="curValue" :placeholder="label" v-if="!hasAddons">

		<div v-if="hasAddons" class="input-group" ref="addon">
			<input type="password" :class="getForm().option('fieldClass')" v-model="curValue" :placeholder="label">
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
	.vf-field-password {
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
			}
		},
		methods: {
			getValue: function() {
				return this.curValue;
			},
			setValue: function(value) {
				this.curValue = newVal;
			},
			getForm: require('../methods/get-form.js')
		},
		watch: {
			value: function(newVal) {
				this.setValue(newVal);
			}
		},
		directives: {
			tooltip: require('z-vuestrap2/tooltip.js').default
		},
		computed: {
			hasAddons: function() {
				return this.help != '' || this.info != '';
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

			this.$on('parseError', function(error) {
				vm.error = error;
			});

			vm.$events.listen('cleanFormErrors', function(error) {
				vm.error = false;
			});

			$(this.$refs.addon).find('.input-group-addon').tooltip();
		}
	};
</script>
