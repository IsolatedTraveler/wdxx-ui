var to = require('to-case');

export default function(name) {
	var vm = this;

	if (vm.model == false) {return;}
	
	var val = getModelProp(vm.model, name);
	if (val == undefined) {
		return;
	}

	if (!vm.getField(name)) {
		return;
	}

	vm.getField(name).setValue(val);
};

function getModelProp(model, name) {
 	var data = {};

	if (name.indexOf("[") !== -1) {
		var erstername = to.snake(name.slice(0, name.indexOf('[')));
		var inner = name.slice(name.indexOf('[')+1, name.indexOf(']'));
		var after = name.slice(name.indexOf(']')+1);
		return getModelProp(model[erstername], inner + after);
	} else {
		if (model[name] != undefined) {
			return model[name];
		} else if (model[to.snake(name)] != undefined) {
			return model[to.snake(name)];
		} else {
			return undefined;
		}
	}
}
