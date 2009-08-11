i3.StateManager.states['screen'] = {
	build: function() {
		stockchart = document.createElement('div');
		stockchart.setAttribute('id', 'stockchart');
		stockchart.setAttribute('class', 'carouselItem');
		stockchart.innerHTML = '\
			<script src="http://charts.wikinvest.com/wikinvest/wikichart/javascript/scripts.php" type="text/javascript"></script>\
			<div id="wikichartContainer_22BDD915-AF7D-9B08-554D-EE0D0C98C92B">\
				<div style="width: 100%; text-align: center; vertical-align: center; margin-top: 100px;">\
					<a href="http://get.adobe.com/flashplayer/">\
						<img src="http://cdn.wikinvest.com/wikinvest/images/adobe_flash_logo.gif" alt="Flash" style="border-width: 0px;"/>\
						<br/>Flash Player 9 or higher is required to view the chart<br/><strong>Click here to download Flash Player now</strong>\
					</a>\
				</div>\
			</div>\
			<script type="text/javascript">\
				if (typeof(embedWikichart) != "undefined") {embedWikichart("http://charts.wikinvest.com/WikiChartMini.swf","wikichartContainer_22BDD915-AF7D-9B08-554D-EE0D0C98C92B","100%","400",{"showAnnotations":"true","endDate":"05-08-2009","ticker":"GOOG","liveQuote":"true","startDate":"05-02-2009"});}\
			</script>\
			<div style="font-size:9px;text-align:right;width:100%;font-family:Verdana">\
				<a href="http://www.wikinvest.com/chart/GOOG" style="text-decoration:underline; color:#0000ee;">View the full NASDAQ:GOOG chart</a> at <a href="http://www.wikinvest.com/">Wikinvest</a>\
			</div>\
		';

		/* Screensaver */
		slideshow = H2O.Carousel({ ID: 'mockup', columnAmt: 1, rowAmt: 1, animSpeed: 400, autoScroll: false });
		$('#screen-left').append(slideshow);
		/* Back Button */
		sback = H2O.Button({ ID: 'sback', type: 'back', click: 'slideshow.prevPage(1)'});
		$('#sbbutton').append(sback);
		/* Next Button */
		snext = H2O.Button({ ID: 'snext', type: 'next', click: 'slideshow.nextPage(1)'});
		$('#snbutton').append(snext);

		/* Widgets */
		slideshow.addToCarousel(document.getElementById('stockchart'));
		slideshow.addToCarousel(document.getElementById('rssreader'));
		slideshow.addToCarousel(document.getElementById('calit2map'));

		/* Home Button */
		shome = H2O.Image({ ID: 'shome', src: 'http://marco.calit2.uci.edu/assets/i3/images/shome.png', padding: 0 });
		$('#screen-bottom').append(shome);

		$('#shome').click(function(){
			killScreenSaver();
			i3.StateManager.changeState('content');
		});
	},
	resize: function() {
		slideshow.resize();
		sback.resize();
		snext.resize();
		shome.resize();
	}
};
