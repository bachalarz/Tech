var sCurrentCategory;

if(userInfo.role == "admin" && loginStatus) {
	$(".ctn-event-edit").css("display", "block");
}



$(document).on("click", ".btn-search-filter", function() {
	console.log("search");
	$(".ctn-categories").slideToggle();

	if( !$(".btn-search-filter").hasClass("open") ){
		console.log("Closed");
		$(".btn-search-filter").addClass("open");
	} else {
		$(".btn-search-filter").removeClass("open");
	}

})


$(document).on("click", ".btn-category", function() {

	var sCategory = $(this).attr("data-show-category");
	console.log(sCategory);

	if(sCurrentCategory == sCategory) {
		$(".ctn-events .noslide-container .noslide").fadeIn();
		$(this).removeClass("active-category");
		sCurrentCategory = "";
	} else {
		$(".ctn-events .noslide-container .noslide").fadeOut();
		$(".category-"+sCategory).fadeIn();
		$(this).addClass("active-category");
		sCurrentCategory = sCategory;
	}

})



$(".lbl-event-search").focusout( function(){
	fnSearchEvents();
});



$(".ctn-search-btn form").on("submit", function(e){
	e.preventDefault();
	fnSearchEvents();
})


$(document).on("click", ".search .fa-search", function() {
	fnSearchEvents();
})


function fnSearchEvents() {
	
	var sSearchInput = $(".lbl-event-search").val();
	console.log(sSearchInput);

	var aoEvents = $(".ctn-events .noslide .info");
	$(".ctn-events .noslide-container .noslide").fadeOut();
	
	for(var i= 0; i<aoEvents.length; i++) {
		var oEvent = $(aoEvents[i]);
		var sTitle = oEvent.children("h3").text();
		console.log(sTitle);
		if( (sTitle).startsWith(sSearchInput) || !sSearchInput ) {
			console.log("match");
			console.log(oEvent);
			oEvent.parent().parent().parent().fadeIn();

		}

	}

}


$(document).on("click", ".ctn-event-edit .fa-trash", function(){

	console.log("delete");
	$(this).parent().parent().parent().parent().remove();
})


$(document).on("click", ".ctn-event-edit .fa-edit", function(){

	console.log("fa-edit");
})










