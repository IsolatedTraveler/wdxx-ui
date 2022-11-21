<template>
	<a href="#" @click.prevent="doPrev" :class="['btn', 'btn-primary', {'disabled': this.active === false}]"><slot></slot></a>
</template>

<script>
	module.exports = {
		props: {
			target: {
				default: '',
				type: String,
				required: true
			},
			id: {
				default: 'w-prev',
				type: String,
				required: false
			}
		},
		data: function() {
			return {
				active: true
			};
		},
		methods: {
			doPrev: function() {
				this.getRef(this.target).$emit('prev');
			},
			getRef: require('../methods/get-ref.js')
		},
		mounted: function() {
			var vm = this;
			vm.$events.listen('deactivate-wizard-button', function(ref) {
				if (ref == vm.id) {
					vm.active = false;
				}
			});
			vm.$events.listen('activate-wizard-button', function(ref) {
				if (ref == vm.id) {
					vm.active = true;
				}
			});
		}
	};
</script>
