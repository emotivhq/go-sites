/*Document Ready*//////////////////////////////////////////////////////////////////////////////////////////////////////
jQuery(document).ready(function($) {
	'use strict';
	

	// Cashing variables
	var intro = $('.intro');
	var content = $('.content-wrap');
	var footer = $('.footer');
	
	

    ///////////////////////////////////////////////////////////////////////
	/////////  INTERNAL ANCHOR LINKS SCROLLING (NAVIGATION)  //////////////
	//////////////////////////////////////////////////////////////////////

	$(".scroll").click(function(event){		
		var $elemOffsetTop = $(this).data('offset-top');
		$('html').velocity("scroll", { offset:$(this.hash).offset().top-$elemOffsetTop, duration: 1000, easing:'easeOutExpo'});
		event.preventDefault();
	});
	$('.scrollup').click(function(e){
		e.preventDefault();
		$('html').velocity("scroll", { offset: 0, duration: 1400, mobileHA: false });
		$(window).scrollTop();
	});


	//SCROLL-SPY
	// Cache selectors
	var lastId,
		topMenu = $("#scroll-nav"),
		topMenuHeight = topMenu.outerHeight(),
		// All list items
		menuItems = topMenu.find("a"),
		// Anchors corresponding to menu items
		scrollItems = menuItems.map(function(){
		  var item = $($(this).attr("href"));
		  if (item.length) { return item; }
		});
	
	// Bind to scroll
	$(window).scroll(function(){
	   // Get container scroll position
	   var fromTop = $(this).scrollTop()+topMenuHeight+200;
	   
	   // Get id of current scroll item
	   var cur = scrollItems.map(function(){
		 if ($(this).offset().top < fromTop)
		   return this;
	   });
	   // Get the id of the current element
	   cur = cur[cur.length-1];
	   var id = cur && cur.length ? cur[0].id : "";
	   
	   if (lastId !== id) {
		   lastId = id;
		   // Set/remove active class
		   menuItems
			 .parent().removeClass("active")
			 .end().filter("[href=#"+id+"]").parent().addClass("active");
	   }
	});


	
});/*Document Ready End*/////////////////////////////////////////////////////////////
