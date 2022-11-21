'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
	function _class() {
		_classCallCheck(this, _class);

		this.data = [];

		this.flashData = {};
	}

	_createClass(_class, [{
		key: 'clearFlash',
		value: function clearFlash() {
			this.flashData = {};
		}
	}, {
		key: 'clear',
		value: function clear() {
			this.data = {};
		}
	}, {
		key: 'flash',
		value: function flash(msg) {
			var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'success';

			this.flashData[type.toLowerCase()] = msg;
		}
	}, {
		key: 'getAllFlash',
		value: function getAllFlash() {
			return this.flashData;
		}
	}]);

	return _class;
}();
