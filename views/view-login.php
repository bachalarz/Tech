<!-- Login -->

<div class="view view-login">
	
	<div class="container">
		<h1>Login</h1>


		<div class="cnt-input-wrapper">

			<div class="frm frm-login">
				<h3>Login</h3>
				
				<input type="email" id="txt-login-email" placeholder="Email">
				<input type="password" id="txt-login-password" placeholder="Password">

				<div class="frm-button-wrapper">
					<button id="btn-login" class="link">Login</button>
				</div>

			</div>

			<div class="frm frm-create-user">
				<h3>Create user</h3>

				<input min="1" type="text" id="txt-create-user-first-name" placeholder="First name">
				<input min="1" type="text" id="txt-create-user-last-name" placeholder="Last name">
				<input min="1" type="email" id="txt-create-user-email" placeholder="E-mail">
				<input min="1" type="password" id="txt-create-user-password" placeholder="Password">
				<input min="1" type="hidden" id="txt-create-user-role" placeholder="E-mail" value="user">
				<div class="frm-button-wrapper">
					<button id="btn-create-user" class="link">Create user</button>
				</div>
			</div>

		</div>

	</div>

	<?php
		require "view-footer.php";
	?>
	
</div>