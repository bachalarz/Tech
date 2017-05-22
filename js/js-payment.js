

$(document).on("click", "#btn-payment", function(){
		swal({
            title: 'Thank you for your purchase!',
            text: 'An email has been sent to your email address with your booking details! You will now be send to the front page',
 			type: "success"              
        }).then( function() {
        	$(".view").hide();
        	$(".view-frontpage").show();
        	var hello = $(".radio-accept").val();
        	console.log(hello);
        });
});