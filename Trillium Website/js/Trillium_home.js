$(document).ready(function(){
	console.log("js loaded");
	$('.myAwesomeCarousel').slick({
		autoplay: false,
		slidesToShow: 3,
		
	});
});

// $('.multiple-items').slick({
//   infinite: true,
//   slidesToShow: 6,
//   slidesToScroll: 6
// });

$('.autoplay').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
});