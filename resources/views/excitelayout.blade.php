<!DOCTYPE html>
<html lang="en">

	@yield('header_context')

<body data-twttr-rendered="true" style>
	<div id="wrap">

	@yield('content_head')
	<div id="content">
		<div id="main">
			<div id="recipe_detail">
				@yield('above_kannrenn')

				<div id="cxense_kannrenn" class="brdrbox mT10 pB10"></div>
				@yield('below_kannrenn')
			</div>
		</div>
	
		<div id="sub">
			@yield('right_above')
			<div id="cxense_user_like" class="relate mT10" style="height:320px;"></div>
			<script type="text/javascript">
				(function($) {
				   $(function() {
				      $("#slider").simplyScroll({
				      orientation: 'vertical',
				      auto: true,
				      manualMode: 'loop',
				      frameRate: 20,
				      speed: 1
				      });
				   });
				})(jQuery);
			</script>

			@yield('right_middle')
			<div id="cxense_latest" class="relate mT10" style="height:320px;"></div>

			@yield('right_below')
			<div id="cxense_trend" class="relate mT10" style="height:320px;"></div>
		</div>
	</div>
	<script type="text/javascript" src="http://cdn.cxense.com/cx.js"></script>
	<script type="text/javascript" src=/js/cxense_content_rec.js></script>

</body>
</html>
