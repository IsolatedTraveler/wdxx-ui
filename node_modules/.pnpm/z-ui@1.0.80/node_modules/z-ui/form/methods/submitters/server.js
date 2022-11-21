import swal from 'sweetalert2';

export default {
	submit: function(vm, data) {
		if (vm.confirm != '') {
			swal({
				title: vm.confirm,
				text: "You won't be able to revert this!",
				type: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Ja, löschen!',
				cancelButtonText: 'Nein danke!',
				confirmButtonClass: 'btn btn-success no-right-border-radius',
				cancelButtonClass: 'btn btn-danger no-left-border-radius',
				buttonsStyling: false
			}).then(function () {
				askSubmitButton(vm, data);
			}, function (dismiss) { });
		} else {
			askSubmitButton(vm, data);
		}
	}
}

function askSubmitButton(vm, data) {
	if (vm.submitConfirm != false) {
		swal({
			title: vm.submitConfirm.v,
			text: "",
			type: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Ja, bitte!',
			cancelButtonText: 'Nein danke!',
			confirmButtonClass: 'btn btn-success',
			cancelButtonClass: 'btn btn-danger',
			buttonsStyling: false
		}).then(function () {
			submit(vm, data);
		}, function (dismiss) { });
	} else {
		submit(vm, data);
	}
}

function submit(vm, data) {
	vm.$events.fire('cleanFormErrors');

	vm.fields = vm.modifyData(data);

	if ($('meta[name="csrf-token"]').length) {
		vm.fields['_token'] = $('meta[name="csrf-token"]').attr('content');
	}

	vm.$nextTick(function() {
		$(vm.$refs.inlineform).submit();
	});

	return true;

	axios[method](vm.action, vm.modifyData(data)).then(function(ret){
		vm.$events.fire('messageClear', vm.statusbar);

		if (vm.redirect.length > 0 && vm.$router) {
			if (vm.$session) {
				vm.$session.flash(vm.$props.msg);
			}
			vm.$router.push({name: vm.redirect});
			return;
		}

		vm.$emit('afterpersist', data, ret.data);

		if (ret.request.responseURL && vm.$props.follow) {
			window.location.href = ret.request.responseURL;
			return;
		}

		if (vm.$props.msg != '') {
			vm.$events.fire('messageSuccess', vm.$props.msg, vm.statusbar);
		}

		var table = vm.getTable();
		if (table) {
			table.$emit('row-deleted', {'data': data, 'url': vm.action});
		}
	});

	return true;
}

function objOrString(v) {
	if (typeof v == 'object') {
		return v.join(', ');
	}

	return v;
}
