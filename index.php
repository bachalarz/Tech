<!DOCTYPE html>
<html>
<head>
	<title>Tech event</title>
	<meta charset="UTF-8">
	<meta name="author" content="Den seje gruppe">
  	<meta name="viewport" content="width=device-width, initial-scale=1.0">
  	<link rel="shortcut icon" type="image/png" href="img/favicon.png"/>
	<link href="https://fonts.googleapis.com/css?family=Arimo:400,400i,700|Poppins:500|Raleway:500i" rel="stylesheet">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/sweetalert2/6.6.2/sweetalert2.min.css">

	<link rel="stylesheet" type="text/css" href="css/style-main.css">
	<link rel="stylesheet" type="text/css" href="css/style-frontpage.css">
	<link rel="stylesheet" type="text/css" href="css/style-about-us.css">
	<link rel="stylesheet" type="text/css" href="css/style-create-account-admin.css">
	<link rel="stylesheet" type="text/css" href="css/style-create-account-user.css">
	<link rel="stylesheet" type="text/css" href="css/style-create-event.css">
	<link rel="stylesheet" type="text/css" href="css/style-edit-event.css">
	<link rel="stylesheet" type="text/css" href="css/style-event.css">
	<link rel="stylesheet" type="text/css" href="css/style-events-list.css">
	<link rel="stylesheet" type="text/css" href="css/style-login.css">
	<link rel="stylesheet" type="text/css" href="css/style-partners.css">
	<link rel="stylesheet" type="text/css" href="css/style-contact.css">

	<link rel="stylesheet" type="text/css" href="css/style-payment.css">


	<link rel="stylesheet" type="text/css" href="css/style-profile.css">
	<link rel="stylesheet" type="text/css" href="css/style-admin.css">


</head>
<body>

	<div class="wrapper-main">

		<div class="load-symbol-wrapper">
			<i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i>
		</div>

<?php
	require_once "views/view-header.php";
	require_once "views/view-frontpage.php";
	require_once "views/view-about-us.php";
	require_once "views/view-create-account-admin.php";
	require_once "views/view-create-account-user.php";
	require_once "views/view-create-event.php";
	require_once "views/view-edit-event.php";
	require_once "views/view-event.php";
	require_once "views/view-events-list.php";
	require_once "views/view-login.php";
	require_once "views/view-partners.php";	
	require_once "views/view-contact.php";
	require_once "views/view-profile.php";

	require_once "views/view-payment.php";

	require_once "views/view-admin.php";

?>

	</div> <!-- #main-wrapper -->

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="https://cdn.jsdelivr.net/sweetalert2/6.6.2/sweetalert2.min.js"></script>


	<script src="js/js-main.js"></script>
	<script src="js/js-event.js"></script>
	<script src="js/js-login.js"></script>
	<script src="js/js-payment.js"></script>

	<script src="js/js-admin.js"></script>

	<script src="js/js-events-list.js"></script>



</body>
</html>