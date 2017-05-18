/**********************************/
//		Main JS
/**********************************/

$( document ).ready(function() {
	$("#header").addClass("header-start-position");
	$(".logo-wrapper").addClass("logo-start-position");
    $(".load-symbol-wrapper").fadeOut();
    $(".logo-wrapper").fadeIn(3000, function() {
    	$("#header").animate({
	        top: '0'
	    });
    	$(".logo-wrapper").animate({
	        left: '0',
	        top: '-20px',
	        width: '100px',
	        height: '80px'
	    }, function() {
	    	$(".view-frontpage").css("display", "flex").hide().fadeIn();
	    });
    });
});

/**********************************/
//		Navigation (menu)
/**********************************/

var menuStatus = false; 

$('.ico-menu').on("click", function() {
	if ( menuStatus == false ) {
		menuStatus = true;
		$('.ico-menu-burger').hide();
		$(".ico-menu-close").css("display", "flex").hide().show();
		$("#nav").css("display", "flex").hide().slideDown();

	} else {
		menuStatus = false;
		$('.ico-menu-close').hide();
		$(".ico-menu-burger").css("display", "flex").hide().show();
		$("#nav").slideUp();
	}
})


/**********************************/
//		Functions
/**********************************/
