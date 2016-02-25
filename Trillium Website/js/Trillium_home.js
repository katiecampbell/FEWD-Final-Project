$(document).ready(function(){
	console.log("js loaded");
	$('.myAwesomeCarousel').slick({
		autoplay: false,
		slidesToShow: 2,
		
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

$(".icons").mouseover(function(){
   	$(this).find("p").stop().slideDown("slow");
});
$(".icons").mouseout(function(){
	$(this).find("p").stop().slideUp("slow");
});

// jQuery find method 
// use this keyword
// https://api.jquery.com/find/