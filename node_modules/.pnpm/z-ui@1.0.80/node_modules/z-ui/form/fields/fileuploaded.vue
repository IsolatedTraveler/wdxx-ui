<template>
	<div class="vf-field-child vf-field-file-child">
		<div ref="preview" class="preview" :style="{'background-image': 'url('+data.url+')'}">
			<span title="Löschen" @click="del" class="delete-button fa fa-close"></span>
		</div>
		<slot></slot>
	</div>
</template>

<style lang="less">
	.vf-field-child.vf-field-file-child {
		.preview {
			position: relative;
			width: 100%;
			padding-top: 66%;
			background-size: cover;
			background-position: center center;
			.delete-button {
				position: absolute;
				top: 14px;
				right: 14px;
				font-size: 20px;
				color: white;
				cursor: pointer;
				width: auto;
			}
		}
	}
</style>

<script>
	export default {
		data: function() {
			return  {
			};
		},
		props: {
			data: {
				required: true
			},
			k: {
				required: true
			}
		},
		methods: {
			del: function() {
				this.$emit('deleteuploaded', this.data);
			}
		},
		mounted: function() {
			var vm = this;

			this.$children.forEach(function(field) {
				if (field.isField) {
					field.$on('change', function(newVal) {
						vm.data[field.name] = newVal;
					});
				}
				if (vm.data[field.name] != undefined) {
					field.setValue(vm.data[field.name]);
				}

			});
		}
	}
</script>
