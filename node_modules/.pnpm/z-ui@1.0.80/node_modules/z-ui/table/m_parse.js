var ucfirst = require('ucfirst');
var moment = require('moment');
var accounting = require('accounting');

export default function(value, heading, vm) {
	if (heading.type == undefined) {
		return parseString(value);
	}

	if (heading.type == 'callback') {
		return value;
	}

	return eval('parse' + ucfirst(heading.type) + '(value, vm, heading);');
}

function parseBoolean(value, vm, heading) {
	value = (value == '0' || value == 'false' || !value) ? 0 : 1;


	var options = vm.getTable(vm).opts;
	if (heading.booleanIcon) {
		var boolOptions = options.booleanIconTypes[heading.booleanIcon];
		var type = heading.booleanIcon;
	} else {
		var boolOptions = options.booleanIconTypes[options.booleanIconType];
		var type = options.booleanIconType;
	}


	if (type == 'font-awesome') {
		return '<span class="fa fa-'+boolOptions[value].icon+'" style="color: '+boolOptions[value].color+';"></span>';
	}

	if (type == 'string') {
		return boolOptions[value];
	}
}

function parseIcon(value, vm, heading) {
	var icon = heading.icons.filter(function(icon) {
		return icon.value == value;
	});

	if (icon.length == 0) {
		return '';
	} else {
		icon = icon[0];
	}

	value = (value == '0' || value == 'false' || !value) ? 0 : 1;

	var color = (typeof icon.color == undefined) ? black : icon.color;

	return '<span class="fa fa-'+icon.icon+'" style="color: '+color+';"></span>';
}

function parseString(value) {
	return value;
}

function parseImage(value, vm, heading) {
	var options = vm.getTable(vm).opts;

	var width = (heading.width == undefined) ? options.imageWidth : heading.width;

	return '<img src="'+value+'" width="'+width+'">';
}

function parseDate(value, vm, heading) {
	return moment(value).format('DD.MM.YYYY');
}

function parseMoney(value, vm, heading) {
	return accounting.formatMoney(value / 100, "€", 2, ".", ",", '%v %s'); 
}
