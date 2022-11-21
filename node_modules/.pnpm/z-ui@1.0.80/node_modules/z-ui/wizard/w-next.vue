<template>
	<a href="#" @click.prevent="doNext" :class="['btn', 'btn-primary', {'disabled': this.active === false}]"><slot></slot></a>
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
				default: 'w-next',
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
			doNext: function() {
				this.getRef(this.target).$emit('next');
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
