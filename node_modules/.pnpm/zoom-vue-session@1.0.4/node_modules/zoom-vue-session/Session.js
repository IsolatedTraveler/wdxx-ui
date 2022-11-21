module.exports = class {
	constructor() {
		this.data = [];

		this.flashData = {};
	}

	clearFlash() {
		this.flashData = {};
	}

	clear() {
		this.data = {};
	}

	flash(msg, type = 'success') {
		this.flashData[type.toLowerCase()] = msg;
	}

	getAllFlash() {
		return this.flashData;
	}
};
