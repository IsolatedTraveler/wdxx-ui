<template>
	<li :class="['status-bar-item', 'layout-'+this.layout, statusClass]">
		<div v-for="message in formattedMessage" v-html="message"></div>
	</li>
</template>

<style lang="less">
	.status-bar-item.layout-october {
		color: #ffffff;
		font-size: 13px;
		padding: 10px 30px 10px 15px;
		border-radius: 4px;

		&.success {background: #8da85e}
		&.error {background: #cc3300}
		&.warning {background: #f0ad4e}
		&.info {background: #5fb6f5}
		&.danger {background: #CC3300;}
	}
</style>

<script>
	export default {
		props: ['layout', 'status', 'messages'],
		computed: {
			formattedMessage: function() {
				if (typeof this.messages == 'string') {
					return [this.messages];
				}

				return this.messages;
			},
			statusClass: function() {
				if (this.layout == 'bootstrap') {
					return 'alert alert-'+ this.status;
				}

				return this.status;
			}
		}
	}
</script>
