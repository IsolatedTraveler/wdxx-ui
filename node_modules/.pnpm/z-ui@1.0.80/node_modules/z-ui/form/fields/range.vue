<template>
	<div class="vf-field vf-field-range form-group">
		<label v-if="getOption('formOption') && label != false" for="">{{ label }}</label>

		<input ref="input" type="range" :min="min" :max="max" v-model="curValue" :placeholder="label" v-if="!hasAddons">
		<div class="range-input-value">{{ curValue }}{{ afterlabel }}</div>

		<div v-if="hasAddons" ref="addon">
			<input ref="input" type="range" :min="min" :max="max" :class="getForm().option('fieldClass')" v-model="curValue">
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
	.vf-field-range {
		label {
			color: @field-label-color;
		}
		& > input {
			-webkit-appearance: none;
			width: 100%;
			background: transparent;
			&::-webkit-slider-thumb {
				-webkit-appearance: none;
			}
			&::-ms-track {
				width: 100%;
				cursor: pointer;
				background: transparent; 
				border-color: transparent;
				color: transparent;
			}
			&:focus {
				outline: 0;
			}
			&::-webkit-slider-thumb {
				-webkit-appearance: none;
				border: 1px solid #000000;
				height: 16px;
				width: 16px;
				border-radius: 8px;
				background: #ffffff;
				cursor: pointer;
				margin-top: -5px;
			}
			&::-moz-range-thumb {
				border: 1px solid #000000;
				height: 16px;
				width: 16px;
				border-radius: 8px;
				background: #ffffff;
				cursor: pointer;
			}
			&::-ms-thumb {
				border: 1px solid #000000;
				height: 16px;
				width: 16px;
				border-radius: 8px;
				background: #ffffff;
				cursor: pointer;
			}

			//Track
			&::-webkit-slider-runnable-track {
				width: 100%;
				height: 8.4px;
				cursor: pointer;
				background: @range-bg;
				border-radius: 1.3px;
				border: 0.2px solid #010101;
			}

			&:focus::-webkit-slider-runnable-track {
				background: lighten(@range-bg, 10%);
			}

			&::-moz-range-track {
				width: 100%;
				height: 8.4px;
				cursor: pointer;
				background: @range-bg;
				border-radius: 1.3px;
				border: 0.2px solid #010101;
			}

			&::-ms-track {
				width: 100%;
				height: 8.4px;
				cursor: pointer;
				background: transparent;
				border-color: transparent;
				border-width: 16px 0;
				color: transparent;
			}
			&::-ms-fill-lower {
				background: #2a6495;
				border: 0.2px solid #010101;
				border-radius: 2.6px;
			}
			&:focus::-ms-fill-lower {
				background: @range-bg;
			}
			&::-ms-fill-upper {
				background: @range-bg;
				border: 0.2px solid #010101;
				border-radius: 2.6px;
			}
			&:focus::-ms-fill-upper {
				background: #367ebd;
			}
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
			},
			afterlabel: {
				type: String,
				default: ''
			},
			min: {
				type: String,
				default: '0'
			},
			max: {
				type: String,
				defeult: '100'
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
			getOption: require('../methods/get-form-option.js')
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
		mounted: function() {
			var vm = this;
			this.curValue = this.value;

			console.log('UUU');
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
				$(this.$refs.addon).find('.input-help').tooltip();
				$(this.$refs.addon).find('.input-info').tooltip();
			}
		}
	};
</script>
