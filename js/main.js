$(document).ready(function (e) {

	$('.for_scroll').click(function () {
		$("html, body").animate({
			scrollTop: $(".main_form").offset().top + 100
		}, 2000);
		return false;
	});

	$(".review-slider").lightSlider({
		item: 1,
		adaptiveHeight: true,
		controls: false
	});

	$('.weeks').equalHeights();
});