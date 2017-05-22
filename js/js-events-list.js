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

	$(".ctn-events .noslide-container .noslide").hide();


})

