<!-- Events List -->

<div class="view view-payment">
	
	<div class="container">
		<div class="ctn-payment">
			<h1>booking</h1>
			<div class="payment-step payment-step-1">
				<h2>1. Your shoppingcart</h2>
				<div class="payment-cart">
					<h4>awesome event</h3>
					<h5>copenhagen - 2. may - 100kr</h4>
				</div>
			</div>

			<div class="payment-step payment-step-2">
				<h3>2. billing information</h3>
				<div>
					<input min="1" type="text" id="txt-payment-firstname" placeholder="First name*">
					<input min="1" type="text" id="txt-payment-lastname" placeholder="Last name*">
				</div>
				
				<input min="1" type="text" id="txt-payment-address" placeholder="Address*">
					
				<div>
				<input min="1" type="text" id="txt-payment-postcode" placeholder="Post code*">
					<input min="1" type="text" id="txt-payment-city" placeholder="City*">
				</div>
				<input min="1" type="text" id="txt-payment-email" placeholder="Email*">
			

			

			</div>

			<div class="payment-step payment-step-3">
				<h3>3. payment and confirmation</h3>
				<input min="1" type="text" id="txt-payment-cardnumber" placeholder="Card number*">
				<div>
				<input min="1" type="text" id="txt-payment-expiration" placeholder="Expiration date*">
				<input min="1" type="text" id="txt-payment-cvc" placeholder="Cvc*">
				</div>
				<div class="radio">
					<input type="radio" id="radio-accept"> By ordering you agree to our terms and conditions*
				</div>
				<div class="radio">
					<input type="radio"> Sign me up for the newsletter!
				</div>
				<div class="ctn-btn-payment">
					<button id="btn-payment" class="link">confirm payment</button>
				</div>
				

			</div>
		
		</div>
	</div>

	<?php
		require "view-footer.php";
	?>
	
</div>