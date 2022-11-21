var ucfirst = require('ucfirst');
var Event = require('vue-events');

var Session2 = require('./SessionCompiled.js');

module.exports = {
	clearSession: {
		mounted: function() {
			if (this.$router == undefined) {return;}

			var vm = this;

			this.$router.afterEach(function(to, from) {
				vm.$events.fire('messageClear');
				var messages = vm.$session.getAllFlash();
				Object.keys(messages).forEach(function(key) {
					vm.$events.fire('message'+ucfirst(key), messages[key]);
				});
				vm.$session.clearFlash();
			});
		}
	},
	session: {
		install: function(Vue, options) {
			Vue.use(Event.default);

			var s = new Session2;

			Vue.mixin({
				beforeCreate: function() {
					Vue.prototype.$session = s;
				},
			});
		}
	}
}
