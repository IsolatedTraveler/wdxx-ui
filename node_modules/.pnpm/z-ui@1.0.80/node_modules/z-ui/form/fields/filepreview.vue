<template>
	<div class="vf-field-child vf-field-file-child">
		<div ref="preview" class="preview" :style="{'background-image': 'url('+img+')'}">
			<span title="Löschen" @click="del" class="delete-button fa fa-close"></span>
		</div>
	</div>
</template>

<style lang="less">
	.vf-field-child.vf-field-file-child {
		.preview {
			margin-bottom: 8px;
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
				unique: '',
				img: ''
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
		watch: {
			data: function() {
				this.update();
			}
		},
		methods: {
			update: function() {
				var vm = this;

				var preview = this.$refs.preview;
				var file = this.data.data;
				var reader  = new FileReader();

				reader.addEventListener("load", function () {
					vm.img = reader.result;
				}, false);

				if (file) {
					reader.readAsDataURL(file);
				}
			},
			del: function() {
				this.$emit('deletepreview', this.data);
			}
		},
		mounted: function() {
			this.update();
		}
	}
</script>
