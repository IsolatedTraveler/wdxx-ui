var to = require('to-case');
var ucfirst = require('ucfirst');

import merge from 'merge';

export default function(row, field) {
	if (field.type == 'callback') {
		return getValueForCallback(row, field, this);
	}
	return getValues(this, row, field.data);
}

function getValueForCallback(row, field, vm) {
	if(typeof eval('vm.get'+ucfirst(field.data)+'Attribute') === "undefined") {
		return getValueForCallback(row, field, vm.$parent);
	}

	var value = parseValueAndName(row, field.data);
	return eval('vm.get'+ucfirst(field.data)+'Attribute(value, row, field)');
}

function getValues(instance, row, field) {
	return parseValueAndName(row, field);
}

/**
 * Wenn ein Feld "[]" enthält, dann sollte es als Array übergeben werden. Der Name
 * ist jedoch ein Sting, genauso wie die "[]" darin. Deshalb sorgt diese Funktion dafür,
 * dass der Wert als Arraay übergeben wird.
 */
function parseValueAndName(row, field) {
 	var data = {};


	if (field.indexOf("[") !== -1) {
		var erstername = to.snake(field.slice(0, field.indexOf('[')));
		var inner = field.slice(field.indexOf('[')+1,field.indexOf(']'));
		var after =field.slice(field.indexOf(']')+1);

		if(row[erstername] === null) {
			return '';
		}

		return parseValueAndName(row[erstername], inner + after);
	} else {
		return row[field];
	}
}
