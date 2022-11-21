import ajaxSubmitter from'./submitters/ajax'
import serverSubmitter from './submitters/server'

export default function(e) {
	if (e)
		e.preventDefault();
		
	var data = this.getData();

	var submitter = (this.ajax) ? ajaxSubmitter : serverSubmitter;

	return submitter.submit(this, data);
}
