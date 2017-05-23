/**********************************/
//		Contact JS
/**********************************/

// Contact form

$("#btn-contact-us").click(function(){
    $(".input-contact").val("")
    swal({
            title: 'Your message has been send!',
            text: '(Not really, we are just pretending)',   
        });
});