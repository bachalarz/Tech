<!DOCTYPE html>
<html>
<head>
	<title>Tech event</title>
	<meta charset="UTF-8">
	<meta name="author" content="Den seje gruppe">
  	<meta name="viewport" content="width=device-width, initial-scale=1.0">
  	<link rel="shortcut icon" type="image/png" href="img/favicon.png"/>
	<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700" rel="stylesheet">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/sweetalert2/6.6.2/sweetalert2.min.css">

	<link rel="stylesheet" type="text/css" href="css/style-main.css">
	<link rel="stylesheet" type="text/css" href="css/style-header.css">

</head>
<body>

	<div class="wrapper-main">

		<div class="load-symbol-wrapper">
			<i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i>
		</div>

<?php
	require_once "views/view-header.php";
	require_once "views/view-frontpage.php";
?>

	</div> <!-- #main-wrapper -->

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="https://cdn.jsdelivr.net/sweetalert2/6.6.2/sweetalert2.min.js"></script>


	<script src="js/js-main.js"></script>


</body>
</html>