export default function(vm) {
	if (vm.url != '') {
		axios.get(vm.url).then(function(ret) {
			if (!vm.model) {
				vm.model = ret.data;
				vm.$events.fire('model-loaded', vm);
			}
		});
	}
};

