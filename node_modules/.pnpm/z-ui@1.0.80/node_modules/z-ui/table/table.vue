<template>
	<table :class="['table', 'table-striped', {'table-bordered': border}]">
		<thead>
			<tr> 
				<th v-for="heading in parsedHeadings">
					{{ heading.title }}
				</th>
				<th v-if="!noactions">
					Aktion
				</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="row in data">
				<td v-for="heading in parsedHeadings" v-html="parse(getData(row, heading), heading)"></td>
				<td v-if="!noactions" class="action-cell">
					<vf-form :msg="deletemsg" :action="'/api/'+controller+'/'+row.id" method="delete" ajax confirm="Wollen Sie diesen Eintrag wirklich löschen?" @afterpersist="$emit('deleted', row)">
						<buttonbar :margin="false">
							<v-link
								v-for="(action,ind) in actions"
								:key="ind"
								v-on:event="triggerActionEvent(row, action)"
								:event="(action.event) ? action.event : action.action"
								:href="row[action.href]"
								:icon="action.icon"
								:target="(action.target) ? action.target : '_SELF'"
								:route="action.route"
								:params="{id: row.id}"
								cls="btn-link"
							></v-link>
							<v-link
								:route="controller+'.edit'"
								icon="pencil"
								:params="{id: row.id}"
								v-if="editaction"
								cls="btn-link"
							>
							</v-link>
							<vf-submit  icon="trash" size="xs" name="id" :value="row.id" v-if="deleteaction" cls="btn-link"><span class="fa fa-trash"></span></vf-submit>
						</buttonbar>
					</vf-form>
				</td>
			</tr>
		</tbody>
	</table>
</template>

<style lang="less">
	.action-cell {
		form {
			display: inline;	
		}
		.vf-field {
			display: inline;
		}
	}
</style>

<script>
	var defaultOptions = require('./options/options.js').default;
	window.globalTableOptions = (window.globalTableOptions == undefined) ? {} : window.globalTableOptions;
	var merge = require('merge');

	module.exports = {
		data: function() {
			return {
				data: [],
				isTable: true
			};
		},
		props: {
			headings: {
				required: true
			},
			noactions: {
				type: Boolean,
				default: false
			},
			url: {
				required: false,
				type: String
			},
			collection: {
				required: false,
			},
			controller: {
				required: true,
				type: String
			},
			deletemsg: {
				required: false,
				type: String,
				default: ''
			},
			options: {
				default: function() {return {};},
				type: Object
			},
			actions: {
				default: function() {return [];}
			},
			deleteaction: {
				type: Boolean,
				default: true
			},
			editaction: {
				type: Boolean,
				default: true
			},
			border: {
				type: Boolean,
				default: true
			}
		},
		computed: {
			parsedHeadings: function() {
				if (typeof this.headings == 'string') {
					return this.headings.split('|').map(function(heading) {
						data = {};
						data['title'] = heading;
						data['data'] = heading.toLowerCase();
						return data;
					});	
				}

				if (typeof this.headings == 'object') {
					return this.headings;
				}
			},
			opts: function() {	
 				let options = merge.recursive(defaultOptions(), window.globalTableOptions);
 				return merge.recursive(options, this.options);
			},
		},
		methods: {
			getData: require('./m_get-data.js').default,
			getTable: function() {
				var getTable = require('./m_get-table.js');
				return getTable(this);
			},
			parse: function(value, heading) {
				var parse = require('./m_parse.js').default;
				return parse(value, heading, this);
			},
			triggerActionEvent: function(row, action) {
				if (action.event) {
					this.$emit(action.event, row, action);
				} else if (action.action) {
					//Handle inner action for the table
				}
			},
			reload: function() {
				var vm = this;

				if (this.collection) {
					this.data = this.collection;
					return;
				}

				axios.get(this.url).then(function(ret) {
					vm.data = ret.data;
				});
			}
		},
		watch: {
			url: function(url) {
				var vm = this;

				vm.reload();
			},
			collection: function(url) {
				var vm = this;

				vm.reload();
			}
		},
		mounted: function() {
			var vm = this;

			this.reload();

			this.$on('row-deleted', function(data) {
				if (data.hasOwnProperty('url')) {
					var localId = data.url.replace('/api', '').replace('/'+vm.controller+'/', '');

					vm.data = vm.data.filter(function(child) {
						return child.id != localId;
					});
				}
			});
		}
	};
</script>
