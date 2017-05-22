$(document).on("click", ".btn-search-filter", function() {
	console.log("search");
	$(".ctn-categories").slideToggle();

	if( !$(".btn-search-filter").hasClass("open") ){
		console.log("Closed");
		$(".btn-search-filter").addClass("open");
	} else {
		$(".btn-search-filter").removeClass("open");
	}

});