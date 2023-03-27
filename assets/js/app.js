(function ($) {
	'use strict';
	let windowWidth = $(window).width();

	const initCounter = () => {
		let i = 0;
		if ($('#initCounter').length === 0) return false;
		$(window).scroll(() => {
			let counterOffsetTop = $('#initCounter').offset().top - window.innerHeight;
			if (i === 0 && $(window).scrollTop() > counterOffsetTop) {
				$('.initCounterItem').each(function () {
					let counterItem = $(this),
						counterItemValue = counterItem.find('.initCounterItemValue').data('value');

					$({countNum: counterItem.find('.initCounterItemValue').text()}).animate(
						{countNum: counterItemValue},
						{
							duration: 2000,
							easing: 'swing',
							step: function () {
								counterItem.find('.initCounterItemValue').html(Math.floor(this.countNum));
							},
							complete: function () {
								counterItem.find('.initCounterItemValue').html(this.countNum);
							}
						});
				});
				i = 1;
			}
		});
	}

	$(function () {
		initCounter();
		$(window).resize(() => windowWidth = $(window).width());
	});
})(jQuery);
