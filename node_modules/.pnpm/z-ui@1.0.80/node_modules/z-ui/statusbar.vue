<template>
	<div :class="['formStatusBar', {'container-fluid': container === true}, 'layout-'+layout]" :style="{top: top+'px'}">
		<transition-group tag="ul" name="statusbaritem">
			<statusbaritem v-for="(item, ind) in items" :layout="layout" :status="item.status" :messages="item.messages" :key="ind" class="statusbaritem-item"></statusbaritem>
		</transition-group>
	</div>
</template>

<style lang="less">
	.formStatusBar {
		&.layout-october {
			position: fixed;
			width: 100%;
			left: 0;
			z-index: 10000;
			display: block;
			ul {
				margin: 0 auto;
				max-width: 800px;
				width: 90%;
				list-style-type: none;
				padding-left: 0;
			}
	 	}
	}

	.statusbaritem-item {
		display: block;
		margin-bottom: 10px;
	}
	.statusbaritem-enter-active, .statusbaritem-leave-active {
		transition: opacity 1s, transform 1s;
	}
	.statusbaritem-enter {
		opacity: 0;
		transform: translateY(-20px);
	}
	.statusbaritem-leave-to {
		opacity: 0;
		transform: translateY(20px);
	}
	.statusbaritem-move {
	  transition: transform 1s;
	}
</style>

<script>
	module.exports = {
		data: function() {
			return {
				items: []
			};
		},
		components: {
			'statusbaritem': require('./status-bar-item.vue')
		},
		props: {
			hideAfter: {
				default: 3000,
			},
			container: {
				default: false,
				type: Boolean
			},
			id: {
				default: undefined
			},
			layout: {
				type: String,
				default: 'bootstrap',
				required: false
			},
			top: {
				default: 20
			}
		},
		computed: {
			realHideAfter: function() {
				if (this.hideAfter == false || this.hideAfter == undefined) {
					return false;
				}

				return this.hideAfter;
			}
		},
		methods: {
			_setMessages: function (messages, status) {
				var vm = this;

				var hash = Math.random().toString().slice(2);

				this.items.unshift({status: status, messages: messages, hideAfter: vm.realHideAfter, hash: hash});
				console.log(vm.realHideAfter);

				if (vm.realHideAfter) {
					window.setTimeout(function() {
						vm.items = vm.items.filter(function(item) {
							return item.hash != hash;
						});
					}, vm.realHideAfter);
				}
			},
			clear() {
				this.messages = [];
				this.$events.fire('statusbarcleared', this);
			}
		},
		mounted: function() {
			var vm = this;
			if (vm.$events) {
				vm.$events.listen('messageDanger', function(messages, id) {
					if (vm.id != id) {return;}
					vm._setMessages(messages, 'danger');
				});

				vm.$events.listen('messageSuccess', function(messages, id) {
					if (vm.id != id) {return;}
					vm._setMessages(messages, 'success');
				});
				vm.$events.listen('messageWarning', function(messages, id) {
					if (vm.id != id) {return;}
					vm._setMessages(messages, 'warning');
				});
				vm.$events.listen('messageInfo', function(messages, id) {
					if (vm.id != id) {return;}
					vm._setMessages(messages, 'info');
				});
				vm.$events.listen('messageClear', function(id) {
					if (vm.id != id) {return;}
					vm.clear();
				});
			} else {
				this.$on('messageDanger', function(messages, id) {
					if (vm.id != id) {return;}
					vm._setMessages(messages, 'danger');
				});

				this.$on('messageSuccess', function(messages, id) {
					if (vm.id != id) {return;}
					vm._setMessages(messages, 'success');
				});
				this.$on('messageWarning', function(messages, id) {
					if (vm.id != id) {return;}
					vm._setMessages(messages, 'warning');
				});
				this.$on('messageInfo', function(messages, id) {
					if (vm.id != id) {return;}
					vm._setMessages(messages, 'info');
				});
				this.$on('messageClear', function(id) {
					if (vm.id != id) {return;}
					vm.clear();
				});
			}
		}
	}
</script>
