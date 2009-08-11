i3.StateManager.states['screen'] = {
	build: function() {

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
