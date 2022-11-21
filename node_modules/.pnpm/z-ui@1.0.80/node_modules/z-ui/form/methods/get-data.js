import merge from 'merge';

export default function() {
	return getValues(this, {});
}

function getValues(instance, values) {
	if (!instance)
		return values;

	if (instance.hasOwnProperty('isField') && instance.isField
		|| instance.hasOwnProperty('isSubmit') && instance.isSubmit && instance.getValue()) {
		return merge.recursive(values, parseValueAndName(instance.$props.name, instance.getValue()));
	}

	instance.$children.forEach(function(child) {
		values = getValues(child, values);
	});

	return values;
}

/**
 * Wenn ein Feld "[]" enthält, dann sollte es als Array übergeben werden. Der Name
 * ist jedoch ein Sting, genauso wie die "[]" darin. Deshalb sorgt diese Funktion dafür,
 * dass der Wert als Arraay übergeben wird.
 */
function parseValueAndName(name, value) {
 	var data = {};

	var originalValue = value;

	if (name.indexOf("[") !== -1) {
		var erstername = name.slice(0, name.indexOf('['));
		var inner = name.slice(name.indexOf('[')+1, name.indexOf(']'));
		var after = name.slice(name.indexOf(']')+1);
		data[erstername] = parseValueAndName(inner + after, value);
	} else {
		data[name] = value;
	}

	return data;
}
