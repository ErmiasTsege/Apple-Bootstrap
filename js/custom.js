$(document).ready(function() {
	if ($(window).width() <= 768){	
		$('.footer-container2').addClass("newClass");
	}else{
		$('.footer-container2').removeClass("newClass");
	}
	$(window).on('resize', function(event){
		event.preventDefault();
		if ($(window).width() <= 768){	
			$('.footer-container2').addClass("newClass");
			$('.footer-container2 ul').hide();
		}else{
			$('.footer-container2').removeClass("newClass");
			 $('.footer-container2 ul').show();
		}	
	});
	// Footer collapse functionality 
	$(document).on("click", ".newClass h6", function(){
		$(this).next('ul').slideToggle();
        $(this).toggleClass("expanded");	
	});
	// Search bar 
	$('.search-link').click(function(event){
		event.preventDefault();
	 $(".navbar-collapse.collapse").removeClass("show");//??
		$(".searchbox").slideToggle();
	});

});

