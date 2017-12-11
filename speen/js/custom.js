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

	/*wow init*/
	new WOW().init();

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
	/* placeholder*/

	if ($('.js-arrow-up').length) {
		$('.js-arrow-up').on("click", function() {
			$('body,html').animate({
				scrollTop: 0
			}, 2000);
			return true;
		});
	};

	if ($('.js-button-nav').length) {
		var $mainNav = $('.navbar-collapse');
		$('.js-button-nav').on('click', function() {
			$(this).toggleClass('active');
			$mainNav.slideToggle('fast', function() {
				$mainNav.removeAttr('style').toggleClass('open');
			});
		});
	};

});

var handler = function() {

	var height_footer = $('footer').height();
	var height_header = $('header').height();
	// $('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});
	$('.introduction').css({
		'margin-top': -height_header - 1,
		'padding-top': height_header
	});
	$('.finish').css({
		'margin-bottom': -height_footer - 1,
		'padding-bottom': height_footer
	});

	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;

	if (viewport_wid <= 991) {

	}

}
$(window).bind('load', handler);
$(window).bind('resize', handler);