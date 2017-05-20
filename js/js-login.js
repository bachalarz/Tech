/**********************************/
//		Login JS
/**********************************/

var loginStatus = false; // true / false 

var userInfo = {
    firstName: "admin",
    lastName: "jensen",
    email: "a@a.dk",
    password: "123",
    role: "admin" // user / admin
};

logIn(loginStatus);

function logIn(loginStatus){
	if ( loginStatus == false ) {
	} else if ( loginStatus == true ) {
		$(".menu-login").hide();
		$(".menu-profile").show();

	} else {

	}
}


// Create user

$("#btn-create-user").click(function(){
	userInfo.firstName = $("#txt-create-user-first-name").val();
    userInfo.lastName = $("#txt-create-user-last-name").val();
    userInfo.email = $("#txt-create-user-email").val();
    userInfo.password = $("#txt-create-user-password").val();
    userInfo.role = $("#txt-create-user-role").val(); // user / admin
    $("#txt-create-user-first-name, #txt-create-user-last-name, #txt-create-user-email, #txt-create-user-password").val("")
    swal({
            title: 'Thank you for signing up!',
            text: 'You can now login',   
        });
});


// Login

$("#btn-login").click(function(){
	var inputEmail = $("#txt-login-email").val();
	var inputPassword = $("#txt-login-password").val();

	if ( inputEmail == userInfo.email && inputPassword == userInfo.password) {
		
		$("#txt-edit-user-first-name").val(userInfo.firstName);
		$("#txt-edit-user-last-name").val(userInfo.lastName);
		$("#txt-edit-user-email").val(userInfo.email);
		$("#txt-edit-user-password").val(userInfo.password);
		swal({
            title: 'You are now signed in!',  
            text: 'You can now login',    
        }).then( function() {
        	loginStatus = true;
	    	logIn(loginStatus);
			setViewProfile(); 
        });
	} else {
		swal("Wrong login!", "Try again", "error");
		$("#txt-login-email, #txt-login-password").val("")
	}
});


// Edit user

$("#btn-edit-user").click(function(){
	userInfo.firstName = $("#txt-edit-user-first-name").val();
    userInfo.lastName = $("#txt-edit-user-last-name").val();
    userInfo.email = $("#txt-edit-user-email").val();
    userInfo.password = $("#txt-edit-user-password").val();
    userInfo.role = $("#txt-edit-user-role").val(); // user / admin
    $("#txt-create-user-first-name, #txt-create-user-last-name, #txt-create-user-email, #txt-create-user-password").val("")
    swal({
            title: 'Your profile has been updated!',
            text: '',   
        });
});

