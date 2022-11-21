module.exports = function() {

  var options = {
	  submitLabel: 'Send',
	  texts: {
		  sending: 'Sending form...',
		  unauthorized: 'You\'re not allowed to do this!',
		  notfound: 'This resource wasn\'t found',
		  validationFailed: 'An error occured. Please check your input!'
	  },
	  fieldClass: 'form-control',
	  ckeditor: true,
	  showLabel: true
  };

  return options;
}
