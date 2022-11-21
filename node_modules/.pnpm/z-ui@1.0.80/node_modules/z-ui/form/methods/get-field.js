import merge from 'merge';

export default function(value) {
	return getField(this, value);
}

function getField(instance, value) {
	if (!instance)
		return false;

	if (
		(
			(instance.hasOwnProperty('isField') && instance.isField)
			|| (instance.hasOwnProperty('isSubmit') && instance.isSubmit)
		) && instance.$props.name == dotToArray(value) 
	) {
		return instance;
	}

	if(instance.hasOwnProperty('$children') && instance.$children.length) {
		var f = false;

		instance.$children.forEach(function(child) {
			var thisF = getField(child, value);
			if(thisF) {
				f = thisF;
			}
		});

		return f;
	}


	return false;
}

function dotToArray(v) {
	if (v.indexOf('.') != -1) {
		var parts = v.split('.');
		var returnVal = parts.shift();
		parts.forEach(function(thisV) {
			returnVal += '['+thisV+']';
		});
		return returnVal;
	}

	return v;
}
