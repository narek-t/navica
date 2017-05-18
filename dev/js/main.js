$(document).ready(function() {
	$('.home-blog__slider').slick({
		dots: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
	});
	$('.services__menu > li.menu-item-has-children > a').click(function(event) {
		event.preventDefault();
		$(this).parents('li').toggleClass('opened');
	});
});