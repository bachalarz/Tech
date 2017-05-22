/**********************************/
//		Admin JS
/**********************************/

// Create admin user

$("#btn-create-admin-user").click(function(){
    $(".input-create-admin").val("")
    swal({
            title: 'Admin user has now been created!',
            text: '(Not really, we are just pretending)',   
        });
});


// Create Event

$("#btn-create-event").click(function(){
    $(".input-create-event").val("")
    swal({
            title: 'Event has been created!',
            text: 'You will now be send to the event page',   
        }).then( function() {
        	setViewEvent();
        });
});