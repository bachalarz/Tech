/**********************************/
//		Main JS
/**********************************/

var startpage = ""; // Startside kan indsættes her



/**********************************/
//		Start Animation
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
//		Links
/**********************************/

$(document).on("click",".link", function() {
	// Get its data-go-to attribute
	var sGoToWindow = $(this).attr("data-go-to");
	flowBar = sGoToWindow;
	// If the sGoToWindow is set, hide current window and show next one
	if (sGoToWindow != null || sGoToWindow != undefined) {
		fnHideView();
		$(".view-"+sGoToWindow).show();
	} 

});

function fnHideView() {
	$(".view").hide();
}

// Set new startpage

setView(startpage);
function setView(input) { 
	
	$(".view").hide();
	var page = input;
	$(".view-"+page).show();
}


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
