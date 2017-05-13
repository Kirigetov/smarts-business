$(document).ready(function() {

	$('.js-detail-img-main').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: false,
		arrows: false,
		fade: true,
		asNavFor: '.js-detail-img-thumb'
	});

	$('.js-detail-img-thumb').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.js-detail-img-main',
		vertical: true, 
		dots: false,
		focusOnSelect: true,
		prevArrow: $('.image-thumb__arrow_prev'),
		nextArrow: $('.image-thumb__arrow_next')
	});

	$('.js-detail-features').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		vertical: true, 
		infinite: true,
		adaptiveHeight: true,
		dots: true,
		focusOnSelect: true,
		dotsClass: 'detail-features__dots',
		prevArrow: $('.detail-features__arrow_prev'),
		nextArrow: $('.detail-features__arrow_next')
	}); 

})


