<template>
<div class="cp-wrap cp-panel">
    <div class="panel">
        <div class="panel-heading">
			<h3 v-if="title" :class="['panel-title', {'smalltitle': smalltitle}]">{{ title }}</h3>
			<slot name="tabs"></slot>
			<slot name="action"></slot>
			<div v-if="closeable" class="close-button" @click="$emit('close')"><span class="fa fa-close"></span></div>
        </div>
        <div ref="body" class="panel-body">
			<div v-if="loading" class="spinner loading">
				<div class="double-bounce1"></div>
				<div class="double-bounce2"></div>
			</div>
			<slot></slot>
        </div>
    </div>
</div>
</template>

<style lang="less">
	@import "~uiStyle";

	.cp-wrap.cp-panel {
		margin-bottom: 0;
		.panel {
			border: 0;
			border-radius: 3px;
			box-shadow: 0 1px 1px rgba(0,0,0,0.2);
			background-color: #fff;
			display: flex;
			flex-direction: column;
			flex: 0 0 100%;
			.panel-heading {
				height: 41px;
    			flex: 0 0 41px;
    			padding: 0 14px;
				border-top-left-radius: 2px;
				border-top-right-radius: 2px;
				color: #4d627b;
				border-bottom: 1px solid rgba(0,0,0,0.1);
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				& > .tabs {
					align-self: flex-end;
					flex-grow: 1;
					display: flex;
				}
				.close-button {
					font-size: 20px;
					cursor: pointer;
				}
				.panel-title {
					font-weight: 600;
					font-size: 1.2em;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					&.smalltitle {
						font-size: 1.0em;
					}
				}
			}
			.panel-body {
				min-height: 0;
				margin: 20px;
				position: relative;
				padding: 0;
				overflow: hidden;
				.loading {
					.double-bounce1, .double-bounce2 {
						background: @primary;
					}
				}
				&.ps--active-y {
					padding-right: 10px;
				}
				.table.table-striped {
					margin-bottom: 0;
					&>tbody>tr:nth-child(2n+1) {
						background-color: #f5f7f8;
					}
					& > tbody td {
						border-top-color: rgba(0,0,0,0.09);
						color: #8f9ea6;
					}
					&>thead {
						color: #4d627b;
					}
				}
			}
		}
	}
</style>

<script>
	import PerfectScrollbar from 'perfect-scrollbar';

	export default {
		data: function() {
			return  {
				ps: false
			};
		},
		props: {
			title: {
				type: String,
				required: false,
				default: ''
			},
			closeable: {
				type: Boolean,
				default: false
			},
			smalltitle: {
				type: Boolean,
				default: false
			},
			loading: {
				type: Boolean,
				default: false
			},
			scrollbar: {
				default: true,
				type: Boolean
			}
		},
		mounted: function() {
			var vm = this;

			if (this.scrollbar) {
				this.ps = new PerfectScrollbar(this.$refs.body);

				this.$events.listen('update-scrollbar', function() {
					vm.ps.update();
				});
			}
		}
	}
</script>
