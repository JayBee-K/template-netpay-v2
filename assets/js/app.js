(function ($) {
	'use strict';
	let windowWidth = $(window).width();

	let initSetHrefMenu = function () {
		if ($("#header .header-navigation > ul > li > ul").length) {
			$("#header .header-navigation > ul > li > ul").each(function (index) {
				$(this).prev().attr({
					'data-href': $(this).prev().attr('href'),
				});
			});
		}
	}

	let initHeaderMobile = function () {
		if (windowWidth < 1025) {
			if ($("#header .header-navigation > ul > li > ul").length) {
				$("#header .header-navigation").attr('id', 'hasMenu');
				$("#header .header-navigation > ul > li > ul").each(function (index) {
					$(this).prev().attr({
						"href": "#subMenu_" + index,
						"data-bs-toggle": "collapse"
					});

					$(this).attr({
						"id": "subMenu_" + index,
						"class": "collapse list-unstyled mb-0 ",
						"data-bs-parent": "#hasMenu",
					});
				});
			}

			$('#call-navigation').click(function () {
				$('body').toggleClass('is-navigation');
			})

			$('#header-overlay').click(function () {
				$("#header .header-navigation > ul > li > ul").collapse('hide');
				$('body').removeClass('is-navigation is-users');
			});

			$('#call-users').click(function () {
				$('body').addClass('is-users');
			});
		} else {
			if ($("#header .header-navigation > ul > li > ul").length) {
				$("#header .header-navigation").attr('id', '');
				$("#header .header-navigation > ul > li > ul").each(function (index) {
					$(this).prev().attr({
						"href": $(this).prev().attr('data-href'),
						"data-bs-toggle": ""
					});

					$(this).attr({
						"id": "",
						"class": "list-unstyled mb-0 position-absolute zi-2 bg-white d-flex flex-column transition-default border start-50 translate-middle-x",
						"data-bs-parent": "",
					});
				});
			}
		}
	}
	const initStickyHeader = () => {
		const header = $('#header');
		if (header.length) {
			const headerPosition = header.offset().top;
			$(window).scroll(function () {
				const scrollValue = $(window).scrollTop();
				if (scrollValue > headerPosition) {
					header.addClass('is-sticky');
				} else {
					header.removeClass('is-sticky');
				}
			});
		}
	}

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
	let initSlideHeader = function () {
		if ($('#header-slider').length > 0) {
			new Swiper('#header-slider .swiper', {
				loop: true,
				effect: 'fade',
				fadeEffect: {
					crossFade: true
				},
				speed: 250,
				autoplay: {
					delay: 5000,
					disableOnInteraction: false,
				},
				navigation: {
					nextEl: '#header-slider .header-button-next',
					prevEl: '#header-slider .header-button-prev',
				},
			});
		}
	}

	let initSlideHero = function () {
		if ($('#hero-slider').length > 0) {
			new Swiper('#hero-slider .swiper', {
				loop: 1,
				speed: 250,
				autoplay: {
					delay: 5000,
					disableOnInteraction: false,
				},
				navigation: {
					nextEl: '#hero-slider .section-hero_actions--next',
					prevEl: '#hero-slider .section-hero_actions--prev',
				},
			});
		}
	}

	$(function () {
		initSetHrefMenu();
		initHeaderMobile();
		initStickyHeader();
		initCounter();
		initSlideHeader();
		initSlideHero();
		$(window).resize(function () {
			windowWidth = $(window).width();
			initHeaderMobile();
		});
	});
})(jQuery);
