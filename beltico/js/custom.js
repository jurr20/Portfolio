$(window).load(function() {
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
		$('body').addClass('ios');
	} else {
		$('body').addClass('web');
	};
	$('body').removeClass('loaded');
});
/* viewport width */
function viewport() {
	var e = window,
		a = 'inner';
	if (!('innerWidth' in window)) {
		a = 'client';
		e = document.documentElement || document.body;
	}
	return {
		width: e[a + 'Width'],
		height: e[a + 'Height']
	}
};
/* viewport width */
$(function() {

	if ($('.holder-iframe').length) {

		$('.holder-iframe').click(function () {
			$('.holder-iframe iframe').css("pointer-events", "auto");
		});
		
		$( ".holder-iframe" ).mouseleave(function() {
			$('.holder-iframe iframe').css("pointer-events", "none"); 
		});
	};

	// BEGIN Скрипт плавного перехода к нужному блоку
	if ($('.js-arrow-down').length) {
		$(".js-main-nav").on("click", "a", function(event) {
			//отменяем стандартную обработку нажатия по ссылке
			event.preventDefault();
			//забираем идентификатор бока с атрибута href
			var id = $(this).attr('href'),
				//узнаем высоту от начала страницы до блока на который ссылается якорь
				top = $(id).offset().top;
			//анимируем переход на расстояние - top за 1500 мс
			$('body,html').animate({
				scrollTop: top
			}, 1500);
		});
	};

	if ($('.js-arrow-down').length) {
		$(".js-arrow-down").on("click", "a", function(event) {
			event.preventDefault();
			var id = $(this).attr('href'),
				top = $(id).offset().top;
			$('body,html').animate({
				scrollTop: top
			}, 1000);
		});
	};
	// END Скрипт плавного перехода к нужному блоку

	/* main menu*/
	if ($('.js-button-nav').length) {
		var $mainNav = $('.navbar-collapse');
		$('.js-button-nav').on('click', function() {
			$(this).toggleClass('active');
			$mainNav.slideToggle('fast', function() {
				$mainNav.removeAttr('style').toggleClass('open');
			});
		});
	};

	/* placeholder*/
	$('input, textarea').each(function() {
		var placeholder = $(this).attr('placeholder');
		$(this).focus(function() {
			$(this).attr('placeholder', '');
		});
		$(this).focusout(function() {
			$(this).attr('placeholder', placeholder);
		});
	});

	/* components */

	if ($('.fancybox a').length) {
		$('.fancybox a').fancybox({
			"margon": 10,
			"padding": 10,
			"autoScale": true,
			"zoomOpacity": false,
			"zoomSpeedIn": 1500,
			"zoomSpeedOut": 1500,
			"zoomSpeedChange": 1000,
			"frameWidth": 700,
			"frameHeight": 600,
			"overlayShow": true,
			"overlayOpacity": 0.8,
			"overlayColor": '#000',
			"hideOnContentClick": false,
			"centerOnScroll": false,
			"showNavArrows": true,
			"showCloseButton": true
		});
	};


});

var handler = function() {

	var height_footer = $('footer').height();
	var height_header = $('header').height();
	//$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});


	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;

	if (viewport_wid <= 991) {

	}

}
$(window).bind('load', handler);
$(window).bind('resize', handler);