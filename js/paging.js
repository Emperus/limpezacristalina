$(document).ready( function()
	{
		$('a.intercept[href]').click(function(event)
		{
			var link= $(this).attr('href');
			$( "#content" ).animate({
			opacity: 0,
			width: "950px",
			}, 750, function() {
				$('#content').load(link+" .text",function()
				{
					$( "#content" ).animate({
					opacity: 1,
					width: "980px"
					}, 750);
					history.pushState(null, null, link);
				})
			});
			event.preventDefault();
			return false;
		});
		
		window.setInterval(function()
		{
		$( "#cover" ).animate({
			opacity: 0,
			}, 3000, function() {
			$("#cover").remove()
		});
		
		$("#coverb").animate({
			opacity: 0.5,
			left: "0px",
			}, 1000, function()
			{
				$("#coverb").animate({
				opacity: 0,
				left: "200px",
				}, 1000, function()
				{
					$("#coverb").remove()
				});
			});
		},1000);
	});