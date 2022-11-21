<template>
	<div class="vf-field-checkboxes-wrapper" ref="checkboxeswrapper">
		<span class="checkboxes-label">{{ label }}</span>
		<div class="vf-field-checkboxes" v-for="(cb, ind) in realItems">
			<div :class="['checkboxes-check', {'active': isActive(ind)}]" :id="'checkboxes-'+nameToUnderscore(name)+'-'+ind" @click="toggle(ind)">
				<span v-if="isActive(ind)" class="fa fa-check"></span>
			</div>
			<span class="checkbox-label" @click.self="toggle(ind)">{{ cb[itemlabel] }}</span>
			<span class="badge fa fa-question item-help" v-if="itemhelp !== '' && cb[itemhelp] != undefined" data-toggle="tooltip" data-original-title="" :title="cb[itemhelp]"></span>
		</div>
		<div v-if="error !== false">
			<span class="label label-danger" >{{ error }}</span>
		</div>
	</div>
</template>

<style lang="less">
	@import '~uiStyle';

	.vf-field-checkboxes-wrapper {
		margin-bottom: 15px;
		.checkboxes-label {
			font-weight: bold;
		}
	}
	.vf-field-checkboxes {
		margin: 3px 0;
		font-size: @font-size-base;
		.badge {
			display: inline-block !important;
		}
		.checkboxes-check {
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
		.checkbox-label {
			cursor: pointer;
			opacity: 0.9;
			&:hover {
				opacity: 1;
			}
		}
		input {
			visibility: hidden;
		}
		min-height: 10px;

	}
</style>

<script>
	require('font-awesome-webpack');
	require('bootstrap');

	export default {
		props: {
			label: {
				default: '&nbsp;',
				required: false
			},
			name: {
				required: true,
			},
			value: {
				default: function() {return [];},
				type: Array
			},
			url: {
				type: String,
				required: false
			},
			itemlabel: {
				default: 'title',
				required: false,
				type: String
			},
			itemhelp: {
				default: '',
				required: false,
				type: String
			},
			items: {
				default: false
			}
		},
		methods: {
			getValue: function() {
				return this.curValue;
			},
			setValue: function(newVal) {
				this.curValue = newVal.map(function(item) {
					if (typeof item == 'object') {
						return item.id;
					}

					return item;
				});
			},
			nameToUnderscore: function(name) {
				return name.replace('[', '_').replace(']', '_');
			},
			toggle: function(ind) {
				var vm = this;
				var item = this.realItems[ind];

				if (this.isActive(ind)) {
					this.curValue = this.curValue.filter(function(c) {
						return c != item.id;
					});
				} else {
					this.curValue.push(item.id);
				}

				this.$events.fire('vf-checkboxes-change', this.curValue, this.name);
				this.$events.fire('vf-checkboxes-change-'+this.name, this.curValue);
			},
			isActive: function(ind) {
				var item = this.realItems[ind];
				return this.curValue.find(function(c) {
					return c == item.id;
				}) != undefined;
			},
			getForm: require('../methods/get-form.js')
		},
		watch: {
			value: function(newVal) {
				this.setValue(newVal);
			}
		},
		data: function() {
			return {
				isField: true,
				curValue: function() {return [];},
				error: false,
				realItems: false
			}
		},
		mounted: function() {
			var vm = this;

			this.curValue = this.value.map(function(item) {
				if (typeof item == 'object') {
					return item.id;
				}

				return item;
			});

			if (this.items !== false) {
				vm.realItems = this.items;

				vm.$nextTick(function() {
					$(vm.$refs.checkboxeswrapper).find('.badge').tooltip({html: true});
				});
			} else {
				axios.get(this.url).then(function(res) {
					vm.realItems = res.data;

					vm.$nextTick(function() {
						$(vm.$refs.checkboxeswrapper).find('.badge').tooltip({html: true});
					});
				});
			}

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

		}
	};
</script>
