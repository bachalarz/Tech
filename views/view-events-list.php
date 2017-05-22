<!-- Events List -->

<div class="view view-events-list">
	
	<div class="container">
		<h1>Events</h1>

		<div class="ctn-inner-full">

			<div class="ctn-inner-full-search">

				<div class="ctn-search-btn">
					<div class="search">
						<input type="text" name="event-search" class="lbl-event-search">
						<span class="fa fa-search"></span>
					</div>

					<div class="btn-search-filter"></div>
				</div>

				<div id="ctn-categories">
					<div class="btn-category" id="btn-mobile" data-show-category=""></div>
					<div class="btn-category" id="btn-web" data-show-category=""></div>
					<div class="btn-category" id="btn-design" data-show-category=""></div>
					<div class="btn-category" id="btn-games" data-show-category=""></div>
					<div class="btn-category" id="btn-some" data-show-category=""></div>
					<div class="btn-category" id="btn-more" data-show-category=""></div>
				</div>

			</div>

			<div class="ctn-events">
				<div class="event"></div>

			</div>

		</div>


	</div>

	<?php
		require "view-footer.php";
	?>
	
</div>