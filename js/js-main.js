/**********************************/
//		Main JS
/**********************************/

var startpage = "about-us"; // Startside kan indsættes her


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
	    	$(".view-"+startpage).css("display", "flex").hide().fadeIn();
	    	$(".logo-wrapper").addClass("link");
	    });
    });
});


/**********************************/
//		Navigation (menu)
/**********************************/

var menuStatus = false; 

$('.ico-menu').on("click", function() {
	if ( menuStatus == false ) {
		showMenu();
	} else {
		hideMenu();
	}
})

function showMenu() {
	menuStatus = true;
		$('.ico-menu-burger').hide();
		$(".ico-menu-close").css("display", "flex").hide().show();
		$("#nav").css("display", "flex").hide().slideDown();
}

function hideMenu() {
	menuStatus = false;
		$('.ico-menu-close').hide();
		$(".ico-menu-burger").css("display", "flex").hide().show();
		$("#nav").slideUp();
}


/**********************************/
//		Links
/**********************************/

$(document).on("click",".link", function() {
	if ( $( this ).is( ".menu-tab" ) ) {
		$(".menu-tab").css("color", "#95989A");
		$(this).css("color", "#015BB5");
	}
	var sGoToWindow = $(this).attr("data-go-to");
	flowBar = sGoToWindow;
	if (sGoToWindow != null || sGoToWindow != undefined) {
		fnHideView();
		$(".view-"+sGoToWindow).css("display", "flex").hide().fadeIn();
		if ( menuStatus !== false ) {
			hideMenu();
		}	
	} 

});

function fnHideView() {
	$(".view").hide();
}

setView(startpage);
function setView(input) { 
	
	$(".view").hide();
	var page = input;
	$(".view-"+page).css("display", "flex").hide().fadeIn();
}


/**********************************/
//		Functions
/**********************************/



