/**
 * Wenn kein Form definiert ist, also das InputFeld alleine ohne Form eingebunden wird, sollte man trotzdem die Standard-
 * Informationen und Optionen auslesen. Dieses Script beinhaltet diesen Workaround.
 */

var opts = require('z-ui/form/options/options.js');

module.exports = function(key) {
	if (this.getForm() === false) {
		return opts()[key];
	}

	return this.getForm().option(key);
}
