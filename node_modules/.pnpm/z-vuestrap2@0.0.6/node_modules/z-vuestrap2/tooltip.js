require('!style-loader!css-loader!less-loader!./less/tooltip.less');

(function($) {
	$.fn.zTooltip = function(params) {

		var el = this;

		if (params == 'destroy') {
			$('#tooltip-'+$(el).data('tooltipid')).animate({opacity: 0}, 300, 'swing', function() {
				$('#tooltip-'+$(el).data('tooltipid')).remove();
			});
			return;
		}

		var id = createId();
		$('body').append('<div class="ztooltip ztooltip-default" id="tooltip-'+id+'">'+params.content+'</div>');
		setPosition('#tooltip-'+id, this);

		$('#tooltip-'+id).css({opacity: 0}).animate({opacity: 0.8}, 300);

		$(this).data('tooltipid', id);
	}

	function createId() {
		return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10)
			+ Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10);
	}

	function setLeft(el, left) {
		$(el).css({left: left});
	}

	function setRight(el, right) {
		$(el).css({right: right});
	}

	function setTop(el, top) {
		$(el).css({top: top});
	}

	function setPosition(tooltip, anker) {
		var tooltip = $(tooltip);
		var tooltipWidth = tooltip.outerWidth();
		var tooltipHeight = tooltip.outerHeight();
		var togglerOffset = anker.offset();
		var togglerWidth = anker.innerWidth();
		var togglerHeight = anker.innerHeight();

		// Place tooltip in the middle of th toggler element
		setLeft(tooltip, togglerOffset.left + (tooltipWidth * -1) / 2 + togglerWidth / 2);
		setTop(tooltip, togglerOffset.top + (tooltipHeight + 10) * -1);


		if (togglerOffset.left + (togglerWidth + tooltipWidth) / 2 + 15 > $(window).width()) {
			setLeft(tooltip, togglerOffset.left + $(window).width() - togglerOffset.left - tooltipWidth - 15);
			var arrowPosition = (togglerOffset.left - $(window).width() + 10 + tooltipWidth + togglerWidth) + 'px';

			var arrowClass = 'arrow-'+createId();

			$(tooltip).addClass(arrowClass);

			document.styleSheets[0].insertRule('.'+arrowClass+'::before {left: '+arrowPosition+' !important}', 0);
			document.styleSheets[0].insertRule('.'+arrowClass+'::after {left: '+arrowPosition+' !important}', 0);
		}
	}
}(jQuery));

export default {
	bind: function(el, binding) {
		$(el).hover(function() {
			$(this).zTooltip({
				content: binding.value
			});
		}, function() {
			$(this).zTooltip('destroy');
		});
	},
	update: function(el, binding) {
	}
}
