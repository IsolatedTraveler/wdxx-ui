<template></template>

<script>
	module.exports = {
		props: {
			title: {
				default: ''
			},
			subtitle: {
				default: ''
			},
		},
		mounted: function() {
			this.$events.fire('set-heading', this.title);
			this.$events.fire('set-subheading', this.subtitle);
		}
	};
</script>
