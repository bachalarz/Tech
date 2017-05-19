<!-- Profile -->

<div class="view view-profile">
	
	<div class="container">
		<h1>Profile</h1>

		<div class="">
			<h3>Your profile</h3>
			
			<input min="1" type="text" id="txt-edit-user-first-name" placeholder="First name">
			<input min="1" type="text" id="txt-edit-user-last-name" placeholder="Last name">
			<input min="1" type="email" id="txt-edit-user-email" placeholder="E-mail">
			<input min="1" type="password" id="txt-edit-user-password" placeholder="Password">

			<button id="btn-edit-user" class="link">Edit user</button>

		</div>


	</div>

	<?php
		require "view-footer.php";
	?>
	
</div>