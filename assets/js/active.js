(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        


		$('.popup').magnificPopup({
  type: 'image'
  // other options
});
		
		$('.gallery-item').magnificPopup({
  type: 'image',
  gallery:{
    enabled:true
  }
});


        /*---
        * Owl Carousel
        *-------------------------*/        
    /*    $(".slider-wrap").owlCarousel({
            items: 1,
            nav: true,
            dots: false,
            autoplay: true,
            loop: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            mouseDrag: true,
            touchDrag: true,
        });
	*/
		
		
		
    });
	
	
    
	$(window).load(function(){
		

		
	});

})(jQuery);