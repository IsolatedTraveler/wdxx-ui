<template>
	<div class="vf-field vf-field-textarea form-group">
		<label v-if="getForm().option('showLabel')" for="">{{ label }}</label>

		<p v-if="description">{{ description }}</p>
		<textarea :class="[getForm().option('fieldClass'), {'ckeditor': realCkeditor}]" v-model="curValue" :placeholder="label" ref="ta"></textarea>

		<div v-if="help != ''">
			<span class="fa fa-question input-help" data-toggle="tooltip" data-original-title="" :title="help"></span>
		</div>
		<div v-if="info != ''">
			<span class="fa fa-info input-info" data-toggle="tooltip" data-original-title="" :title="info"></span>
		</div>

		<span class="label label-danger" v-if="error !== false">{{ error }}</span>
	</div>
</template>

<style lang="less">
	@import '~uiStyle';
	.vf-field-textarea {
		textarea {
			.field-focus(@field-focus);
		}
		label {
			color: @field-label-color;
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
				error: false,
				id: '',
				editorInstance: false
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
			ckeditor: {
				default: false,
				type: Boolean
			},
			description: {
				default: ''
			}
		},
		methods: {
			getValue: function() {
				return this.curValue;
			},
			setValue: function(newVal) {
				console.log('value set');
				var vm = this;

				this.curValue = newVal;

				var i = this.getEditorInstance();
				if (i !== false) {
					window.setTimeout(function() {
						i.setData(newVal);
						$('#'+vm.id).trigger('change');
					});
				}
			},
			getForm: require('../methods/get-form.js'),
			getOption: require('../methods/get-form-option.js'),
			storeId: function() {
				this.id = Math.random().toString(36).replace(/[^a-z]+/g, '')
				+ Math.random().toString(36).replace(/[^a-z]+/g, '');
			},
			getEditorInstance: function() {
				var vm = this;

				if (this.editorInstance !== false) {
					return this.editorInstance;
				}

				if (!window.CKEDITOR) {return false;}

				var ck = window.CKEDITOR.replace(this.id);
				ck.on('change', function() {
					ck.updateElement();
					$('#'+vm.id).trigger('change');
					vm.curValue = $('#'+vm.id).val();
				});

				this.editorInstance = ck;
				return ck;
			}
		},
		watch: {
			value: function(newVal) {
				console.log('IOIO');
				this.setValue(newVal);
			}
		},
		computed: {
			hasAddons: function() {
				return this.help != '' || this.info != '';
			},
			realCkeditor: function() {
				return this.ckeditor || this.getForm().option('ckeditor');
			}
		},
		mounted: function() {
			var vm = this;

			this.storeId();

			if (this.realCkeditor) {

				$(this.$refs.ta).attr('id', this.id);

				var i = this.getEditorInstance();

				if (i !== false) {
					i.on('instanceReady', function() {
						vm.getForm().requireValue(vm.name);
					});
				}
			}


			this.$events.listen('model-loaded', function(form) {
				if (form == vm.getForm()) {
					vm.getForm().requireValue(vm.name);
				}

				if (vm.getEditorInstance() !== false) {
					vm.getEditorInstance().on('instanceReady', function() {
						if (form == vm.getForm()) {
							vm.getForm().requireValue(vm.name);
						}
					});
				}
			});

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
