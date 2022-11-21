<template>
	<div id="page-heading" :class="['clearfix', {'line': line === true, 'small': small === true}]">
		<div >
			<div class="col-xs-12">
				<div :class="['title', {'container': container == true}]" v-if="title != ''">
					{{ title }}
				</div>
				<div :class="['subtitle', {'container': container == true}]" v-if="subtitle != ''">
					{{ subtitle }}
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="less">
	@import '~uiStyle';

	#page-heading {
		position: relative;
		background: @page-heading-bg;
		padding-top: 20px;
		padding-bottom: 20px;
    	box-shadow: 0 2px 2px -2px @page-heading-border;
		.title {
			font-size: 18px;
			font-weight: 700;
			color: #414C59;
		}
		.subtitle {
			opacity: .6;
			font-size: 13px;
		}
		&.small {
			padding-bottom: 7px;
			padding-top: 7px;
		}
	}
</style>

<script>
	module.exports = {
		props: {
			title: {
				default: ''
			},
			subtitle: {
				default: ''
			},
			line: {
				default: false,
				type: Boolean
			},
			small: {
				type: Boolean,
				default: false
			},
			container: {
				type: Boolean,
				default: false
			}
		}
	};
</script>
